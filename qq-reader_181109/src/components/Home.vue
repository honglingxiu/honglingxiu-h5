<template>
  <div class="wrapper" @click="dealDownload('other')">
    <button @click.stop="dealDownload()">下载QQ阅读</button>
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
      dealDownload(mark){
        switch (mark){
          case 'other':
            MtaH5.clickStat("clicking_other");
            _paq.push(["trackEvent", "点击页面", "页面点击事件跟踪"]);
            break;
          default:
            MtaH5.clickStat("clicking_download");
            _paq.push(["trackEvent", "点击下载按钮", "下载包事件跟踪"]);
            break;
        }
        //MtaH5.clickStat("clicking_download");
        //_paq.push(["trackEvent", "点击下载按钮", "下载包事件跟踪"]);
        var locationHref=window.location.href;
        //var locationHref="https://yunying.lipush.com/h5/tf/qqreader_181109_a";
        var reg=/181109_[abcde]/i;
        var arr=locationHref.match(reg);
        var flag=arr[0].charAt(arr[0].length-1);
        var url="";
        var defaulUrl="https://misc.wcd.qq.com/app?packageName=com.qq.reader&channelId=10033512";
       // console.log(this.$route.params);
        if (/micromessenger/.test(window.navigator.userAgent.toLowerCase())) {
          //若是微信则指引
          this.popupVisible=true;
        }else {
          switch (flag) {
            case "a":
              url=defaulUrl;
              break;
            case "b":
              url="https://misc.wcd.qq.com/app?packageName=com.qq.reader&channelId=10033514";
              break;
            case "c":
              url="https://misc.wcd.qq.com/app?packageName=com.qq.reader&channelId=10033516";
              break;
            case "d":
              url="https://misc.wcd.qq.com/app?packageName=com.qq.reader&channelId=10033517";
              break;
            case "e":
              url="https://misc.wcd.qq.com/app?packageName=com.qq.reader&channelId=10033520";
              break;
            default:
              url=defaulUrl;
              break;
          }
          window.location.href=url;
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .wrapper{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background:url("../assets/images/background.png") no-repeat center/cover;
    button{
      position: absolute;
      bottom: 32%;
      left:50%;
      margin-left: -35%;
      line-height: 2.5rem;
      width: 70%;
      color:#1F54A0;
      font-weight: bold;
      font-size : 1.5rem;
      border-radius: 5px;
      background-color: #ffffff;
    }
  }
  .guide_popup{
    position : fixed;
    left : 0;
    top : 0;
    width : 100%;
    height : 100%;
    opacity : .5;
    z-index : 9999;
    background : #000;
    text-align : center;
    img{
      width : 80%;
      margin-top : .2rem;
    }
  }
  /*.guide_popup
    position  fixed
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
      margin-top .2rem*/
</style>
