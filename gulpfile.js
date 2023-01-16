//======main modules=======
import gulp from 'gulp';
import { path } from './gulp/config/path.js';

//======glodal============
global.app = {
	gulp: gulp,
	path: path,
};

//======tasks=============
import { js } from './gulp/tasks/js.js';

//======scripts===========

gulp.task('default', js);
