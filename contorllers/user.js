exports.showSignin = (req,res) => {
	res.render('signin.html')
}
exports.signin = (req,res) => {
	res.send('get signin')
}
exports.showSignup = (req,res) => {
	res.render('signup.html')
}
exports.signup = (req,res) => {
	res.send('get signup')
}
exports.signout = (req,res) => {
	res.send('get signout')
}