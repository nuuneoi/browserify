<template>
  <div id="app">
    <hello></hello>
  </div>
</template>

<script>
import Vue from 'vue'
import VueExtension from 'src/plugins/VueExtension'
import locales from 'src/config/locales'

// Import extra plugin(s)
Vue.use(VueExtension)

import Hello from './components/Hello.vue'

export default {
  name: 'app',
  components: {
    Hello
  }
}

/*************************
 * Hot Module Replacement
 *************************/
if (module.hot) {
  Vue.config.lang = locales.locale
}
</script>
