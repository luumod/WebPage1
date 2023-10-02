const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

module.exports = app.post('/input_ok', (req, res) => {
  console.log('email: ',email);
  console.log('password: ',password);
  if (req.body.email === '1173012900@qq.com' && req.body.password === 'woshishuaige666') {
    res.redirect('https://pan.helloylh.com'); 
  } else {
    res.redirect('/404');
  }
});