exports.index = function(reg, res){
	config = require('../config');
	scripts = [];
	scripts.push('javascripts/script_dragdrop.js');
	styles = config.get('styles');
	styles.push('stylesheets/style_dragdrop.css');
	res.render('dragdrop', {
		styles: styles,
		scripts: scripts
	});
	console.log('dragdrop.jade подключен!!!')
	/*в dragdrop.jade содержимое body index.html*/
}