'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				sourceMap: true
			},
			js: {
				// src: ['Angular/app/js/**/*.js'],
				src: [
					'Angular/app/js/app.js',
					'Angular/app/js/filters/ToDoFilter.js',
					'Angular/app/js/directives/ToDoDirectives.js',
					'Angular/app/js/controllers/ToDoCtrl.js'
					],
				dest: 'Angular/dist/app.js'
			}
		},
		babel: {
			// compile: {
				options: {
					sourceMap: true,
					presets: ['es2015']
				},
			// },
			/*files: {
				'Angular/dist/app.min.js': 'Angular/dist/app.js'
			}*/
			dist: {
				files: {
					'Angular/dist/app.min.js': 'Angular/dist/app.js'
				}/*
	            src: [
	                'Angular/dist/app.js',
	            ],
	            dest: 'Angular/dist/app.min.js'*/
	        }
		},
		gruntfile: {
	    	files: ['gruntfile.js']
	    },
		watch: {
			 scripts: {
                files: 'Angular/app/js/**/*.js',
                tasks: ['concat','babel']
            },
            html: {
                files: 'Angular/index.html'
            }
        },
		processhtml: {
			dist: {
				options: {
					process: true
				},
				build: {
					files: {
						'Angular/index.html': ['Angular/index.html']
					}
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-concat');
	// grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-processhtml');

	grunt.registerTask('default', ['concat', 'babel', 'watch']);
};