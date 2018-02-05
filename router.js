const express = require('express') 
const router = express.Router()
const userController = require('./contorllers/user')
const topicController = require('./contorllers/topic')
const commentController = require('./contorllers/comment')
const indexController = require('./contorllers/index')



// 首页相关方法路由  
router.get('/',indexController.showIndex)


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




// 话题相关 
// 渲染话题发布页
router.get('/topic/create',topicController.showCreate)
// 处理话题发布请求
router.post('/topic/create',topicController.create)
// 渲染话题详情页 动态路径
router.get('/topic/:topicID',topicController.showDetail)
// 渲染话题编辑页
router.get('/topic/:topicID/edit',topicController.showEdit)
// 处理话题编辑请求
router.post('/topic/:topicID/edit',topicController.edit)
// 处理话题伤处请求
router.post('/topic/:topicID/delete',topicController.delete)


// 评论相关

module.exports = router