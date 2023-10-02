// app/login.js
const express = require('express');
const app = express();

// 解析表单数据
app.use(express.urlencoded({ extended: true }));

module.exports = app.post('/login_if',(req, res) => {
    const { email, password } = req.body;
    console.log('email: ',email);
    console.log('password: ',password);
    if (email === '1173012900@qq.com' && password === 'woshishuaige666') {
      res.redirect('https://pan.helloylh.com'); // 登录成功，重定向到目标页面
    } else {
      res.redirect('/404'); // 登录失败，重定向到404页面或其他错误页面
    }
});
  