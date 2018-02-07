const express = require('express')
const session  = require('express-session')
const bodyParser  = require('body-parser')
const app = express()

// 引入路由文件
// const routes = require('./routes/')
// 分类后路由文件
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const topicRouter = require('./routes/topic')

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
app.use(indexRouter)
app.use(userRouter) 
app.use('/topic',topicRouter)




app.listen(3000,() => console.log('Example app listening on port 3000!'))
  


	  