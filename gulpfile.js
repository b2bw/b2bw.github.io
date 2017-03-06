// const child = require('child_process');
// const browserSync = require('browser-sync').create();

const gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var path = require('path');
// const siteRoot = '_site';
// const cssFiles = '_css/**/*.?(s)css';

gulp.task('svgstore', function () {
    return gulp
        .src('_includes/svg/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('_includes'));
});





gulp.task('clean', function () {
    return gulp.src('_site', {read: false})
        .pipe(clean());
});



gulp.task('default', ['svgstore']);
