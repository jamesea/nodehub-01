module.exports = {
    dbConfig: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '123321',
        database: 'nodetest',
        connectionLimit: 10
    },
    sessioncfg: {
        secret: 'nodehub',
        resave: false,
        cookie: {maxAge:1000 * 60 * 60 * 24 * 3},
        saveUninitialized: true
    } 
}