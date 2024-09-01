import type { APIRoute } from "astro";

const categoryLabels: Record<string, string> = {
  category_faith: 'Faith',
  category_software: 'Software',
  category_uncategorized: 'Other'
};

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  console.log("Called");
  let formData = await request.formData();
  let fromJs = !!request.headers.get('X-From-JS');

  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

  const defaults = { category_faith: 'no', category_software: 'no', category_uncategorized: 'no' };

  const email = formData.get('email_address');

  if (!fromJs || !validateEmail(email)) {
    return new Response(JSON.stringify({ error: 'Invalid email address' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  }

  const categoryEntries =
    Array.from(formData.entries())
      .filter(e => e[0].startsWith('category_'));


  if (!categoryEntries.some(e => e[1] === 'yes')) {
    return new Response(JSON.stringify({ error: 'Must subscribe to at least one category' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  }
  console.log("Validated");

  const custom_fields = {
    ...defaults,
    ...Object.fromEntries(categoryEntries)
  }

  const sendgridApiKey = locals.runtime.env.SENDGRID_API_KEY;

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
    .catch((e) => ({ ok: false, body: e }));

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

  const categoriesString = Object.entries(custom_fields).some(e => e[1] === 'no') ?
    formatter.format(categoryEntries.map(e => categoryLabels[e[0]])) :
    '';

  console.log(categoriesString);

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
              categories: categoriesString
            }
          }
        ],
        from: { email: 'hello@tylermercer.net', name: 'Tyler Mercer' },
        template_id: locals.runtime.env.SENDGRID_WELCOME_TEMPLATE_ID
      }),
    })
    .then(async r => ({ ok: r.ok, body: r.body }))
    .catch((e) => ({ ok: false, body: e }));

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

function validateEmail(email: FormDataEntryValue | null) {
  return email != null && typeof email === 'string' && email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};