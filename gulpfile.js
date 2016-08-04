const gulp = require('gulp')
const browserify = require('gulp-browserify')
const babel = require("gulp-babel")
const gls = require("gulp-live-server")
let server = undefined;


function build(file) {
	// Single entry point to browserify 
	let path = file ? file.path : "./src/*.js"; 

	gulp.src(path || "./src/*.js")
		.pipe(babel({
			presets: ["es2015","angular2"]
		}))
		.pipe(browserify({
			insertGlobals:true,
		  debug:true
		}))
		.pipe(gulp.dest('./app'))
		.on("data",()=> console.log("compiling..."))
		.on("end",function(){
			console.log("build done")
		})
}//end build task

function lift() {
	server = gls.static('./',3000);
  server.start();
}//end lift task


// Basic usage 
gulp.task('build',build);

gulp.task('lift',lift);

gulp.watch(["./src/**/*.js"],build);

gulp.task('default', ["lift","build"]);