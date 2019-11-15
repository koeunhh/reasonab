require('dotenv').config();
const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/', (req, res) => {
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var phone = req.body.phone;
  var email = req.body.email;
  var file = req.body.file;
  var filename = req.body.filename;
  var title = req.body.title;
  var medium = req.body.medium;
  var statement = req.body.statement;

  const mail = {
    from: {
      email: `${email}`,
      name: `${firstname} ${lastname}`
    },
    to: "koeunhh@gmail.com",
    subject: `RDA Portfolio Review Requested - ${firstname} ${lastname}`,
    text: `
    <Student information> \n
    name: ${firstname} ${lastname} \n 
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

  let confirmation = {
    from: "koeunhh@gmail.com",
    to: email,
    subject: `Portfolio Submission to RDA`,
    text: 'Your portfolio has been submitted for review. \n We will get back to you shortly with a feedback! \n\n Thank you, \n\n RDA (Reasonab Design Academy)'
  };

  sgMail.send(mail);
  sgMail.send(confirmation);
})

module.exports = router;