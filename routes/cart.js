exports.index = function(reg, res){
	config = require('../config');
	scripts = [];
	scripts.push('javascripts/controller.js');
	scripts.push('javascripts/angular.min.js');
	styles = config.get('styles');
	//styles.push('stylesheets/style_cart.css');
	res.render('cart', {
		styles: styles,
		scripts: scripts});
	console.log('cart.jade подключен!!!')
	/*в cart.jade содержимое body index.html*/
}