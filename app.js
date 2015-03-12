var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config');
var mongoose = require('./config/mongoose');
var MongoStore = require('connect-mongo')(express);
var routes = require('./routes/index');
var about = require('./routes/about');
var users = require('./routes/user');
var reg = require('./routes/reg'); 
var thankyoupage = require('./routes/thankyoupage');
var checkAuth = require('./utils/checkAuth'); // проверяет авторизацию
var auth = require('./routes/auth');
var chat = require('./routes/chat');
var video = require('./routes/video');
var canvas = require('./routes/canvas');
var location = require('./routes/location');
var dragdrop = require('./routes/dragdrop');
var storage = require('./routes/storage');
var cart = require('./routes/cart');


var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/*var Maintexts = require('./models/maintexts').Maintexts; // создание коллекции

var maintexts = new Maintexts({
	name: 'Добро пожаловать на сайт!',
	body: 'Регистрация прошла успешно!',
	url: 'reg',
});

maintexts.save(function(err, user, affected){
	console.log('ok!!!');
}); */                                                  // конец комментариев создание коллекции

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use(express.bodyParser({
    keepExtensions: true,
    uploadDir: 'public/tmp'
})); /*после создания папки для загрузки*/

app.use(express.session({
	secret: '123abc', key: 'sid'
}));

app.use(require('less-middleware')
	(__dirname+'public/stylesheets/style.less')
);

app.use(function(req,res,next){
	res.locals = {
		scripts: config.get('scripts'),
		styles: ['/stylesheets/style.css', '/bootstrap/css/bootstrap.min.css'],
		userid: req.session.user
	}; 
	next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);


app.get('/', routes.index);
app.get('/users', users.list);
app.get('/reg', reg.index); /* Регистрация и авторизация*/
app.get('/thankyoupage', thankyoupage.index);
app.get('/cabinet', checkAuth, auth.cabinet);
app.get('/logout', checkAuth, reg.logout); // маршруты, закрытые от неавторизированных пользователей
app.get('/chat', chat.index);
app.get('/about', about.index);
app.get('/video', video.index);
app.get('/canvas', canvas.index);
app.get('/location', location.index);
app.get('/dragdrop', dragdrop.index);
app.get('/storage', storage.index);
app.get('/cart', cart.index);

app.get('/:id', routes.index);
app.post('/reg', reg.send);
app.post('/cabinet', checkAuth, auth.send);
/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(config.get('port'));
module.exports = app;

