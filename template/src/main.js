{{#if_eq build "standalone"}}
// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
{{/if_eq}}
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import locales from './locales'

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  locales,
  render: (h) => h(App)
})
