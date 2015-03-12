/* GET home page. */
exports.index = function(reg, res)
{
	config = require('../config');
	scripts = [];
	scripts.push('javascripts/script_canvas.js');
	styles = config.get('styles');
	styles.push('stylesheets/style_canvas.css');
	res.render('canvas', {
		styles: styles,
		scripts: scripts});
	console.log('canvas.jade подключен!!!')
	/*в canvas.jade содержимое body index.html*/
}