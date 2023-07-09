const fs = require('fs');
const path = require('path');
const client = require('@sendgrid/client');
const juice = require('juice');
const sass = require('sass');

require('dotenv').config();

const beep = (...f) => console.log(...f) || f[0]

// Set your SendGrid API key
client.setApiKey(process.env.SENDGRID_API_KEY);

const segments = {
  'uncategorized': process.env.SENDGRID_SEGMENT_UNCATEGORIZED,
  'software': process.env.SENDGRID_SEGMENT_SOFTWARE,
  'faith': process.env.SENDGRID_SEGMENT_FAITH,
}

// Read the JSON feed
const feedData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'dist', 'feeds', 'feed.json'), 'utf8'));

const latestPost = feedData.items[0];

//Check date
const wasPostedToday = beep(new Date().toISOString().split('T')[0]) == beep(latestPost.date_published.split('T')[0]);

if (wasPostedToday) {
  console.log(`${latestPost.title} was posted today! Sending email...`);

  const css = sass.compile(path.join(__dirname, 'style.scss')).css;

  const format = (html, url) => {
    var wrapped = `
    <style>
    ${css}
    </style>
    <div class="article-content">
        <p>
          <small>
            <a href="${url}">View this article online</a>
          </small>
        </p>
        ${html}
      </div>`

    return juice(wrapped);
  }

  // Set up the API request
  const request = {
    method: 'POST',
    url: '/v3/marketing/singlesends',
    body: {
      name: latestPost.title,
      email_config: {
        html_content: format(latestPost.content_html, latestPost.url),
        subject: latestPost.title,
      },
      send_to: {
        segment_ids: [ segments[latestPost.category] ]
      }
    }
  };

  // Send the request
  client.request(request)
    .then(([response, body]) => {
      console.log('Status Code:', response.statusCode);
      console.log('Response Body:', response.body);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
else {
  console.log(`${latestPost.title} was not posted today; skipping email.`);
}
