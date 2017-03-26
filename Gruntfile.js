module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// 将SesJS模块转换为Modules/Transport规范的模块
		transport: {
			options: {
				debug: false,
				idleading: './dist/js/'
			},

			main: {
				files: [
					{
						expand: true,
						cwd: 'src/js/',
						src: '*.js',
						dest: 'build/js/'
					}
				]
			}
		},

		//合并任务
		concat: {
			js: {
				options: {
					noncmd: true
				},

				files: {
					'dist/js/index.js': ['build/js/index.js', 'build/js/module.js'],
					'dist/js/tabTag.js': ['build/js/tabTag.js', 'build/js/jquery-tab-1.0.js']
				}
			},

			css: {
				options: {
					noncmd: true
				},

				files: {
					'dist/css/main.css': ['src/css/reset.css', 'src/css/layout.css']
				}
			}
		},

		// JS压缩
		uglify: {
			main: {
				files: {
					'dist/js/index.min.js': 'dist/js/index.js',
					'dist/js/tabTag.min.js': 'dist/js/tabTag.js'
				}
			}
		},

		// css压缩
		cssmin: {
			main: {
				files: {
					'dist/css/main.min.css': 'dist/css/main.css'
				}
			},

			css: {
				files: {
					'dist/css/index.min.css': 'src/css/index.css',
					'dist/css/tabTag.min.css': 'src/css/tabTag.css'
				}
			}
		},

		// 删除任务
		clean: {
			// 删除build目录
			build: {
				src: 'build'
			},

			// 删除dist目录
			dist: {
				src: 'dist'
			}
		},

		// 代码监听
		watch: {
			maincss: {
				files: ['src/css/reset.css', 'src/css/layout.css'],
				tasks: ['concat:css', 'cssmin:main']
			},

			css: {
				files: ['src/css/index.css', 'src/css/tabTag.css'],
				tasks: ['cssmin:css']
			},

			js: {
				files: ['src/js/*.js'],
				tasks: ['transport', 'concat:js', 'uglify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-cmd-transport');
	grunt.loadNpmTasks('grunt-cmd-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// 默认任务
	grunt.registerTask('default', ['transport', 'concat', 'uglify', 'cssmin']);

};