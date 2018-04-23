var gulp = require('gulp');
var server = require('gulp-webserver');
var data = require('src/mock/data.json');

gulp.task('default', function() {
    gulp.src('src')
        .pipe(server({
            host: 'localhost',
            port: 9090,
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                if (req.url === '/') {
                    res.end(JSON.stringify(data));
                }
                next();
            }
        }))
})