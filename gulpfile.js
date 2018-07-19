const gulp = require('gulp');
const webpack = require('webpack');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');
const mixins = require('postcss-mixins');
const hexrgba = require('postcss-hexrgba');
const usemin = require('gulp-usemin');
const del = require('del');
const rev = require('gulp-rev');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');

//========start of gulp task for working docs files =========//
//watching any update of the project files
gulp.task('watch', () => {
//initializing browsersync
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'working-docs'
    }
  });

//watching html files
  watch('./working-docs/**/*.html', () => {
    browserSync.reload();
  });
//watching css files
  watch('./working-docs/assets/styles/**/*.css', () => {
    gulp.start('cssInject');
  });
//watching javascript file
  watch('./working-docs/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  })

});

//reloading browser if there is any update in css file
gulp.task('cssInject', ['styles'], () => {
  return gulp.src('./working-docs/temp/styles/styles.css')
  .pipe(browserSync.stream());
});

//saving css style to working-docs temp styles folder from assets styles css
gulp.task('styles', () => {
  return gulp.src('./working-docs/assets/styles/styles.css')
  .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
  .on('error', (errorInfo) => {
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./working-docs/temp/styles'));
});

//reloading browser if there is any update in js file
gulp.task('scriptsRefresh', ['scripts'], () => {
  browserSync.reload();
});

//getting the webpack configuration
gulp.task('scripts', (callback) => {
  webpack(require('./webpack.config.js'), (err, stats) => {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});
//=====end of gulp task for working docs files ======//


//=====start of gulp task for creating final docs files ====//
//preview final project on a browser
gulp.task('previewDist', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "final-docs"
    }
  });
});

//deleting folder final-docs
gulp.task('deleteDistFolder', () => {
  return del("./final-docs");
});

//copy general files from folder working-docs to folder final-docs
gulp.task('copyGeneralFiles', () => {
  const pathsToCopy = [
    './working-docs/**/*',
    '!./working-docs/*.html',
    '!./working-docs/assets/images/**',
    '!./working-docs/assets/styles/**',
    '!./working-docs/assets/scripts/**',
    '!./working-docs/temp',
    '!./working-docs/temp/**'
  ];

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./final-docs"));
});

//copying images from working-docs folder to final folder
gulp.task('copyImages', () => {
  return gulp.src(['./working-docs/assets/images/**/*'])
    .pipe(gulp.dest("./final-docs/assets/images"));
});

//compressing css and js save it on final-docs
gulp.task('usemin', ['styles', 'scripts'], () => {
  return gulp.src("./working-docs/*.html")
    .pipe(usemin({
      css: [() => {return rev()}, () => {return cssnano()}],
      js: [() => {return rev()}, () => {return uglify()}]
    }))
    .pipe(gulp.dest("./final-docs"));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'copyImages', 'usemin']);

//====== end of  gulp task for creating final docs files ====///
