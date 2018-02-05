const mysql = require('mysql')
const {dbConfig} = require('../config')
const pool = mysql.createPool(dbConfig)

exports.query = (...args) => {
	const callback = args.pop()
	pool.getConnection((err,connection) => {
		if(err){ return callback(err)}
		connection.query(...args,function(...results){
			connection.release()
			callback(...results)
		})
	})
}


