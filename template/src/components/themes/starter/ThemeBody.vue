<template lang="pug">
div
  hello
</template>

<script>
import BaseComponent from 'src/components/themes/BaseComponent'

import Hello from './Hello.vue';

export default new class extends BaseComponent {
  constructor() {
    super(__dirname, {
      name: 'theme-body',
      components: {
        Hello
      }
    })
  }
  data () {
    return {
    }
  }
} ()
</script>

<style lang="stylus" scoped>
</style>
