//======main modules=======
import gulp from 'gulp';
import { path } from './gulp/config/path.js';

//======glodal============
global.app = {
	gulp: gulp,
	path: path,
};

//======watcher==========
const watcher = () => {
	gulp.watch(path.watch.js, js);
};

//======tasks=============
import { js } from './gulp/tasks/js.js';

//======scripts===========
const dev = gulp.series(js, watcher)
gulp.task('default', dev);
