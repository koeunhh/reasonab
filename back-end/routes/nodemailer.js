require('dotenv').config();
const express = require('express');
const router = express.Router();
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

router.post('/trial', upload.single('userfile'), (req, res, next) => {
  var name = req.body.name;
  var phone = req.body.phone;
  var email = req.body.email;
  var title = req.body.title;
  var medium = req.body.medium;
  var statement = req.body.statement;

  let mail = {
    from: "koeunhh@gmail.com",
    to: "koeunhh@gmail.com",
    sender: email,
    replyTo: email,
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
        filename: req.file.originalname,
        path: req.file.path
      }
    ]
  };

  let confirmation = {
    from: "koeunhh@gmail.com",
    to: email,
    sender: 'koeunhh@gmail.com',
    replyTo: 'koeunhh@gmail.com',
    subject: `Portfolio Submission to RDA`,
    text: 'Your portfolio has been submitted for review. \n We will get back to you shortly with a feedback! \n\n Thank you, \n\n RDA (Reasonab Design Academy)'
  };
  
  transporter.sendMail(mail, function(err, data) {
    if(err){
      console.log(err);
    }
    else {
      console.log('Email sent');
    }
  })
  
  transporter.sendMail(confirmation, function(err, data) {
    if(err){
      console.log(err);
    }
    else {
      console.log('Confirmation email sent');
    }
  })
})

module.exports = router;