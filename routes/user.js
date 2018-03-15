const express = require('express') 

const router = express.Router()

const userController = require('../contorllers/user')

// 用户相关路由
// 渲染登录
router.get('/signin',userController.showSignin)
// 处理登陆
router.post('/signin',userController.signin)
// 渲染注册
router.get('/signup',userController.showSignup)
// 处理注册
router.post('/signup',userController.signup)
// 处理退出
router.get('/signout',userController.signout)

module.exports = router

