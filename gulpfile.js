var gulp = require('gulp');
var server = require('gulp-webserver');
var mjml = require('gulp-mjml');

gulp.task('webserver', ['build'], function() {
    gulp.src('./dist/')
        .pipe(server({
            livereload: true,
            directoryListing: {
                enable: true,
                path: 'dist'
            },
            open: true
        }));
});

gulp.task('mjml', function() {
    gulp.src('./src/*.mjml')
        .pipe(mjml())
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['mjml']);

gulp.task('watch', ['webserver'], function() {
    gulp.watch('src/*.mjml', ['mjml']);
});

gulp.task('default', ['watch']);