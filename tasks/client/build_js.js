import gulp from 'gulp';
import uglify from 'gulp-uglify';
import {path, tasks} from './const';

const JS = [
  path.DIST + '**/*.js',
  '!' + path.DIST + 'bower_components/**/*',
  '!' + path.DIST + 'node_modules/**/*'
];

gulp.task(tasks.CLIENT_BUILD_JS_DIST, () => {
  return gulp.src(JS, {base: path.DIST})
    .pipe(uglify())
    .pipe(gulp.dest(path.DIST));
});
