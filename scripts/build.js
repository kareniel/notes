var path = require('path')
var fse = require('fse')

const DIST_DIR = path.join(__dirname, '../dist')

fse.mkdirp(DIST_DIR)
