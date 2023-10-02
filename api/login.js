const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/input_ok', (req, res) => {
  console.log('email: ',req.body.email);
  console.log('password: ',req.body.password);
  if (req.body.email === '1173012900@qq.com' && req.body.password === 'woshishuaige666') {
    res.redirect('https://pan.helloylh.com'); 
  } else {
    res.redirect('/404');
  }
});

module.exports = app; // 导出整个 Express 应用程序对象