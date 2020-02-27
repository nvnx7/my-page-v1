const gulp = require("gulp");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const gulpIf = require("gulp-if");
const cleanCSS = require("gulp-clean-css");
const babel = require("gulp-babel");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");

gulp.task("styles", function() {
  return gulp
    .src("app/scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(concat("styles.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/css"));
});

gulp.task("scripts", function() {
  return gulp
    .src("app/js/*.js")
    .pipe(babel())
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("watch", function() {
  gulp.watch("app/scss/*.scss", gulp.series(["styles"]));
  gulp.watch("app/*.html", gulp.series(["useref"]));
  gulp.watch("app/js/*.js", gulp.series(["scripts"]));
});
