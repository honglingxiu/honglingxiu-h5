var gulp=require("gulp");
//var less=require("gulp-less");
var cssmin=require("gulp-cssmin");//css压缩工具
var imagemin=require("gulp-imagemin");
var uglify=require("gulp-uglify");
//var concat=require("gulp-concat");
var html=require("gulp-htmlmin");
var autoprefixer=require("gulp-autoprefixer");
/*var rev=require("gulp-rev");
var collector=require("gulp-rev-collector");
var useref=require("gulp-useref");
var gulpif=require("gulp-if");
var rename=require("gulp-rename");
*/
gulp.task("css", function () {
    gulp.src("./hnschoolyardgift1/css/*.css").pipe(autoprefixer()).pipe(cssmin()).pipe(gulp.dest("./hnschoolyardgift/hnschoolyardgift1/css"));
});
gulp.task("image", function () {
    gulp.src("./hnschoolyardgift1/images/*").pipe(imagemin()).pipe(gulp.dest("./hnschoolyardgift/hnschoolyardgift1/images/"));
});
gulp.task("html", function () {
    gulp.src("./*.html").pipe(html({collapseWhitespace: true,removeComments:true,minifyJS:true})).pipe(gulp.dest("./hnschoolyardgift/"));
});
gulp.task("compressJs", function () {
    gulp.src("./schoolyardgift1/js/*").pipe(uglify()).pipe(gulp.dest("./hnschoolyardgift/hnschoolyardgift1/js/"));
});

