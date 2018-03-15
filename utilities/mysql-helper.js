// const session = require('express-session')
const { dbConfig, sessioncfg } = require('../config')
// // session数据存入mysql
exports.MysqlSession = function(session){
	const MySQLStore = require('express-mysql-session')(session)
	const sessionStore = new MySQLStore(dbConfig)
	sessioncfg.store = sessionStore
	// app.use(session(MysqlSession))
	return session(sessioncfg)
	
}