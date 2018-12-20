const gulp = require("gulp");
const stylus = require("gulp-stylus");
const typographic = require("typographic");
const nib = require("nib");
const rupture = require("rupture");

gulp.task("styles", () => {
  gulp
    .src("style.styl")
    .pipe(
      stylus({
        use: [typographic(), nib(), rupture()]
      })
    )
    .pipe(gulp.dest("./"));
});
gulp.task("watch:styles", () => {
  gulp.watch("**/*.styl", gulp.parallel("styles"));
});

// to run : npm run gulp watch:styles
