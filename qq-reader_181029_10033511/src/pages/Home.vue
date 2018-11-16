<template>
  <div class="wrapper">
    <div class="header">
      <img class="banner" src="../assets/images/header.png" alt="">
      <img class="download" src="../assets/images/download.png" alt="" @click="dealDownload">
    </div>

    <div class="content">
      <h1>热销榜<span class="f-r" @click="dealDownload">了解更多></span></h1>
      <div class="notice">
        <img src="../assets/images/notice-1.png" alt="" @click="dealDownload">
      </div>
      <ul class="list border-bottom">
        <li>
          <img src="../assets/images/hot-1.png" alt="" @click="dealDownload">
          <img src="../assets/images/hot-2.png" alt="" @click="dealDownload">
          <img src="../assets/images/hot-3.png" alt="" @click="dealDownload">
        </li>
        <li>
          <img src="../assets/images/hot-4.png" alt="" @click="dealDownload">
          <img src="../assets/images/hot-5.png" alt="" @click="dealDownload">
          <img src="../assets/images/hot-6.png" alt="" @click="dealDownload">
        </li>
      </ul>
    </div>
    <div class="content">
      <h1>热门推荐<span class="f-r" @click="dealDownload">了解更多></span></h1>
      <div class="notice">
        <img src="../assets/images/notice-2.png" alt="" @click="dealDownload">
      </div>
      <ul class="list">
        <li>
          <img src="../assets/images/rem-1.png" alt="" @click="dealDownload">
          <img src="../assets/images/rem-2.png" alt="" @click="dealDownload">
          <img src="../assets/images/rem-3.png" alt="" @click="dealDownload">
        </li>
        <li>
          <img src="../assets/images/rem-4.png" alt="" @click="dealDownload">
          <img src="../assets/images/rem-5.png" alt="" @click="dealDownload">
          <img src="../assets/images/rem-6.png" alt="" @click="dealDownload">
        </li>
      </ul>
    </div>
    <div class="more">
      <img src="../assets/images/more.png" alt="" @click="dealDownload">
    </div>
    <div class="logo">
      <img class="common-img" src="../assets/images/logo.png" alt="">
    </div>
    <div class="bottom">
      <img src="../assets/images/bottom.png" alt="">
    </div>
    <div v-show="popupVisible" class='guide_popup' @click="popupVisible=!popupVisible">
      <img src="../assets/images/guide.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      popupVisible:false//微信指引
    }
  },
  methods:{
    dealDownload(){
      MtaH5.clickStat("clicking_download");
      _paq.push(["trackEvent", "点击下载按钮", "下载包事件跟踪"]);
      if (/micromessenger/.test(window.navigator.userAgent.toLowerCase())) {
        //若是微信则指引
        this.popupVisible=true;
      }else {
        window.location.href="https://jmyunyingapp.lipush.com/yunying/app/10033511.apk";
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .header
    position relative
    .banner
      width 100%
      display block
    .download
      position absolute
      width 5.5rem
      left 1.5rem
      bottom .1rem
  .content
    /*padding 0 .5rem*/
    h1
      font-size 1.2rem
      line-height 1.6rem
      padding .2rem 0.5rem
      span
        font-weight normal
        font-size .7rem
        color #3E3E3E
    .notice
      padding 0 .5rem
      img
        display block
        width 100%
    .list
      margin .2rem .1rem
      padding-bottom .8rem
      li
        display flex
        height 12rem
        img
          flex 1
          display block
          width 33.3333%
    .border-bottom
      &:before
        border-color #D7D7D7
  .more
    margin-top .5rem
    padding-bottom .5rem
    img
      display block
      width 60%
      margin 0 auto
  .bottom
    /*background-color #EEF3FA*/
    padding .5rem 0 1rem
    img
      display block
      width 100%
  .guide_popup
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    opacity .5
    z-index 9999
    background #000
    text-align center
    img
      width 80%
      margin-top .2rem
</style>
