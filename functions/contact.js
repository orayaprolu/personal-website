// netlify/functions/contact.js

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();

const allowedOrigins = ["https://ojaaas.com"];
app.use(cors({
  origin: allowedOrigins,
}));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "orayaprolu@gmail.com",
    pass: process.env.GMAIL_PASS
  },
});

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  const body = JSON.parse(event.body);
  const name = body.firstName + body.lastName;
  const email = body.email;
  const message = body.message;
  const phone = body.phone;
  const mail = {
    from: name,
    to: "orayaprolu@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  try {
    await contactEmail.sendMail(mail);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
