/**
 *  *1・*2 gulp-csscombとgulp-sourcemaps は、gulp-csscombがgulp-sourcemapsに対応していないので、同時に動作することができません。
 *  gulp-csscombを動作させたい場合は、「*2」の記述をコメントアウトしてください。
 */

const gulp = require('gulp');
const rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  path = require('path'),
  cssnano = require('gulp-cssnano'),
  watch = require('gulp-watch'),
  autoprefixer = require('gulp-autoprefixer'),
  csscomb = require('gulp-csscomb'),
  replace = require('gulp-replace'),
  // theo = require('gulp-theo'),
  sassJson = require('gulp-sass-json'),
  changed = require('gulp-changed'),
  package = require('./package.json');

const rootTheme = package.config.theme;
const asset = "/assets/";

const imagesSrc = `${asset}images/**`;
const imagesDest = 'fractal/tmp/images';

const destSrc = '/dest/**';
const destDest = 'fractal/tmp/dest';

const fontsSrc = `${asset}fonts/**`;
const fontsDest = 'fractal/tmp/fonts';

gulp.task('okome-sass',  function () {
 gulp.src([ 'src/scss/foundation/okome/okome.scss'])
   .pipe(sass().on('error', sass.logError))
   .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
   }))
   .pipe(csscomb())// *1
   .pipe(rename({
    basename: 'okome'
   }))
   .pipe(gulp.dest('dest'))
   .pipe(gulp.dest('fractal/tmp/dest'))
   .pipe(rename({
    suffix: '.min'
   }))
   .pipe(cssnano({safe: true}))
   .pipe(gulp.dest('dest'));
});

gulp.task('design-tokens', function () {
 return gulp
   .src('src/scss/foundation/tokens/*.scss')
   .pipe(sassJson())
   .pipe(gulp.dest('./fractal/src/docs/tokens/'));
});


gulp.task('sass',  function () {
 gulp.src([ 'src/scss/site.scss'])
   .pipe(sass().on('error', sass.logError))
   .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
   }))
   .pipe(csscomb())// *1
   .pipe(rename({
    basename: 'bundle'
   }))
   .pipe(gulp.dest('dest'))
   .pipe(gulp.dest('fractal/tmp/dest'))
   .pipe(rename({
    suffix: '.min'
   }))
   .pipe(cssnano({safe: true}))
   .pipe(gulp.dest('dest'));
});


gulp.task('changed', function() {
    gulp.src([imagesSrc])
        .pipe(gulp.dest(imagesDest));
    gulp.src([fontsSrc])
        .pipe(gulp.dest(fontsDest));
});


// プロジェクトのSCSSとCSSファイルを監視する
gulp.task('project', function () {
 gulp.watch('src/scss/foundation/tokens/**', ['design-tokens']);
 gulp.watch('src/scss/**', ['sass']);
 gulp.watch([imagesSrc,fontsSrc], ['changed']);
});

gulp.task('okome', function () {
 gulp.watch('src/scss/foundation/okome/**', ['okome-sass']);
//  gulp.watch('/dest/acms.css', ['acmsmin']);
});

// デフォルトのタスク
 gulp.task('default', ['project', 'okome']);