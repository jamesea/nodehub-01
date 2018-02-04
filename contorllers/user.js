exports.showSignin = (req,res) => {
	res.render('signin.html')
}
exports.signin = (req,res) => {
	res.send(JOSN.stringify({
		foo:'bra'
	}))
}
exports.showSignup = (req,res) => {
	res.render('signup.html')
}
exports.signup = (req,res) => {
	res.json({
		post:'asdni'
	})
}
exports.signout = (req,res) => {
	res.send('get signout')
}