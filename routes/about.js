exports.index = function(reg, res){	
	config = require('../config');
	scripts = [];
	styles = config.get('styles');
	res.render('about', {
		styles: styles,
		scripts: scripts
	});
	console.log('about.jade подключен!!!')
	/*в about.jade содержимое body index.html*/
}