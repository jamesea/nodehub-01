
const md5 = require('blueimp-md5')
const moment = require('moment')
const user = require('../models/user')




exports.showSignin = (req,res) =>{
  res.render('signin.html')
}

exports.signin = (req,res) =>{
  res.send('signin')
}
  
exports.showSignup = (req,res) =>{
  res.render('signup.html')
}

exports.signup = (req,res) =>{
  // 接收表单提交数据
  // body-parser 中间件解析表单post请求体
  // 验证数据有效性  普通数据校验 业务数据校验 
  // 验证通过，持久化保存到数据库中
  // 发送响应
  // const body = req.body
  // body.password = md5(body.password)
  const topicDate ={
    ...req.body,
    password: md5(req.body.password),
    createdAt : moment().format('YYYY-MM-DD HH:mm:ss'),
    updatedAt : null
  }
  // 验证邮箱占用
  user.findByEmail(topicDate.email,(err,ret) => {
    if(err){return res.status(500).json({
      error: err.message
    })}
    if(ret){return res.status(200).json({
      code: 1,
      message:'email '
      })}
    // 验证昵称占用
    user.findByNickName(topicDate.nickname,(err,ret) =>{
        if(err){return res.status(500).json({
          error: err.message
        })}
        if(ret){return res.status(200).json({
          code:2,
          message:'nickname'
        })}
      
   // 持久化数据
      user.save(topicDate,(err,results) => {
        if(err){return res.status(500).json({
          error: err.message
        })}
        res.status(200).json({
          code:0,
          message: 'success'
        })
      })
    })
  })
}

exports.signout = (req,res) =>{
  res.send('get edit')
}
