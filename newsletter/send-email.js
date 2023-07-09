const fs = require('fs');
const path = require('path');
const client = require('@sendgrid/client');
const juice = require('juice');
const sass = require('sass');
const cheerio = require('cheerio');

require('dotenv').config();

const beep = (...f) => console.log(...f) || f[0];

// Read the JSON feed
const feedData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'dist', 'feeds', 'feed.json'), 'utf8'));

const latestPost = feedData.items[0];

//Check date
const wasPostedToday = new Date().toISOString().split('T')[0] == latestPost.date_published.split('T')[0];

if (wasPostedToday) {
  console.log(`${latestPost.title} was posted today!`);

  client.setApiKey(process.env.SENDGRID_API_KEY);

  const segments = {
    'uncategorized': process.env.SENDGRID_SEGMENT_UNCATEGORIZED,
    'software': process.env.SENDGRID_SEGMENT_SOFTWARE,
    'faith': process.env.SENDGRID_SEGMENT_FAITH,
  }

  console.log("Compiling email css....");

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
        <h1>${title}</h1>
        ${removeFootnoteLinks(html)}
      </div>`);
  };

  // Set up the API request
  const request = {
    method: 'POST',
    url: '/v3/marketing/singlesends',
    body: {
      name: latestPost.title,
      email_config: {
        html_content: format(latestPost.content_html, latestPost.url, latestPost.title),
        subject: latestPost.title,
      },
      send_to: {
        segment_ids: [ segments[latestPost.category] ]
      }
    }
  };

  console.log("Creating Single Send....");

  // Send the request
  client.request(request)
    .then(([response, body]) => {
      console.log('Status Code:', response.statusCode);
      console.log('Response Body:', response.body);

      // return client.request({
      //   method: 'POST',
      //   url: `/v3/marketing/singlesends/${response.body.id}`,
      //   body: {
      //     send_at: 'now'
      //   }
      // });
    })
    .catch(error => {
      console.error('Error:', error);
    });

  console.log("Sending Single Send....");

  //TODO
}
else {
  console.log(`${latestPost.title} was not posted today; skipping email.`);
}
