module.exports = function(grunt){
	grunt.initConfig({
		concat: {
			main: {
				src: [
					'public/javascripts/*.js'
				],
				dest:  // на выходе указываем где и какой файл создать
					'public/javascripts/gruntscripts.js' // вызывается склейка командой grunt
			}
		},
		
		uglify: {
			main: {
				files: {
					'public/javascripts/grunt.min.js':'<%=concat.main.dest%>'
				}
			}
		}
	});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.registerTask('default', ['concat', 'uglify']);
};