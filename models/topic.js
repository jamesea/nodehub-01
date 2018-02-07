const {query} = require('../utilities/db-helper.js')

// 查找话题分类信息
exports.findAll=callback => {
	query(
		'SELECT * FROM topic_categories',
		callback)
}

//创建的话题存入数据库
exports.save = (topicReq,callback) => {

	const sqlStr = 'INSERT INTO `topics` SET?'
	query(sqlStr,topicReq,callback)
}