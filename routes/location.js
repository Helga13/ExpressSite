exports.index = function(reg, res)
{
	config = require('../config');
	scripts = [];
	scripts.push('https://maps.googleapis.com/maps/api/js?v=3.exp');
	scripts.push('javascripts/script_location.js');
	styles = config.get('styles');
	styles.push('stylesheets/style_location.css');
	res.render('location', {
		styles: styles,
		scripts: scripts
	});
	console.log('location.jade подключен!!!')
	/*в video.jade содержимое body index.html*/
}