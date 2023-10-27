export async function onRequestGet({ request, env }) {
  const sendgridApiKey = env.SENDGRID_API_KEY; // Replace with your SendGrid API key
  const url = 'https://api.sendgrid.com/v3/marketing/contacts';

  const email = 'russell.mercer@missionary.org';

  const custom_fields = { category_faith: 'yes', category_software: 'no', category_uncategorized: 'no' };

  const payload = {
    contacts: [
      {
        email,
        custom_fields
      }
    ]
  };

  const headers = {
    'Authorization': `Bearer ${sendgridApiKey}`,
    'Content-Type': 'application/json',
  };

  const fetchOptions = {
    method: 'PUT',
    headers,
    body: JSON.stringify(payload),
  };

  // Send the Fetch request to SendGrid
  const response = await fetch(url, fetchOptions).then(r => r.json());

  
  // Send the email to the added contact
  const emailPayload = {
    personalizations: [
      {
        to: [
          { email }
        ]
      }
    ],
    from: { email: 'hello@tylermercer.net', name: 'Tyler Mercer' },
    template_id: process.env.SENDGRID_WELCOME_TEMPLATE
  };

  const emailHeaders = {
    'Authorization': `Bearer ${sendgridApiKey}`,
    'Content-Type': 'application/json',
  };

  const emailOptions = {
    method: 'POST',
    headers: emailHeaders,
    body: JSON.stringify(emailPayload),
  };

  // // Send the Fetch request to SendGrid to send the email
  // const emailResponse = await fetch(sendgridEmailUrl, emailOptions);

  // Return the response from SendGrid
  return new Response(JSON.stringify({response, envTest: env.SENDGRID_UG_UNCATEGORIZED }), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}
