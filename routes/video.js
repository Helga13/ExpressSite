exports.index = function(reg, res)
{
	config = require('../config');
	scripts = [];
	scripts.push('javascripts/script_video.js');
	styles = config.get('styles');
	//styles.push('stylesheets/style_video.css');
	res.render('video', {
		styles: styles,
		scripts: scripts
	});
	console.log('video.jade подключен!!!')
	/*в video.jade содержимое body index.html*/
}