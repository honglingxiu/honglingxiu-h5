<template>
  <div>
    <div class="header">
      <img class="common-img" src="../assets/images/header.png" alt="">
      <img class="download" src="../assets/images/download.png" alt="" @click="dealDownload">
    </div>
    <div class="list">
      <img class="common-img" src="../assets/images/1.png" @click="dealDownload" alt="">
      <img class="common-img" src="../assets/images/2.png" @click="dealDownload" alt="">
      <img class="common-img" src="../assets/images/3.png" @click="dealDownload" alt="">
      <img class="common-img" src="../assets/images/4.png" @click="dealDownload" alt="">
      <img class="common-img" src="../assets/images/6.png" @click="dealDownload" alt="">
    </div>

    <div class="more">
      <img src="../assets/images/more.png" alt="" @click="dealDownload">
    </div>
    <div class="logo">
      <img class="common-img" src="../assets/images/logo.png" alt="">
    </div>
    <div class="bottom">
      <img class="common-img" src="../assets/images/bottom.png" alt="">
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
    .download
      position absolute
      width 10rem
      left 50%
      top 40%
      margin-left -5rem
  .more
    margin-top .5rem
    padding-top .5rem
    img
      display block
      width 70%
      margin 0 auto
  .bottom
    padding .5rem 0 1rem
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
