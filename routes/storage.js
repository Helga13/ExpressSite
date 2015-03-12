/* GET home page. */
exports.index = function(reg, res)
{
	config = require('../config');
	scripts = [];
	scripts.push('javascripts/script_storage.js');
	styles = config.get('styles');
	styles.push('stylesheets/style_storage.css');
	res.render('storage', {
		styles: styles,
		scripts: scripts});
	console.log('storage.jade подключен!!!')
	/*в storage.jade содержимое body index.html*/
}