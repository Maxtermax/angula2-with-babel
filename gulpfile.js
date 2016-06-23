const gulp = require('gulp')
const browserify = require('gulp-browserify')
const babel = require("gulp-babel")
const gls = require("gulp-live-server")


// Basic usage 
gulp.task('build', function() {
	// Single entry point to browserify 
	gulp.src("./src/*.js")
		.pipe(babel({
			presets: ["es2015","angular2"]
		}))
		.pipe(browserify({
			insertGlobals : true,
		  debug : true
		}))
		.pipe(gulp.dest('./app'))
});

gulp.task('default', ["build"]);
