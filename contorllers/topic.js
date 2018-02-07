const topic = require('../models/topic')
// 话题创建页内容
exports.showCreate = (req,res,next) =>{
	topic.findAll((err,ret) =>{
		if(err){return next(err)}
		res.render('topic/create.html',{
			topics:ret
		})
	})
}

exports.create = (req,res,next) =>{
	// 提取数据库相关字段

	// 渲染到页面
	
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
