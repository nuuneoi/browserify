<template lang="pug">
#theme-body
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

<style lang="stylus">
@import './styles/global'
</style>

<style lang="stylus" scoped>
@import "./styles/variables"

#theme-body
  background-color #ddd
  padding 16px
  font-family $font-stack
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>
