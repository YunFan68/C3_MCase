var gulp = require('gulp');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify'); //js压缩
var concat = require('gulp-concat'); //合并
var cssnano = require('gulp-cssnano');
var minifyHTML = require('gulp-minify-html');
var imagemin = require('gulp-imagemin');
var gulpSequence = require('gulp-sequence');

gulp.task('default',['sequence','watch'],function(){
    console.log("项目构建完成！");
});

gulp.task('sequence', gulpSequence('clean',['js','html','css','images']));

gulp.task('watch',function(){
    gulp.watch('src/js/*.js',['js']);
    gulp.watch('src/css/*.css',['css']);
    gulp.watch('src/img/*.*',['images']);
    gulp.watch('src/*.html',['html']);
});

gulp.task('clean', function(cb) {
    del(['dist/js/','dist/css/','dist/img/','dist/*.html']);
    setTimeout(function(){
        return cb();
    },1000);
});

gulp.task('js',function(){
    return gulp.src('src/js/*.js')
        .pipe(concat('index.js'))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/js/'))
});

gulp.task('css',function(){
    return gulp.src('src/css/*.css')
        .pipe(concat('index.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('dist/'))
});

gulp.task('images', function() {
    return gulp.src('src/img/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img/'))
});
