const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const htmlmin = require("gulp-htmlmin");

gulp.task("server", function () {
  browserSync({
    server: {
      baseDir: "dist",
      // baseDir: "src",
    },
  });

  // gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task("styles", function () {
  return (
    gulp
      .src("src/sass/**/*.+(scss|sass)")
      .pipe(sass({ style: "compressed" }).on("error", sass.logError))
      .pipe(rename({ suffix: ".min", prefix: "" }))
      .pipe(autoprefixer())
      // .pipe(cleanCSS({ compatibility: "ie8" }))
      .pipe(gulp.dest("dist/css"))
      .pipe(gulp.dest("src/css"))
      .pipe(browserSync.stream())
    // .pipe(browserSync.reload({ stream: true }))
  );
});

gulp.task("html", function () {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist/"))
    .pipe(browserSync.stream());
});

gulp.task("scripts", function () {
  return gulp
    .src("src/js/**/*.js")
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("fonts", function () {
  return gulp
    .src("src/fonts/**/*", { encoding: false })
    .pipe(gulp.dest("dist/fonts"))
    .pipe(browserSync.stream());
});

gulp.task("icons", function () {
  return gulp
    .src("src/icons/**/*", { encoding: false })
    .pipe(gulp.dest("dist/icons"))
    .pipe(browserSync.stream());
});

gulp.task("images", function () {
  return gulp
    .src("src/images/**/*", { encoding: false })
    .pipe(gulp.dest("dist/images"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel("styles"));
  gulp.watch("src/*.html").on("change", gulp.parallel("html"));
  gulp.watch("src/js/**/*.js").on("change", gulp.parallel("scripts"));
  gulp.watch("src/fonts/**/*").on("all", gulp.parallel("fonts"));
  gulp.watch("src/icons/**/*").on("all", gulp.parallel("icons"));
  gulp.watch("src/images/**/*").on("all", gulp.parallel("images"));
  // копирует css но я ээто в самом css прописал
  // gulp.watch("src/css/**/*").on("all", gulp.parallel("css"));
});

gulp.task(
  "default",
  gulp.parallel(
    "watch",
    "server",
    "styles",
    "scripts",
    "fonts",
    "icons",
    "html",
    "images"
  )
);

// копирование css
// gulp.task("css", function () {
// 	return gulp
// 		.src("src/scc/**/*")
// 		.pipe(gulp.dest("dist/css"))
// 		.pipe(browserSync.stream());
// });

// код из https://gulpjs.com/:
// function defaultTask(cb) {
// place code for your default task here
//   cb();
// }
// const _default = defaultTask;
// export { _default as default };

// рабочий вариант:
// exports.default = defaultTask;
