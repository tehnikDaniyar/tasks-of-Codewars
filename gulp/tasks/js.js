import GulpUglify from "gulp-uglify";
import concat from 'gulp-concat';

export const js = () => {
	return app.gulp.src(app.path.src.js)
		.pipe(concat('script.js'))
		// .pipe(GulpUglify())
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browserSync.stream());
};