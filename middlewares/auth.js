const { dbConfig, sessioncfg } = require('../config')
const session = require('express-session')
//用户登陆验证中间件
exports.checkLogin = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/signin')
    }
    next()
}

// 错误处理中间件
exports.errorModeles = (req, res, next) => {
    res.render('../views/404.html')
}

