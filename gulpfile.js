var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    watch = require('gulp-watch'),
    less = require('gulp-less'),
    path = require('path');

gulp.task('build', function () {
    browserify({
        entries: 'src/app.jsx',
        extensions: ['.jsx'],
        debug: true
    })
        .transform(babelify)
        .bundle()
        .on('error', handleError)
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('styles', function () {
    return gulp.src('./less/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function () {
    gulp.watch(['**/*.jsx', '*.js'], ['build']);
    gulp.watch(['./less/*.less'], ['styles']);
});

gulp.task('default', ['build', 'styles']);

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}