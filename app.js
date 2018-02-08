const express = require('express')
const session = require('express-session')

const bodyParser = require('body-parser')

const app = express()

// 引入路由文件
// const routes = require('./routes/')
// 分类后路由文件
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const topicRouter = require('./routes/topic')
const { dbConfig, sessioncfg } = require('./config')
// const { sessioncfg } = require('./config')
const { checkLogin, errorModeles } = require('./middlewares/auth')
// session数据存入mysql
const MySQLStore = require('express-mysql-session')(session)
const sessionStore = new MySQLStore(dbConfig)

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

// 配置模板引擎
app.engine('html', require('express-art-template'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

sessioncfg.store = sessionStore
console.log(sessioncfg)
app.use(session({...sessioncfg}))


// 全局传递session中间件
app.use((req, res, next) => {
    app.locals.user = req.session.user
    next()
})



// 挂在路由容器
app.use(indexRouter)
app.use(userRouter)
app.use('/topic', checkLogin, topicRouter)
// 错误处理中间件
app.use(errorModeles)




app.listen(3000, () => console.log('Example app listening on port 3000!'))