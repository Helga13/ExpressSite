var Users = require('../models/users').users;
var AuthError = require('../models/users').AuthError
var async = require('async');
var HttpError = require('../utils/error').HttpError;

exports.index = function(req, res){
	/*res.render('index', {
		userid: req.session.user
	});*/
	res.render('reg');
}

exports.send = function(req, res,next){
		var username = req.body.username;
		var password = req.body.password;	
		Users.authorize(username, password, function(err, user){
			if(err){
				if(err instanceof HttpError){
					return next(new HttpError(403, err.message));
				}else{
					return next(err);
				}
			}
			
			req.session.user = user._id
			res.send({});
			res.writeHead(302, {
				'Location': '/thankyoupage'
			});
		});
		
			var users = new Users({
			username: username,
			password: password
		});
		users.save(function(err, user){
			//res.redirect('/');
		});
};
exports.logout = function(req,res){
	req.session.destroy();
	res.redirect('/');
};