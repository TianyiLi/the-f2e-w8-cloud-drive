<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import UploadImg from './svg/upload.vue'

@Component({
  components: {
    UploadImg
  }
})
export default class Nav extends Vue {

}
</script>
<template>
  <div class="navbar">
    <div class="logo">
      <img src="../assets/logo@2x.png" alt="" class="logo-img">
    </div>
    <div class="upload">
      <UploadImg class="upload-img"></UploadImg>
      <span>上傳檔案</span>
    </div>
    <div class="function-list">
      <div class="my-file">
        <img src="../assets/add-folder 拷貝.svg"
          alt="">
        我的檔案
      </div>
      <div class="added-star">
        <img src="../assets/star.svg"
          alt="">
        已加星號
      </div>
      <div class="shared-file">
        <img src="../assets/sharing-content.svg"
          alt="">
        檔案共享
      </div>
      <div class="trash-can">
        <img src="../assets/garbage.svg"
          alt="">
        垃圾桶
      </div>
    </div>
    <div class="user">
      <div class="user-img"></div>
      <div class="name">Paul</div>
      <div class="auth">User</div>
    </div>
    <div class="space-usage">
      <div class="progress-bar"></div>
    </div>
    <div class="space-usage-content">
      <strong>容量 1.2 GB</strong> / 10 GB
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.navbar
  background-color #4CB5F5
  box-shadow 3px 0px 6px #66666633
  text-align center
  height 100vh
  width 256px
  display flex
  flex-direction column
  align-items center
  img
    vertical-align middle
  .logo
    font-size 24px
    font-weight bold
    color #FFFFFF
    margin-top 61px
    user-select none
    .logo-img
      height 24px
      vertical-align middle
  .upload
    color #4CB5F5
    background-color #FFFFFF
    box-shadow 0px 0px 6px #00000029
    font-size 18px
    padding 12px 40px
    border-radius 25px
    display inline-block
    box-sizing border-box
    width 190px
    height 51px
    margin-top 42px
    cursor pointer
    .upload-img
      fill #4CB5F5
      vertical-align middle
      width 28px
      height 26px
      margin-right 9px
  .function-list
    color white
    font-size 18px
    display flex
    flex-direction column
    align-items flex-start
    margin-top 26px
    >*
      display inline-block
      margin-bottom 18px
      cursor pointer
    img
      height 21px
      margin-right 11px
      width auto
  .user
    margin-top auto
    margin-bottom 17px
    display grid
    grid-template-areas 'photo name' 'photo auth'
    grid-template-columns 75px auto
    color white
    text-align left
    .user-img
      grid-area photo
      background-image url('../assets/rat.jpg')
      width 60px
      height 60px
      border-radius 50%
      background-position center
      background-size cover
    .name
      grid-area name
      font-size 24px
      margin-bottom 4px
      font-weight bold
    .auth
      grid-area auth
      font-size 18px
  .space-usage
    margin-bottom 15px
    width 190px
    height 10px
    border-radius 5px
    border 1px solid white
    position relative
    overflow hidden
    .progress-bar
      position absolute
      left 30%
      top 0
      width 100%
      background-color #fff
      height 100%
  .space-usage-content
    margin-bottom 57px
    color white
    font-size 16px
</style>
