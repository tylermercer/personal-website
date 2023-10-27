export async function onRequestGet(context) {
  const sendgridApiKey = 'YOUR_API_KEY_HERE'; // Replace with your SendGrid API key
  const url = 'https://api.sendgrid.com/v3/marketing/contacts';

  const payload = {
    contacts: [
      // {
      //   email: 'foobar@example.com',
      //   custom_fields: { w1: 'coffee', w33: '42', e2: 'blue' }
      // }
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
  const response = await fetch(url, fetchOptions).then(r => r.text());

  // Return the response from SendGrid
  return new Response(response, {
    headers: {
      "Content-Type": "application/json"
    }
  });
}
