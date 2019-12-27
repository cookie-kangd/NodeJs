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
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '127.0.0.1',
    port:'3306',
    user: 'root',
    password: 'root',
    database: 'myserver',
    multipleStatements: true
})
conn.connect();

//从数据库里取数据
var sql = 'SELECT * FROM websites';
var str = " ";
connection.query(sql, function (err,result) {
    if(err){
        console.log('[SELECT ERROR]:',err.message);
    }
    str = JSON.stringify(result);
    //数据库查询的数据保存在result中，但浏览器并不能直接读取result中的结果，因此需要用JSON进行解析
    console.log(str);
});
 
//编写接口
app.get('/api/getPeople', function(req, res) {
  if(res.status(200)) {
    res.json(str)
  }
});

//传给前端数据后关闭数据库连接
connection.end();

/* 监听端口 */
app.listen(3000, () => {
  console.log('server started...@3000 port');
})

 
