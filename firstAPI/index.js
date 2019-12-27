/* 引入express框架 后端框架搭建*/
const express = require('express');
const app = express();
 
/* 引入cors 解决跨域*/
const cors = require('cors');
app.use(cors());
 
/* 引入body-parser 数据解析*/
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
/* 引入mysql 数据库连接*/
// const mysql = require('mysql');
// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123456',
//     database: 'test',
//     multipleStatements: true
// })
// conn.connect();

//编辑请求数据
var heroes = {'data':{
  'people': [
    {name: '张三',age: '22',saved: 0},
    {name: '李四',age: '24',saved: 1},
    {name: '王五',age: '26',saved: 0},
    {name: '赵六',age: '30',saved: 1},
    {name: '钱七',age: '18',saved: 0}
  ]
 }};
 
//编写接口
app.get('/api/getPeople', function(req, res) {
  if(res.status(200)) {
    res.json(heroes)
  }
});

/* 监听端口 */
app.listen(3000, () => {
  console.log('server started...');
})

 
