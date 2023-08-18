const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const emailPass = process.env.GMAIL_PASS;

// server used to send send emails
const app = express();
const allowedOrigins = ["http://localhost:3000"];
app.use(cors({
  origin: allowedOrigins,
}));
app.use(express.json());
app.use("/", router);
app.listen(5001, () => console.log("Server Running on Port 5001"));
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);




const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "orayaprolu@gmail.com",
    pass: process.env.GMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "orayaprolu@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});