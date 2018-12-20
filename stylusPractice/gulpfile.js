const gulp = require("gulp");
const stylus = require("gulp-stylus");

gulp.task("styles", () => {
  gulp
    .src("style.styl")
    .pipe(stylus())
    .pipe(gulp.dest("./"));
});
gulp.task("watch:styles", () => {
  gulp.watch("**/*.styl", gulp.parallel("styles"));
});

// to run : npm run gulp styles
