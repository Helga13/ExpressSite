/* GET home page. */
exports.index = function(req, res){
 	if (req.params.id){
		var index = req.params.id;
	}else{
		var index = 'index';
	}
	var Maintexts = require('../models/maintexts').Maintexts;
		Maintexts.findOne({'url':index}, function(err, text){
							if (!text){
							text = {
							name:'Welcome to site!',
							body:'404'}
						}
						if(req.session.user){
							userid = req.session.user;
						}else{
							userid=0;
						}
						res.render('index', { text: text, userid: userid });
					}
	); 
};
