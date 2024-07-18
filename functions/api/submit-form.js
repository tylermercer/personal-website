const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};


export async function onRequestPost({ request, env }) {
  console.log("Called");
  let formData = await request.formData();
  let fromJs = !!request.headers.get('X-From-JS');

  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

  const email = formData.get('email_address');

  if (!validateEmail(email)) {
    return new Response(JSON.stringify({ error: 'Invalid email address' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  }

  console.log("Validated");

  const custom_fields = {
    ...defaults,
  }

  const sendgridApiKey = env.SENDGRID_API_KEY;

  // Send the Fetch request to SendGrid
  const addContactResponse = await fetch(
    "https://api.sendgrid.com/v3/marketing/contacts",
    {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${sendgridApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contacts: [
          {
            email,
            custom_fields
          }
        ]
      }),
    })
    .then(async r => ({ ok: r.ok, body: await r.json() }))
    .catch(() => ({ ok: false }));

  console.log("Contact added");

  console.log(addContactResponse);

  if (!addContactResponse.ok) {
    console.error("Error adding new contact", addContactResponse.body);
    return new Response(JSON.stringify({ error: 'Something went wrong. Please try again.', data: addContactResponse }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  }

  console.log("Contact added");

  // Send the email to the added contact
  const sendEmailResponse = await fetch(
    "https://api.sendgrid.com/v3/mail/send",
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${sendgridApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [
              { email }
            ],
            dynamic_template_data: {
            }
          }
        ],
        from: { email: 'hello@notes.evelynescobar.art', name: 'Evelyn Mercer' },
        template_id: env.SENDGRID_WELCOME_TEMPLATE_ID
      }),
    })
    .then(async r => ({ ok: r.ok }))
    .catch(() => ({ ok: false }));

  console.log("Email sent");

  if (!sendEmailResponse.ok) {
    console.error("Error sending email to new contact", sendEmailResponse.body);
    return new Response(JSON.stringify({ error: 'Something went wrong. Please try again.', data: sendEmailResponse }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  }

  console.log("Sending response");

  // Return the response from SendGrid
  return new Response(JSON.stringify({ addContactResponse, sendEmailResponse }), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}
