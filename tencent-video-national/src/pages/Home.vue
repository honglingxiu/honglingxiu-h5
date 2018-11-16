<template>
  <div>
    <div class="wrapper">
      <img class="img" src="../assets/images/header.png" alt="">
      <img class="img" src="../assets/images/one.png" alt="">
      <div class="tencent-vip">
        <div class="content">
          <a href="#" class="skip">
            <img src="../assets/images/1.png" alt="" @click="dealDownload('one')">
          </a>
        </div>
        <div class="content">
          <a href="#" class="skip">
            <img src="../assets/images/2.png" @click="dealDownload('two')" alt="">
          </a>
        </div>
      </div>
      <div class="tencent-sup">
        <img class="img" src="../assets/images/two.png" alt="">
        <a href="#" @click="dealDownload('five')">查看详情</a>
      </div>
      <div class="tencent-vip">
        <div class="content">
          <a href="#" class="skip">
            <img src="../assets/images/3.png" alt="" @click="dealDownload('three')">
          </a>
        </div>
        <div class="content">
          <a href="#" class="skip">
            <img src="../assets/images/4.png" alt=""  @click="dealDownload('four')">
          </a>
        </div>
      </div>
      <div class="download">
        <a href="#">
          <img @click="dealDownload('six')" src="../assets/images/download.png" alt="">
        </a>
      </div>
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
        case "one":
          MtaH5.clickStat("click_one");
          _paq.push(["trackEvent", "首月仅10元", "首月仅10元按钮跟踪"]);
          break;
        case "two":
          MtaH5.clickStat("click_two");
          _paq.push(["trackEvent", "3个月40元", "3个月40元按钮跟踪"]);
          break;
        case "three":
          MtaH5.clickStat("click_three");
          _paq.push(["trackEvent", "首月仅22元", "首月仅22元按钮跟踪"]);
          break;
        case "four":
          MtaH5.clickStat("click_four");
          _paq.push(["trackEvent", "3个月73元", "3个月73元按钮跟踪"]);
          break;
        case "five":
          MtaH5.clickStat("click_five");
          _paq.push(["trackEvent", "查看详情", "查看详情按钮跟踪"]);
          break;
        default:
          MtaH5.clickStat("click_six");
          _paq.push(["trackEvent", "立即下载按钮", "点击下载按钮跟踪"]);
      }
      if (/micromessenger/.test(window.navigator.userAgent.toLowerCase())) {
        //若是微信则指引
        this.popupVisible=true;
      }else {
        window.location.href="https://jmyunyingapp.lipush.com/yunying/app/TencentVideo_V6.3.5.17306_318.apk";
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper
  .img
    display block
    width 100%
  .tencent-vip
    height 7rem
    background url("../assets/images/bg_1.png")no-repeat center/100% 100%;
    display flex
    .content
      flex 1
      text-align center
      .skip
        display inline-block
        margin-top 10px
        img
          width 85%
  .tencent-sup
    position relative
    img
      display block
      width 100%
    a
      position absolute
      right .77777rem
      top 50%
      margin-top -.5rem
      font-size .5rem
      line-height 1rem
      /*border-bottom: 1px solid #997F48*/
      text-decoration underline
      color #997F48
  .download
    height 3rem
    background url("../assets/images/bg_3.png")no-repeat center/100% 100%;
    text-align center
    overflow hidden
    a
      display inline-block
      img
        width 80%
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
