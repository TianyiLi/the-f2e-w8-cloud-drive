<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
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
  private mockData: IDataType[] = [
    {
      type: 'mp3',
      name: '走吧！一起用日語去旅行.mp4',
      star: true,
      lastModified: '2019/6/10',
      size: '6.5MB',
      owner: 'Jennifer',
      fileId: 0
    },
    {
      type: 'doc',
      name: '20191011-1020日本東京自由行.doc',
      star: false,
      lastModified: '2019/6/25',
      size: '2.3MB',
      owner: 'Jennifer',
      fileId: 1
    },
    {
      type: 'folder',
      name: '工作相關',
      star: false,
      lastModified: '2019/8/30',
      size: '205MB',
      owner: 'Jennifer',
      fileId: 2
    }
  ]

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
}
</script>
<template>
  <div class="home">
    <div class="input-field">
      <img src="../assets/search_24px.svg"
        alt=""
        class="search">
      <input type="text"
        placeholder="搜尋您的檔案">
      <span class="triangle"></span>
    </div>
    <div class="my-file-wrap">
      <h2>我的檔案</h2>
      <button class="btn-outline">看更多</button>
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
        <tbody>
          <tr v-for="(row) in mockData"
            :key="row.id">
            <td class="name">
              <img :src="getPrefixImg(row.type)">
              {{row.name}}
              <img src="../assets/star.svg" v-if="row.star" alt="">
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
            <td>
              ...
            </td>
          </tr>
        </tbody>
      </table>
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
</style>
