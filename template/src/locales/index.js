import Vue from 'vue'
import Vuei18n from 'vue-i18n'
import locales from 'src/config/locales'

var bulkRequired = require('bulk-require')(__dirname, './strings/*.js')

var strings = {}
Object.keys(bulkRequired.strings).forEach(lang => strings[lang] = bulkRequired.strings[lang].default)

Vue.use(Vuei18n)

// set lang
Vue.config.lang = locales.locale
Vue.config.fallbackLang = locales.fallbackLocale

// set locales
Object.keys(strings).forEach((lang) => Vue.locale(lang, strings[lang]))

export default strings
