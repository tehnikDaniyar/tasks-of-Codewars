import GulpUglify from "gulp-uglify";
import concat from 'gulp-concat';

export const js = () => {
	return app.gulp.src(app.path.src.js)
		.pipe(GulpUglify())
		.pipe(concat('script.js'))
		.pipe(app.gulp.dest(app.path.build.js));
};