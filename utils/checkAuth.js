var HttpError = require('../utils/error').HttpError;

module.exports = function(req, res, next) // Ф-ция проверяет, авторизирован ли пользователь
{
	if(!req.session.user){
		return next(new HttpError(401, "You are not authorize"));
		//res.redirect('/reg');
	}
	next();
};