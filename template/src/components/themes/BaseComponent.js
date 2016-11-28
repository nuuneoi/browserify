import Vue from 'vue'
import * as Mapper from 'src/store/mapper.js'
import locales from 'src/config/locales'

var bulk = require('bulk-require')
var bulkRequired = bulk(__dirname, [
  './*/locales/index.js',
])

export default class BaseComponent {
  constructor(dirname, args) {
    var currentFileDirName = __dirname
    if (currentFileDirName.startsWith("/node_modules"))
      currentFileDirName = currentFileDirName.substring(13)
    var themeName = dirname.substring(currentFileDirName.length + 1)

    if (bulkRequired[themeName] && bulkRequired[themeName].locales.index)
      this.locales = bulkRequired[themeName].locales.index.default

    this.computed = Mapper.computed
    this.methods = Mapper.methods

    if (args)
      for (var key in args)
        this[key] = args[key]
  }
}
