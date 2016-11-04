import gulp from 'gulp';
import imageMin from 'gulp-imagemin';
import {path, tasks} from './const';

const IMAGES = [
  path.DIST + '**/*.{png,jpg,jpeg,svg,gif}',
  '!' + path.DIST + 'bower_components',
];

gulp.task(tasks.CLIENT_IMAGE_DIST, () => {
  return gulp.src(IMAGES, {base: path.DIST})
    .pipe(imageMin())
    .pipe(gulp.dest(path.DIST));
});
