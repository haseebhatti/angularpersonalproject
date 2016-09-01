/* File: gulpfile.js */

// grab our gulp packages
var gulp = require('gulp'),
  gutil = require('gulp-util'),
  sass = require('gulp-sass'),
  minify = require('gulp-minify'),
  uglify = require('gulp-uglify'),
  jshint = require('gulp-jshint'),
  concat = require('gulp-concat-util'),
  Server = require('karma').Server;

// create a default task and just log a message
gulp.task('default', ['watch-all', 'sass:watch', 'scripts']);

gulp.task('watch-all', function () {
  gulp.watch(['lint', 'compress']);
});
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('lint', function () {
  return gulp.src('app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
gulp.task('scripts', function () {
  gulp.src('app/**/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(minify())
    .pipe(gulp.dest('dist/'));
});
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});
