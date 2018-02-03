const express = require('express')
const app = express()
const router = require('./router')


// 配置模板引擎
app.engine('html',require('express-art-template'))

// 挂在路由容器
app.use(router)
app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))

app.listen(3000,() => console.log('Example app listening on port 3000!'))
  


	  