const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.engine('page1', require('ejs').renderFile);
app.set('view engine', 'page1');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/page1', (req, res) => {
  res.sendFile(__dirname + '/public/page1.html');
});

app.get('/aboutme', (req, res) => {
  res.sendFile(__dirname + '/public/aboutme.html');
});

app.get('/association',(req,res) =>{
  res.sendFile(__dirname + '/public/association.html');
});

// app.get('/login_ok', (req, res) => {
//   //res.sendFile(__dirname + '/public/LoginTest.html'); // 用户登录成功后，重定向页面
//   res.sendFile();
// });

app.get('/404',(req,res) => {
  res.sendFile(__dirname + '/public/notfound.html');
});

app.post('/login', (req, res) => {
  if (req.body.email === '1173012900@qq.com' && req.body.password === 'woshishuaige666') {
    res.redirect('https://pan.helloylh.com'); 
  } else {
    res.redirect('/404');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
