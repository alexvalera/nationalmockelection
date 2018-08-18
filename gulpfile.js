const gulp = require('gulp');
const sass = require('gulp-sass');
const nodemon = require('gulp-nodemon');
const runSequence = require('run-sequence');
const babel = require('gulp-babel');

gulp.task('default', function (callback) {
  runSequence(['sass','babel', 'server'],
    callback
  )
});
gulp.task('sass', function() {
  return gulp.src('public/css/main.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
});
gulp.task('babel', function() {
  return gulp.src('public/js/app.js')
      .pipe(babel({
          presets: ['env']
      }))
      .pipe(gulp.dest('./dist'));
});
gulp.task('server', function () {
  nodemon({
    script: 'index.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})
gulp.watch('public/css/*.scss', ['sass']); 
