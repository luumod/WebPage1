const express = require('express'); // 引入 Express 框架的模块。
const bodyParser = require('body-parser'); // 引入用于解析请求正文的 body-parser 模块。body-parser 是一个 Express 中间件，它允许您从 POST 请求中提取表单数据。
const app = express(); //  创建一个 Express 应用程序对象。使用来配置路由和中间件，以及处理 HTTP 请求。

app.use(bodyParser.urlencoded({ extended: false })); // 解析表单数据

/*
req: request, req 是一个表示客户端发出的 HTTP 请求的对象。它包含了关于请求的各种信息，例如请求的 URL、HTTP 方法（GET、POST、等等）、请求头、请求参数、请求正文等。您可以通过 req 对象访问客户端发送的数据以及请求的属性。
res: response, res 是一个表示要发送给客户端的 HTTP 响应的对象。它包含了将要发送给客户端的响应数据和属性，例如响应头、状态码、响应正文等。通过 res 对象，您可以将数据发送回客户端以响应其请求。

req 用于获取客户端发送的表单数据，例如 req.body.email 和 req.body.password，以及其他请求属性。
res 用于向客户端发送重定向响应，将客户端导航到不同的 URL，或者向客户端发送其他响应数据。
*/
app.post('/input_ok', (req, res) => { // 创建一个 POST 请求的路由处理程序。
  // 确保表单字段的 name 属性与服务器端代码中使用的属性名匹配。 req.body.'name'
  console.log('email: ',req.body.email);
  console.log('password: ',req.body.password);
  if (req.body.email === '1173012900@qq.com' && req.body.password === 'woshishuaige666') {
    res.redirect('https://pan.helloylh.com'); 
  } else {
    res.redirect('/404');
  }
});

module.exports = app; // 导出整个 Express 应用程序对象