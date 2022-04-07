const del = require('del');


const path = require('../config/path.js');

// delete directory
const clear = () => {
  return del(path.root)
}

module.exports = clear;