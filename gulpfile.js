var gulp = require('gulp'),
    ts             = require('gulp-typescript'),
    sourcemaps     = require('gulp-sourcemaps'),
    gulpCopy       = require('gulp-copy'),
    runSequence    = require('run-sequence'),
    clean          = require('gulp-clean'),
    mainBowerFiles = require('main-bower-files'),
    debug          = require('gulp-debug'),
    install        = require('gulp-install'),
    embedTemplates = require('gulp-angular-embed-templates');

gulp.task('default', function(pipe){
   runSequence('clean', 'install', 'build', pipe); 
});

gulp.task('install', ['bower:install']);

gulp.task('bower:install', function(){
    return gulp.src(['./bower.json'])
               .pipe(install());
});

gulp.task('build', ['js:build', 'css:build', 'dependencies:build']);

gulp.task('dependencies:build', function(){
    // TODO: I would like to add a flattening here for now ok
  return gulp.src(mainBowerFiles())
        // .pipe(debug())
        .pipe(gulpCopy('public/deps'))
});

gulp.task('js:build', function () {
    var tsProject = ts.createProject('tsconfig.json');
    return tsProject.src() // also can use *.js files
        .pipe(embedTemplates({sourceType:'ts'}))
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("public/ng2"));
});
gulp.task('css:build', function(){
   return gulp.src('app/**/*.css')
              .pipe(gulpCopy('public/ng2', {
                  prefix: 1
              }))
});
gulp.task('clean', function(){
   return gulp.src(['public/ng2', 'public/deps', 'bower_components'], {read: false})
              .pipe(clean());
});
