import Vue from 'vue'
import locales from 'src/config/locales'

var bulkRequired = require('bulk-require')(__dirname, './strings/*.js')

var strings = {}
Object.keys(bulkRequired.strings).forEach(lang => strings[lang] = bulkRequired.strings[lang].default)
export default strings
