const {query} = require('../utilities/db-helper.js')

// 查找话题分类信息
exports.findAll=callback => {
	query(
		'SELECT * FROM topic_categories',
		callback)
}

exports.findById = (id, callback) => {
	const sqlStr = 'SELECT * FROM `topics` WHERE `id`=?'
	query(sqlStr, [id], (err, results) => {
		if(err){return callback(err)}
		callback(null,results[0])
	})
}
//创建的话题存入数据库
exports.save = (topicReq,callback) => {

	const sqlStr = 'INSERT INTO `topics` SET?'
	query(sqlStr,topicReq,callback)
}