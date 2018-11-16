<template>
  <div class="wrapper">
    <div class="banner">
      <img class="banner" src="../assets/images/banner.jpg" alt="">
      <div class="header-btn" @click="dealDownload('header')">下载观看精彩视频</div>
    </div>
    <div class="content">
      <div class="title">电视剧</div>
      <div class="list">
        <div class="img-wrapper"><img src="../assets/images/1-1.jpg" alt="" @click="dealDownload('content')"></div>
        <div class="img-wrapper"><img src="../assets/images/1-2.jpg" alt="" @click="dealDownload('content')"></div>
        <div class="img-wrapper"><img src="../assets/images/1-3.jpg" alt="" @click="dealDownload('content')"></div>
        <div class="img-wrapper"><img src="../assets/images/1-4.jpg" alt="" @click="dealDownload('content')"></div>
      </div>
    </div>
    <div class="content">
      <div class="title">电影</div>
      <div class="list">
        <div class="img-wrapper"><img src="../assets/images/2-1.jpg" alt="" @click="dealDownload('content')"></div>
        <div class="img-wrapper"><img src="../assets/images/2-2.jpg" alt="" @click="dealDownload('content')"></div>
        <div class="img-wrapper"><img src="../assets/images/2-3.jpg" alt="" @click="dealDownload('content')"></div>
        <div class="img-wrapper"><img src="../assets/images/2-4.jpg" alt="" @click="dealDownload('content')"></div>
      </div>
    </div>
    <div class="content">
      <div class="title">动漫</div>
      <div class="list">
        <div class="img-wrapper"><img src="../assets/images/3-1.jpg" alt="" @click="dealDownload('content')"></div>
        <div class="img-wrapper"><img src="../assets/images/3-2.jpg" alt="" @click="dealDownload('content')"></div>
        <div class="img-wrapper"><img src="../assets/images/3-3.jpg" alt="" @click="dealDownload('content')"></div>
        <div class="img-wrapper"><img src="../assets/images/3-4.jpg" alt="" @click="dealDownload('content')"></div>
      </div>
    </div>
    <div class="download" @click="dealDownload()">
      <img src="../assets/images/download.jpg" alt="">
    </div>
    <div v-show="popupVisible" class='guide_popup' @click="popupVisible=!popupVisible">
      <img src="../assets/images/guide.png" alt="">
    </div>
    <input type="text" v-model="formData.city" @click="$refs.citypage.open()" readonly onfocus="this.blur()" placeholder="请选择城市">
    <jb-selectCity v-model="formData.city" ref="citypage"></jb-selectCity>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        popupVisible: false,
        formData:{
          city:""
        }
      }
    },
    methods: {
      dealDownload(flag) {
        switch (flag) {
          case "header":
            MtaH5.clickStat("clicking_header");
            _paq.push(["trackEvent", "点击头部按钮", "点击头部按钮跟踪"]);
            break;
          case "content":
            MtaH5.clickStat("clicking_content");
            _paq.push(["trackEvent", "点击内容", "点击内容跟踪"]);
            break;
          default:
            MtaH5.clickStat("clicking_download");
            _paq.push(["trackEvent", "点击立即下载按钮", "点击立即下载按钮跟踪"]);
        }
        if (/micromessenger/.test(window.navigator.userAgent.toLowerCase())) {
          //若是微信则指引
          this.popupVisible = true;
        } else {
          //window.location.href = "https://jmyunyingapp.lipush.com/yunying/app/TencentVideo_10470.apk";
          const iframe = document.createElement('iframe');
          iframe.src = 'URL scheme'; // URL scheme的方式跳转
          iframe.style.display = 'none';
          document.body.appendChild(iframe);
          const timer = 1000;
          setTimeout(function() {
            // 执行成功后移除iframe
            document.body.removeChild(iframe);
            //setTimeout小于2000通常认为是唤起APP失败
            if (Date.now() - last < 2000) {
              // 执行失败函数
              // 这里需要考虑一下之前知乎遇到的那个问题（浏览器询问导致时间小于2S）
            } else {
              //  执行成功函数
            }
          }, timer);
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .wrapper
    overflow hidden
    .banner
      position relative
      margin-bottom .1rem
      img
        display block
        width 100%
      .header-btn
        position absolute
        right 5px
        bottom 5px
        color #ffffff
        background-color #ee7700
        font-size .8rem
        width 8rem
        line-height 1.5rem
        text-align center
        font-weight 700
        border-radius 5px
    .content
      padding-left 5px
      .title
        padding .1rem 0 .35rem
        font-size .9rem
      .list
        display flex
        .img-wrapper
          margin-right 5px
          flex 1
          img
            display block
            width 100%
    .download
      img
        width 100%
        display block
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
