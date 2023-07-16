const fs = require('fs');
const path = require('path');
const client = require('@sendgrid/client');
const juice = require('juice');
const sass = require('sass');
const cheerio = require('cheerio');

require('dotenv').config();

const beep = (...f) => console.log(...f) || f[0];

const IS_DEV = !(process.env.NODE_ENV === 'production');

console.log(IS_DEV ? "Running in dev mode" : "Running in prod mode");

// Read the JSON feed
const feedData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'dist', 'feeds', 'feed.json'), 'utf8'));

const latestPost = feedData.items[0];

//Ensure date was within last 24 hours (treat date as UTC-7)
const wasPostedToday = beep(new Date(latestPost.date_published)) > beep(new Date(Date.now() - (24 + 7)*60*60*1000))

if (wasPostedToday) {
  console.log(`${latestPost.title} was posted today!`);

  client.setApiKey(process.env.SENDGRID_API_KEY);

  const segments = {
    'uncategorized': process.env.SENDGRID_SEGMENT_UNCATEGORIZED,
    'software': process.env.SENDGRID_SEGMENT_SOFTWARE,
    'faith': process.env.SENDGRID_SEGMENT_FAITH,
  }

  console.log("Building email html....");

  const css = sass.compile(path.join(__dirname, 'style.scss')).css;

  const removeFootnoteLinks = (html) => {
    const $ = cheerio.load(html);

    $('.footnotes-list .footnote-item a.footnote-backref').each(function () {
      const link = $(this);
      link.remove();
    });

    $('.footnote-ref a').each(function () {
      const ref = $(this);
      const text = ref.text().replace(/\D/g, '');
      ref.replaceWith(text);
    });

    return $.html();
  };

  const format = (html, url, title) => {
    return juice(`
      <style>
      ${css}
      </style>
      <div class="article-content">
        <p>
          <small>
            <a href="${url}">View this article online</a>
          </small>
        </p>
        <h1>TEST: ${title}</h1>
        ${removeFootnoteLinks(html)}
      </div>`);
  };

  const createReq = {
    method: 'POST',
    url: '/v3/marketing/singlesends',
    body: {
      name: latestPost.title,
      email_config: {
        html_content: format(latestPost.content_html, latestPost.url, latestPost.title),
        subject: 'TEST: ' + latestPost.title,
      },
      send_to: {
        segment_ids: [ segments[latestPost.category] ]
      },
      sent_at: 'now',
      status: 'triggered'
    }
  };

  console.log("Creating Single Send....");

  client.request(createReq)
    .then(([response, body]) => {
      if (IS_DEV) {
        console.log('Status Code:', response.statusCode);
        console.log('Body:', response.body);
      }

      var scheduleReq = {
        method: 'PUT',
        url: `/v3/marketing/singlesends/${response.body.id}/schedule`,
        body: {
          send_at: 'now'
        }
      };

      if (!IS_DEV) {
        console.log("Sending Single Send....");
        console.log(scheduleReq)
        return client.request(scheduleReq);
      }
      else {
        console.log('Request to schedule:', scheduleReq);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
else {
  console.log(`${latestPost.title} was not posted today; skipping email.`);
}
