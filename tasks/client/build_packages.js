import gulp from 'gulp';
import {path, tasks} from './const';

const PACKAGES = [
  path.ROOT + 'package.json',
  path.ROOT + 'bower.json'
];

gulp.task(tasks.CLIENT_BUILD_PACKAGES_DIST, () => {
  return gulp.src(PACKAGES, {base: path.ROOT})
    .pipe(gulp.dest(path.DIST));
});
