const fetch = require('node-fetch');
const path = require('path');
const client = require('@sendgrid/client');
const juice = require('juice');
const sass = require('sass');
const cheerio = require('cheerio');
const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs');

require('dotenv').config();


const beep = (...f) => console.log(...f) || f[0];

if (!(process.env.SENDGRID_API_KEY &&
  process.env.SENDGRID_SEGMENT_UNCATEGORIZED &&
  process.env.SENDGRID_SEGMENT_SOFTWARE &&
  process.env.SENDGRID_SEGMENT_FAITH &&
  process.env.SENDGRID_UG_UNCATEGORIZED &&
  process.env.SENDGRID_UG_SOFTWARE &&
  process.env.SENDGRID_UG_FAITH &&
  process.env.SENDGRID_SENDER_ID)) {
  console.error("Missing environment variables!");
  process.exit(1);
}

console.log(!argv.prod ? "Running in dev mode" : "Running in prod mode");

function processFeedData(feedData) {
  const latestPost = feedData.items[0];
  
  //Ensure date was within last 24 hours (treat date as UTC-7)
  const wasPostedToday = new Date(latestPost.date_published) > new Date(Date.now() - (24 + 7)*60*60*1000)
  
  if (wasPostedToday || argv.skipDateCheck) {
    console.log(`${latestPost.title} was posted today!`);
  
    client.setApiKey(process.env.SENDGRID_API_KEY);
  
    const segments = {
      'uncategorized': process.env.SENDGRID_SEGMENT_UNCATEGORIZED,
      'software': process.env.SENDGRID_SEGMENT_SOFTWARE,
      'faith': process.env.SENDGRID_SEGMENT_FAITH,
    }
  
    const unsubGroups = {
      'uncategorized': +process.env.SENDGRID_UG_UNCATEGORIZED,
      'software': +process.env.SENDGRID_UG_SOFTWARE,
      'faith': +process.env.SENDGRID_UG_FAITH,
    }

    const senderId = +process.env.SENDGRID_SENDER_ID;
  
    console.log("Building email html....");
  
    const css = sass.compile(path.join(__dirname, 'style.scss')).css;

    const fixRelativeLinks = (html) => {
      const $ = cheerio.load(html);
  
      $('a[href^="/"]').each(function () {
        const link = $(this);
        link.attr('href', `https://tylermercer.net${link.attr('href')}`);
      });
  
      return $.html();
    };
  
    const removeFootnoteLinks = (html) => {
      const $ = cheerio.load(html);
  
      $('section a[href^="#fnref"]').each(function () {
        const link = $(this);
        link.remove();
      });

      $('h1 a, h2 a, h3 a, h4 a, h5 a, h6 a, sup a').each(function () {
        const ref = $(this);
        const text = ref.text().replace(/[\[\]]/g, '');
        ref.replaceWith(text);
      });
  
      return $.html();
    };
  
    const format = (html, url, title) => {
      return juice(fixRelativeLinks(removeFootnoteLinks(`
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
          ${html}
          <hr>
          <p><a href="${url}#comments">Leave a comment</a></p>
        </div>`)));
    };

    const htmlContent = format(latestPost.content_html, latestPost.url, latestPost.title);
  
    const createReq = {
      method: 'POST',
      url: '/v3/marketing/singlesends',
      body: {
        name: latestPost.title,
        email_config: {
          html_content: htmlContent,
          generate_plain_content: true,
          subject: '[New Post] ' + latestPost.title,
          sender_id: senderId,
          suppression_group_id: unsubGroups[latestPost.category]
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
        if (!argv.prod) {
          console.log('Status Code:', response.statusCode);
          console.log('Body:', response.body);
        }
  
        // var scheduleReq = {
        //   method: 'PUT',
        //   url: `/v3/marketing/singlesends/${response.body.id}/schedule`,
        //   body: {
        //     send_at: 'now'
        //   }
        // };
  
        // if (argv.send) {
        //   console.log("Sending Single Send....");
        //   console.log(scheduleReq)
        //   return client.request(scheduleReq).then(() => console.log("Sent!"));
        // }
        // else {
        //   console.log('Request to schedule:', scheduleReq);
        // }
      })
      .catch(error => {
        console.error('Error:', error);
        console.log(error.response.body.errors);
      });
  }
  else {
    console.log(`${latestPost.title} was not posted today; skipping email.`);
  }
}

// if (argv.prod) {
//   // Read and process feed data from live site
//   fetch("https://tylermercer.net/feeds/feed.json").then(res => res.json()).then(processFeedData);
// }
// else {
  processFeedData(JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'dist', 'feeds', 'feed.json'), 'utf8')));
// }