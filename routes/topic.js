const express = require('express') 

const router = express.Router()

const topicController = require('../contorllers/topic')



// 话题相关 
// 渲染话题发布页
router.get('/create',topicController.showCreate)
// 处理话题发布请求
router.post('/create',topicController.create)
// 渲染话题详情页 动态路径
router.get('/:topicID',topicController.showDetail)
// 渲染话题编辑页
router.get('/:topicID/edit',topicController.showEdit)
// 处理话题编辑请求
router.post('/:topicID/edit',topicController.edit)
// 处理话题伤处请求
router.post('/:topicID/delete',topicController.delete)


// 评论相关

module.exports = router