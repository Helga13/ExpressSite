exports.cabinet = function(req,res,next){
	res.render('cabinet');
};

var path = require('path'), 
	fs = require('fs');
exports.send = function(req,res,next){
	// Загрузка фото
	fs.readFile(req.files.book.path, function(err, data){
		var imageName = req.files.book.name
		
		// Если какая-то ошибка, выводим информацию об ошибке и перенаправляем пользователя
		if(!imageName){
			console.log('error!!!');
			res.redirect('/');
			res.end();
		}else{
			var newPath = __dirname + '/../public/uploads/' + imageName;
			console.log(newPath);			
			// Записываем файл
			fs.writeFile(newPath, data, function(err){
			// Открываем загруженный файл
				res.redirect('/uploads/'+imageName);
				console.log('Пашет!!!')
			});
		}
	});
}

	// Проверка типа загружаемого файла
/*	if(path.extname(req.files.file.name).toLowerCase() === '.png'){
		// Изображение формата .png
	}else{
		// Неизвестно что...
	}*/