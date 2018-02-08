const md5 = require('blueimp-md5')
const moment = require('moment')
const user = require('../models/user')




exports.showSignin = (req, res, next) => {
    res.render('signin.html')
}

exports.signin = (req, res, next) => {
    const signinData = {
        ...req.body
    }
    user.findByEmail(signinData.email, (err, ret) => {
        if (err) { return next(err) }
        if (!ret) {
            return res.status(200).json({
                code: 1,
                message: 'email not ok'
            })
        }
        if (md5(signinData.password) !== ret.password) {
            return res.status(200).json({
                code: 2,
                message: 'password invalid'
            })
        }

        // session存储登录状态
        req.session.user = ret


        // 持久化存储
        res.status(200).json({
            code: 0,
            message: 'success'
        })

    })
}

exports.showSignup = (req, res, next) => {
    res.render('signup.html')
}

exports.signup = (req, res, next) => {
    // 接收表单提交数据
    // body-parser 中间件解析表单post请求体
    // 验证数据有效性  普通数据校验 业务数据校验 
    // 验证通过，持久化保存到数据库中
    // 发送响应
    // const body = req.body
    // body.password = md5(body.password)
    const signupData = {
        ...req.body,
        password: md5(req.body.password),
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: null
    }
    // 验证邮箱占用
    user.findByEmail(signupData.email, (err, ret) => {
        if (err) { return next(err) }
        if (ret) {
            return res.status(200).json({
                code: 1,
                message: 'email '
            })
        }
        // 验证昵称占用
        user.findByNickName(signupData.nickname, (err, ret) => {
            if (err) { return next(err) }
            if (ret) {
                return res.status(200).json({
                    code: 2,
                    message: 'nickname'
                })
            }


            // 持久化数据
            user.save(signupData, (err, results) => {
                if (err) { return next(err) }

                req.session.user = {
                    ...signupData,
                    id: results.insertId
                }
                res.status(200).json({
                    code: 0,
                    message: 'success'
                })
            })
        })
    })
}

exports.signout = (req, res, next) => {
    //清除session
    delete req.session.user
    // 重定向
    res.redirect('/signin')
}