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
  var email = req.body.email;
  var message = req.body.message;

  let mail = {
    from: "koeunhh@gmail.com",
    to: "koeunhh@gmail.com",
    sender: email,
    replyTo: email,
    subject: "RDA Free Trial Submission",
    text: `message sent from: ${name} <${email}> \n\n ${message}`,
    attachments: [{
        filename: req.file.originalname,
        path: req.file.path
      }
    ]
  };
  
  transporter.sendMail(mail, function(err, data) {
    if(err){
      console.log(err);
    }
    else {
      console.log('Email sent');
    }
  })  
})

module.exports = router;