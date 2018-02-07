const topic = require('../models/topic')
const moment = require('moment')
// 话题创建页内容
exports.showCreate = (req,res,next) =>{
	// 数据库提取话题分类
	topic.findAll((err,ret) =>{
		if(err){return next(err)}
		res.render('topic/create.html',{
			topics:ret
		})
	})
}

exports.create = (req,res,next) =>{
	// 获取表单提交数据
	// 数据验证啊
	// 操作数据库
	// 发送响
	// 渲染到页面
	const topicReq = {
		...req.body,
		userId:req.session.user.id,
		createdAt:moment().format('YYYY-MM-DD HH:mm:ss')
	}
	console.log(topicReq)
	topic.save(topicReq,(err,ret) => {
		if(err){return next(err)}
		res.status(200).json({
			code:0,
			message:'成功'
		})
	})
}

exports.showDetail = (req,res,next) =>{
	res.send('get showDetail')
}

exports.showEdit = (req,res,next) =>{
	res.send('get showEdit')
}

exports.edit = (req,res,next) =>{
	res.send('get edit')
}

exports.delete = (req,res,next) =>{
	res.send('get delete')
}
