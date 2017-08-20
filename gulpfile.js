
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    fileinclude = require('gulp-file-include'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    path = require("path");

var paths = {
  templates: './templates/',
  sass: './css/source/'
};

// fileinclude: grab partials from templates and render out html files
// ==========================================
gulp.task('fileinclude', function() {
  return gulp.src(path.join(paths.templates, '*.tpl.html'))
    .pipe(fileinclude({
      basepath: path.join(__dirname, 'templates')
    }))
    .pipe(rename({
      extname: ""
     }))
    .pipe(rename({
      extname: ".html"
     }))
    .pipe(gulp.dest('./public/'))
    .pipe(livereload())
    .on('error', onWarning);
});

//  Sass: compile sass to css task - uses Libsass
//===========================================
gulp.task('sass', function() {
  return gulp.src(path.join(paths.sass, '*.scss'))
    .pipe(sass({ style: 'expanded', sourceComments: 'map', errLogToConsole: true}).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', "> 1%", 'ie 8', 'ie 9'))
    .pipe(gulp.dest('public/css'))
    .pipe(livereload())
    .on('error', onWarning);
});

//  Connect: sever task
//===========================================
gulp.task('connect', function() {
	connect.server({
	  port: 1337,
	  root: [path.join(__dirname, 'public')],
	  livereload: true
	});
});

function watchStuff(task) {
  // Listen on port 35729
  livereload.listen(35729, function (err) {
    if (err) {
      return console.error(err)
      //TODO use notify to log a message on Sass compile fail and Beep
    };

    //Watch task for sass
    gulp.watch(path.join(paths.sass, '**/*.scss'), [task]);

    // watch task for gulp-includes
    gulp.watch(path.join(paths.templates, '**/*.html'), ['fileinclude']);

  });
}

//  Watch and Livereload using Libsass
//===========================================
gulp.task('watch', function() {
 watchStuff('sass');

});



//  Default Gulp Task
//===========================================
gulp.task('default', ['fileinclude', 'sass', 'connect', 'watch'], function() {

});


// error handling
function handleError(level, error) {
   gutil.log(error.message);
   if (isFatal(level)) {
      process.exit(1);
   }
}

function onError(error) { handleError.call(this, 'error', error);}
function onWarning(error) { handleError.call(this, 'warning', error);}
