const gulp = require('gulp'),
  babel = require('gulp-babel'),
  sass = require('gulp-sass');

const paths = {
  scripts: ['./assets/scripts/*.js'],
  styles: ['./assets/styles/*.scss']
};

/**
 * Creates a ES5 version
 */
gulp.task('build:es6', () => {
  gulp.src(paths.scripts)
    .pipe(gulp.dest('./assets/dist/scripts'))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./assets/dist/scripts'));
});

gulp.task('build:sass', () => {
  gulp.src(paths.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/dist/styles'));
});

gulp.task('watch', () => {
  gulp.watch(paths.scripts, ['build:es6']);
  gulp.watch(paths.styles, ['build:sass']);
});

gulp.task('default', ['watch', 'build:es6', 'build:sass']);
