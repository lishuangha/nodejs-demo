// 导入 express 模块
const express = require('express');

// 创建一个 express 应用程序
const app = express();

// 定义一个路由处理程序，用于处理根路径的 GET 请求
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 启动应用程序
app.listen(3000, () => {
  console.log('应用程序已启动，访问地址为 http://localhost:3000/');
});
