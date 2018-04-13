var gulp = require('gulp');
var ts = require('gulp-typescript');
var exec = require('child_process').exec;
var nodemon = require('gulp-nodemon');

gulp.task('backend', function () {
    return gulp.src('./server/**/*.ts')
        .pipe(ts({ noImplicitAny: true, lib: ["es2015"]
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('frontend', function (cb) {
    exec('ng build -op=dist/public', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('nodemon', function () {
    nodemon({
        script: 'dist/server.js',
        ext: 'js',
        env: {'NODE_ENV': 'development'}
    })
});

gulp.task('watch', ['backend'], function () {
    gulp.watch('./server/**/*.ts', ['backend']);
});

gulp.task('default', ['frontend', 'backend', 'watch', 'nodemon']);