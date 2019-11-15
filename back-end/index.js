var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
 
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: 'https://rda-toronto.netlify.com'
  // origin: 'http://localhost:3000'
}));
 
app.use('/trial', require('./routes/sendEmail'));
 
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
})