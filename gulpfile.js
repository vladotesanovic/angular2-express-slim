var gulp = require('gulp'),
    ts             = require('gulp-typescript'),
    sourcemaps     = require('gulp-sourcemaps'),
    gulpCopy       = require('gulp-copy'),
    runSequence    = require('run-sequence'),
    clean          = require('gulp-clean'),
    embedTemplates = require('gulp-angular-embed-templates');

gulp.task('default', function(pipe){
   runSequence('clean', 'build', pipe); 
});

gulp.task('build', ['js:build', 'css:build']);

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
   return gulp.src(['public/ng2'], {read: false})
              .pipe(clean());
});
