import GulpUglify from "gulp-uglify";
export const js = () => {
	app.gulp.src(app.path.src.js)
		.pipe(GulpUglify())
		.pipe(app.gulp.dest(app.path.build.js));
};