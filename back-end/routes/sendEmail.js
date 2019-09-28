require('dotenv').config();
const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/', (req, res) => {
  var name = req.body.name;
  var phone = req.body.phone;
  var email = req.body.email;
  var file = req.body.file;
  var filename = req.body.filename;
  var title = req.body.title;
  var medium = req.body.medium;
  var statement = req.body.statement;

  const msg = {
    to: "koeunhh@gmail.com",
    from: {
      email: `${email}`,
      name: `${name}`
    },
    subject: `RDA Portfolio Review Requested - ${name}`,
    text: `
    <Student information> \n
    name: ${name} \n 
    email: ${email} \n 
    phone number: ${phone} \n\n 
    <Portfolio> \n
    title: ${title} \n
    medium: ${medium} \n
    statement: ${statement}`,
    attachments: [{
        filename: filename,
        content: file
      }
    ]
  };

  sgMail.send(msg);
})

module.exports = router;