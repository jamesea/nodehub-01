const express = require('express')
const session  = require('express-session')
const bodyParser  = require('body-parser')
const app = express()


const router = require('./router')
const {sessioncfg} = require('./config')
app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))

// 配置模板引擎
app.engine('html',require('express-art-template'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// session
app.use(session(sessioncfg))
// 挂在路由容器
app.use(router)



app.listen(3000,() => console.log('Example app listening on port 3000!'))
  


	  