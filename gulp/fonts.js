var gulp = require('gulp'),
    changed = require('gulp-changed');

gulp.task('fonts', function() {
    return gulp.src('./app/assets/fonts/*')
    .pipe(changed('./dist/temp/fonts'))
    .pipe(gulp.dest('./app/temp/fonts'));
});