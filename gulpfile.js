const{ watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

//configyrasua
const path = require('./config/path.js');

// tasks
const clear = require('./task/clear.js');
const pug = require('./task/pug.js');
const scss = require('./task/scss.js');
 
//server
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  });
}

// watcher
const watcher = () => { 
  watch(path.pug.watch, pug).on('all', browserSync.reload);
  watch(path.scss.watch, scss).on('all', browserSync.reload);
}

// ЗАДАЧИ 
exports.pug = pug;
exports.scss = scss;

//sborka
exports.dev = series(
  clear,
  parallel(pug, scss),
  parallel(watcher, server)
);