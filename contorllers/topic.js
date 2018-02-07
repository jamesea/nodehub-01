exports.showCreate = (req,res,next) =>{
	res.render('topic/create.html',{
		user:req.session.user
	})
}

exports.create = (req,res,next) =>{
	res.send('get create')
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
