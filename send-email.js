const fs = require('fs');
const path = require('path');
const client = require('@sendgrid/client');
require('dotenv').config();

// Set your SendGrid API key
client.setApiKey(process.env.SENDGRID_API_KEY);

const segments = {
  'uncategorized': process.env.SENDGRID_SEGMENT_UNCATEGORIZED,
  'software': process.env.SENDGRID_SEGMENT_SOFTWARE,
  'faith': process.env.SENDGRID_SEGMENT_FAITH,
}

console.log(segments);

// Read the JSON feed
const feedPath = path.join(__dirname, 'dist', 'feeds', 'feed.json');
const feedData = JSON.parse(fs.readFileSync(feedPath, 'utf8'));

const latestPost = feedData.items[0];

const format = (html, url) => {
  return `<div><p><small><a href="${url}">View this article online</a></small></p>${html}</div>`
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

console.log(request);

// Send the request
client.request(request)
  .then(([response, body]) => {
    console.log('Status Code:', response.statusCode);
    console.log('Response Body:', response.body);
  })
  .catch(error => {
    console.error('Error:', error);
  });
