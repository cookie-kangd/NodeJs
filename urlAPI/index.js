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

//引入axios请求数据
const axios = require("axios");
 
//编写接口(二次封装接口)
app.get('/api/getPeople', function(req, res) {
  if(res.status(200)) {
    var url = 'https://api.apiopen.top/todayVideo';
    axios({
      url: url,
      method: 'get',
    })
    .then(response =>{
      res.json(response.data.result)
    })
    .catch((error) =>{    
      console.log(error)
    })
  }
});

/* 监听端口 */
app.listen(3000, () => {
  console.log('server started...');
})

 
