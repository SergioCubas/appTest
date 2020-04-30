'use strict';
const gulp = require("gulp");
const sass = require("gulp-sass");

const urlSass = "./dev/sass/main.scss";
const urlCss = "./public";


gulp.task('sass',()=>{
    return gulp.src(urlSass)
    .pipe(sass().on('error',sass.logError))
    .pipe(sass({
        outputStyle:'compact'
    }))
    .pipe(gulp.dest(urlCss))
});

gulp.task("watch",()=>{
    gulp.watch("./dev/**/*.scss",(done)=>{
        gulp.series(["sass"])(done);
    })
})

gulp.task("default",gulp.series(["watch"]));