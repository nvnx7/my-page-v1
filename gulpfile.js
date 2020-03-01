const gulp = require("gulp");
const sass = require("gulp-sass");
const terser = require("gulp-terser");
const cleanCSS = require("gulp-clean-css");
const babel = require("gulp-babel");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const cache = require("gulp-cache");

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
    .pipe(terser())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("images", function() {
  return gulp
    .src("app/img/*.+(png|jpg|jpeg|gif|svg)")
    .pipe(cache(imagemin({ interlaced: true })))
    .pipe(gulp.dest("dist/img"));
});

gulp.task("watch", function() {
  gulp.watch("app/scss/*.scss", gulp.series(["styles"]));
  gulp.watch("app/js/*.js", gulp.series(["scripts"]));
  gulp.watch("app/img/*.+(png|jpg|jpeg|gif|svg)", gulp.series(["images"]));
});
