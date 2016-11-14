var gulp		= require('gulp');
var browserSync	= require('browser-sync');
var reload		= browserSync.reload;
var sass		= require('gulp-sass');
var jscs		= require('gulp-jscs');
 
// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
	//watch files
	var files = [
	'./style.css',
	'./*.php'
	];
 
	//initialize browsersync
	browserSync.init(files, {
	//browsersync with a php server
	proxy: "themes.wordpress.dev/magnum-opus/",
	notify: false
	});
});

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('sass', function () {
	return gulp.src('sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./'))
		.pipe(reload({stream:true}));
});

gulp.task('jsabc', () => {
	return gulp.src('js/*.js')
		.pipe(jscs())
		.pipe(jscs.reporter());
});

// Default task to be run with `gulp`
gulp.task('default', ['sass', 'browser-sync'], function () {
	gulp.watch("sass/**/*.scss", ['sass']);
});