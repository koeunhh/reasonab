var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));
 
app.use('/', require('./routes/sendEmail'));
 
app.listen(8080, () => {
  console.log('running on http://localhost:8080');
})