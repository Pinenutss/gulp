var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var nocache = require('gulp-anti-cache');
var browserSync = require('browser-sync').create();// 实时刷新
var sass        = require('gulp-sass');
var reload      = browserSync.reload;
// 静态服务器 + 监听 scss/html 文件
gulp.task('server', ['sass'], function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch("src/css/*.css", ['sass']);
    gulp.watch("src/*.html").on('change', reload);
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function() {
    return gulp.src("src/css/*.css")
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(reload({stream: true}));
});

gulp.task('jshint',function(){
    return gulp.src('./src/js/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
});
gulp.task('uglify',['jshint'],function(){
    return gulp.src('./src/js/*.js')
            .pipe(uglify())
            .pipe(gulp.dest('./dist/js'));
});
gulp.task('minify',['uglify'],function(){
   return gulp.src('./src/css/*.css')
            .pipe(minify())
            .pipe(gulp.dest('./dist/css'));
});
gulp.task('nocache',['minify'],function(){
    gulp.src('./src/*.html')
            .pipe(nocache())
            .pipe(gulp.dest('./dist'))
});
gulp.task('dist',['nocache'],function(){
    console.log('============== Gulp Info ============');
    console.log('Task dist has been completed');
    console.log('=====================================');
})
// 默认任务
gulp.task("default", function() {
	console.log('============== Gulp Info ============');
	console.log('Welcome to Gulp packaging!');
	console.log('use "gulp dist" command publish file from src to release!');
	console.log('=====================================');
});