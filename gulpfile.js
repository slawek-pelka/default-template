var gulp 	= require('gulp'),
	sass 	= require('gulp-sass'),
	concat	= require('gulp-concat'),
	image 	= require('gulp-imagemin);
	
gulp.task('watch', function() {
	console.log('watching for new images');
	gulp.watch( gulp.src('./assets/img/*'), ['imagemin'] );
	
	console.log('watching for changes in sass');
	gulp.watch( gulp.src('./assets/sass/**/main.sass), ['compilesass'] );

	console.log('concatonating js files');
	gulp.watch( gulp.src('./assets/js/*), ['concatjs'] );
});