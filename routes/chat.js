/* GET users listing. */
exports.index = function(req, res){
	res.render('chat');
};

var less = require('less');

less.render('.class{width:(2+2)}', function(e, output){
	console.log(output.css);
});

var less = require('less');

less.render('.class { width:(1+1)}',
    {
      paths: ['stylesheets/style.less'],  // Specify search paths for @import directives
      filename: 'style.less', // Specify a filename, for better error messages
      compress: true          // Minify CSS output
    },
    function (e, output) {
       console.log(output.css);
    });