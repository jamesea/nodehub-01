const express = require('express') 

const router = express.Router()

const indexController = require('../contorllers/index')

// 首页相关方法路由  
router.get('/',indexController.showIndex)


module.exports = router