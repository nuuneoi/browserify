<template lang="pug">
#app
  component(v-bind:is="theme")
</template>

<script>
import Vue from 'vue'
import VueExtension from 'src/plugins/VueExtension'
import locales from 'src/config/locales'

// Import extra plugin(s)
Vue.use(VueExtension)


/*******************************
 * Pre-require the followings:
 *  - Themes' Body
 *  - Themes' locales
 *******************************/
var bulk = require('bulk-require')
var bulkRequired = bulk(__dirname, [
  './components/themes/*/ThemeBody.vue'
])


/*******************
 * Register Themes
 *******************/
var components = {}
registerThemes(['starter']); // Feel free to add more themes to the array

function registerThemes(themes) {
  themes.forEach((theme) => {
    components[theme] = bulkRequired.components.themes[theme].ThemeBody;
  })
}

/**********************
 * Export app element
 **********************/
 export default {
   name: 'app',
   data () {
     return {
       theme: 'starter'
     }
   },
   components: components
 }

/*************************
 * Hot Module Replacement
 *************************/
if (module.hot) {
  Vue.config.lang = locales.locale
}
</script>

<style lang="stylus" scoped>
</style>
