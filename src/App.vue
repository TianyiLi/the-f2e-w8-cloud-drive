<template>
  <div id="app">
    <Nav class="nav-container"></Nav>
    <router-view class="drive-ctn" />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Nav from './components/Nav.vue'
@Component({
  components: {
    Nav
  }
})
export default class App extends Vue {

}
</script>
<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC|Roboto&display=swap')
html, body
  margin 0
  padding 0
  position absolute
  top 0
  font-family 'Noto Sans TC', 'Roboto'
  left 0
  width 100%
  height 100%
#app
  font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', 'Noto Sans TC'
  width 100%
  height 100%
  display grid
  grid-template-areas 'nav ctn'
  grid-template-columns 256px auto
  background-image embedurl('./assets/cloud_24px_bg@2x.png')
  background-repeat no-repeat
  background-size 455.5px 361.53px
  background-position bottom right
  .nav-container
    grid-area nav
  .drive-ctn
    grid-area ctn
</style>
