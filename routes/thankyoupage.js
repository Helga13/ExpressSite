exports.index = function(reg, res){	
	config = require('../config');
	scripts = [];
	styles = config.get('styles');
	res.render('thankyoupage', {
		styles: styles,
		scripts: scripts
	});
	console.log('thankyoupage.jade подключен!!!')
	/*в thankyoupage.jade содержимое body index.html*/
}