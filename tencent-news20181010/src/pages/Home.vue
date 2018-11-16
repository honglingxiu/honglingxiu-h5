<template>
  <div class="wrapper">
    <div class="common">
      <img src="../assets/images/1.png" alt="">
      <button class="btn title-btn" @click="dealDownload('header')">立即下载</button>
    </div>
    <div class="common" @click="dealDownload()">
      <img src="../assets/images/2.png" alt="">
      <button class="btn content-btn">立即下载</button>
    </div>
    <div class="common">
      <img src="../assets/images/logo.png" alt="">
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
    dealDownload(flag){
      switch (flag){
        case "header":
          MtaH5.clickStat("clicking_header");
          _paq.push(["trackEvent", "点击头部按钮", "点击头部按钮跟踪"]);
          break;
        default:
          MtaH5.clickStat("clicking_download");
          _paq.push(["trackEvent", "点击内容区域", "点击内容区域跟踪"]);
      }
      if (/micromessenger/.test(window.navigator.userAgent.toLowerCase())) {
        //若是微信则指引
        this.popupVisible=true;
      }else {
        window.location.href="https://jmyunyingapp.lipush.com/yunying/app/TencentNews_4191.apk";
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper
  /*position absolute
  top 0
  left 0
  right 0
  bottom 0*/
  /*background-color red*/
  .common
    position relative
    img
      display block
      /*height 100%*/
      width 100%
    .btn
      background-color #CC363F
      color #ffffff
      position absolute
      border-radius 5px
      text-align center
      box-shadow 2px 3px 4px rgba(0,0,0,.6)
    .title-btn
      width 8.4rem
      line-height 2.3rem
      font-size 1.1rem
      left 50%
      margin-left -4.2rem
      bottom .5rem
    .content-btn
      width 11.2rem
      line-height 2.77rem
      font-size 1.5rem
      left 50%
      margin-left -5.6rem
      bottom 1rem
  /*.title
    height 9rem
    position relative
  .content
    position absolute
    top 9rem
    left 0
    right 0
    bottom 0*/
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
