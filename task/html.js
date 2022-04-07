const{ src, dest } = require('gulp');

//configyrasia
const path = require('../config/path.js');
const app = require('../config/app.js');

//плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');


// obrabotka html
const html = () => {
  return src(path.html.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'html',
        message: error.message
      }))
    }))
    .pipe(fileInclude())
    .pipe(size({
      title: "DO SJATIYA"
    }))
    .pipe(htmlmin(app.htmlmin))
    .pipe(size({
      title: "posle SJATIYA"
    }))
    .pipe(dest(path.html.dest))

}

module.exports = html;