const express = require('express')
const app = express()

const router = require('./router')

// 挂在路由容器
app.use(router)


app.listen(3000,() => console.log('Example app listening on port 3000!'))



	  