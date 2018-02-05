const {query} = require('../utilities/db-helper')



exports.findByEmail = (email,callback) =>{
	query(
		'SELECT * FROM `users` WHERE `email`=?',
		[email],
		(err, results) =>{
			if(err){return callback(err)}
			callback(null,results[0])
	})
}

exports.findByNickName = (nickname,callback) =>{
	query(
		'SELECT * FROM `users` WHERE `nickname`=?',
		[nickname],
		(err, results) =>{
			if(err){return callback(err)}
			callback(null,results[0])
	})

}
	
exports.save = (user,callback) => {
	query(
		'INSERT INTO `users` SET ?',
		user,
		(err, results) =>{
			if(err){return callback(err)}
			callback(null,results)
	})
}