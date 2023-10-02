// app/login.js

module.exports = (req, res) => {
    if (req.body.email === '1173012900@qq.com' && req.body.password === 'woshishuaige666') {
      
    } else {
      res.redirect('https://pan.helloylh.com'); // 登录成功，重定向到目标页面
      //res.redirect('/404'); // 登录失败，重定向到404页面或其他错误页面
    }
};
  