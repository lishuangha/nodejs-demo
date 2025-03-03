// 导入 express 模块
const express = require('express');

//导入cors跨域中间件
const cors = require("cors")

const mysql = require ('mysql')

// 创建一个 express 应用程序
const app = express();

// 全局注册，加前缀
app.use(cors())

//创建连接
// let conn=mysql.createConnection({
//   //主机地址
//   host:'localhost',
//   //用户名

//   user:'root',
//   //密码
//   password:'960208',
//   //数据库名称
//   database:'xsgl'
// })

// conn.connect((err)=>{
//   if(err) throw err;
//   console.log('连接成功');
// })

// 定义一个路由处理程序，用于处理根路径的 GET 请求
app.get('/test', (req, res) => {
  res.send('Hello, World!');
});

app.post('/testpost', (req, res) => {
  res.send('posssss')
})

// 启动应用程序
app.listen(3000, () => {
  console.log('应用程序已启动，访问地址为 http://localhost:3000/');
});
