<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { IDataType } from './Home'
const Mp4Icon = require('../assets/icon-mp4.png')
const ImgIcon = require('../assets/icon-img.png')
const PdfIcon = require('../assets/icon-pdf.png')
const DocIcon = require('../assets/icon-doc.png')
const FolderIcon = require('../assets/icon-folder.png')
@Component({
  components: {
  }
})
export default class Home extends Vue {
  @Prop({ default () { return '' } }) type!: string

  private mockData: IDataType[] = [
    {
      type: 'mp4',
      name: '走吧！一起用日語去旅行.mp4',
      star: true,
      lastModified: '2019/6/10',
      size: '6.5MB',
      owner: 'Paul',
      fileId: 0
    },
    {
      type: 'doc',
      name: '20191011-1020日本東京自由行.doc',
      star: false,
      lastModified: '2019/6/25',
      size: '2.3MB',
      owner: 'Paul',
      fileId: 1
    },
    {
      type: 'folder',
      name: '工作相關',
      star: false,
      lastModified: '2019/8/30',
      size: '205MB',
      owner: 'Paul',
      fileId: 2
    }
  ]

  selectListIsShow = false
  selectListStyle = {}
  activeRow = -1

  mounted () {
    window.onclick = this.clearSelectList
  }

  destroyed () {
    window.onclick = null
  }

  getPrefixImg (type: string) {
    switch (type) {
      case 'mp4':
        return Mp4Icon
      case 'doc':
        return DocIcon
      case 'folder':
        return FolderIcon
      case 'pdf':
        return PdfIcon
      case 'img':
        return ImgIcon
      default:
        break
    }
  }

  setSelectList ($ev: any, target: number) {
    console.log($ev)
    let x = $ev.pageX
    let y = $ev.pageY
    if (x + 200 > window.innerWidth) {
      x = window.innerWidth - 210
    }
    if (y + 380 > window.innerHeight) {
      y = window.innerHeight - 390
    }
    this.selectListStyle = {
      display: 'flex',
      top: y + 27 + 'px',
      left: x + 'px'
    }
    this.activeRow = target
  }
  clearSelectList () {
    this.selectListStyle = {
      display: 'none'
    }
    this.activeRow = -1
  }
}
</script>
<template>
  <div class="home">
    <div class="input-field">
      <div class="search"
        tabindex="1">
        <img src="../assets/search_24px.svg"
          alt="">
      </div>
      <div class="select-list search-select">
        <div class="option">依上傳時間</div>
        <div class="option">依修改時間</div>
        <div class="option">依檔案大小</div>
        <div class="option">依擁有者</div>
      </div>
      <input type="text"
        placeholder="搜尋您的檔案">
      <span class="triangle"></span>
    </div>
    <div class="my-file-wrap" v-if="type !== 'shared'">
      <div class="head">
        <h3>我的檔案</h3>
        <button class="btn-outline more">看更多</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>名稱<span class="triangle"></span></th>
            <th>上次修改</th>
            <th>檔案大小</th>
            <th>擁有者</th>
            <th></th>
          </tr>
        </thead>
        <tbody @click.stop>
          <tr v-for="(row, i) in mockData"
            @contextmenu.prevent="setSelectList($event, i)"
            @click.stop="clearSelectList"
            v-show="type === 'favorite' ? row.star : true"
            :class="activeRow === i ? 'active' : ''"
            :key="row.id">
            <td class="name">
              <img :src="getPrefixImg(row.type)">
              {{row.name}}
              <img class="star"
                src="../assets/star-fill.svg"
                v-if="row.star"
                alt="">
            </td>
            <td class="last-modified">
              {{row.lastModified}}
            </td>
            <td class="size">
              {{row.size}}
            </td>
            <td class="owner">
              {{row.owner}}
            </td>
            <td class="more">
              <button @click.stop="setSelectList($event, i)">
                <img src="../assets/more-info.svg"
                  alt="">
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="select-list"
        :style="selectListStyle">
        <div class="option">共享</div>
        <div class="option">下載</div>
        <div class="option">標示星號</div>
        <div class="option">重新命名</div>
        <div class="option">移動</div>
        <div class="option">複製</div>
        <div class="option">刪除</div>
      </div>
    </div>
    <div class="my-file-wrap" v-if="type !== 'my-file'">
      <div class="head">
        <h3>檔案共享</h3>
        <button class="btn-outline more">看更多</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>名稱<span class="triangle"></span></th>
            <th>上次修改</th>
            <th>檔案大小</th>
            <th>擁有者</th>
            <th></th>
          </tr>
        </thead>
        <tbody @click.stop>
          <tr v-for="(row, i) in mockData"
            @contextmenu.prevent="setSelectList($event, i + 10)"
            @click.stop="clearSelectList"
            v-show="type === 'favorite' ? row.star : true"
            :class="activeRow === i + 10 ? 'active' : ''"
            :key="row.id">
            <td class="name">
              <img :src="getPrefixImg(row.type)">
              {{row.name}}
              <img class="star"
                src="../assets/star-fill.svg"
                v-if="row.star"
                alt="">
            </td>
            <td class="last-modified">
              {{row.lastModified}}
            </td>
            <td class="size">
              {{row.size}}
            </td>
            <td class="owner">
              {{row.owner}}
            </td>
            <td class="more">
              <button @click.stop="setSelectList($event, i + 10)">
                <img src="../assets/more-info.svg"
                  alt="">
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="select-list"
        :style="selectListStyle">
        <div class="option">共享</div>
        <div class="option">下載</div>
        <div class="option">標示星號</div>
        <div class="option">重新命名</div>
        <div class="option">移動</div>
        <div class="option">複製</div>
        <div class="option">刪除</div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.triangle
  width 0
  height 0
  border-style solid
  border-width 10px 6px 0 6px
  border-color #666666 transparent transparent transparent
.home
  box-sizing border-box
  padding 46px 65px 0 74px
  .input-field
    width 443px
    height 50px
    border-radius 50px
    position relative
    background-color #E6E6E6
    margin-left auto
    margin-bottom 25px
    .search
      width 50px
      height 50px
      border-radius 50%
      background-color #4CB5F5
      position absolute
      left 0
      top 0
      display flex
      justify-content center
      align-items center
      cursor pointer
      &:focus
        outline none
      img
        width 28px
        height 28px
    .search:focus ~ .search-select
      display flex
      width 100%
      position absolute
      top calc(100% + 10px)
      left 0
    .triangle
      position absolute
      top 50%
      transform translateY(-50%)
      right 19px
    input
      background-color inherit
      font-size 18px
      position absolute
      left 66px
      height 100%
      padding 0
      border unset
      font-weight bold
  .head
    display flex
    justify-content space-between
    align-items center
  h3
    display inline-block
  .btn-outline
    border 2px solid #999999
    box-shadow 0px 3px 6px #E6E6E6
    background-color #fff
    border-radius 20px
    box-sizing border-box
    min-width 130px
    height 40px
    font-size 18px
    color #999999
    transition 0.3s
    &:hover
      color white
      background-color #999999
    &.more
      margin-left auto
  .select-list
    position absolute
    display none
    width 200px
    height 350px
    flex-direction column
    justify-content space-evenly
    align-items flex-start
    border-radius 8px
    font-size 18px
    color #666666
    box-shadow 0px 3px 6px #E6E6E6
    z-index 1
    background-color #fff
    right 0
    .option
      padding 9px 0
      padding-left 26px
      width 100%
      box-sizing border-box
      &:hover
        background-color #EFEFEF
  table
    width 100%
    border-spacing 0
    text-align left
    border-collapse collapse
    user-select none
    td, th
      padding 14px 40px 14px 16px
    th
      border-bottom 1px solid #e6e6e6
      color #666666
      position relative
      .triangle
        margin-left 9px
        position absolute
        top 50%
        transform translateY(-50%)
    img
      vertical-align middle
    .star
      width 19px
    .name
      img
        vertical-align middle
      img:first-child
        margin-right 29px
    .more
      position relative
      button
        background-color #fff
        height 35px
        width 35px
        border unset
        border-radius 5px
        &:active
          border #4CB5F5 solid 2px
        img
          width 18px
    tr.active
      background-color #D1EEFF
    tr:hover td
      background-color #D1EEFF
      &:first-child
        border-radius 8px 0 0 8px
      &:last-child
        border-radius 0 8px 8px 0
</style>
