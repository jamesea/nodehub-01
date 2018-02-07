const {query} = require('../utilities/db-helper.js')

// 查找话题分类信息
exports.findAll=callback => {
	query(
		'SELECT * FROM topic_categories',
		callback)
}