//======main modules=======
import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/plugins/plugins.js';

//======glodal============
global.app = {
	gulp: gulp,
	path: path,
	plugins: plugins,
};

//======watcher==========
const watcher = () => {
	gulp.watch(path.watch.js, js);
};

//======tasks=============
import { js } from './gulp/tasks/js.js';
import { server } from './gulp/tasks/server.js';

//======scripts===========
const dev = gulp.series(js, gulp.parallel(watcher, server));
gulp.task('default', dev);
