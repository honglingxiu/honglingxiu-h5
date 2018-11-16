<template>
  <div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="header">
          <img src="../assets/images/icon.png" alt="">
          <p>{{title}}</p>
          <div class="header-icon">
            <span class="icon official"><i class="icon-official iconfont icon-dagou"></i>官方</span><span
            class="icon non-poisonous"><i class="icon-poisonous iconfont icon-iconjia"></i>无病毒</span>
          </div>
        </div>
        <div class="title"><i class="quota-left iconfont icon-shuangyinhao"></i>{{description}}<i
          class="quota-right iconfont icon-shuangyinhao-copy"></i></div>
        <div class="situation">
          <div class="average">
            <div class="con score">
              <!--{{score}}
              <div class="star">
                <jb-star :score="score" :size="22"></jb-star>
              </div>-->
              <div class="star-wrapper">
                <span>{{score}}</span>
                <div class="star">
                  <jb-star :score="score" :size="22"></jb-star>
                </div>
              </div>
            </div>
            <p>应用评分</p>
          </div>
          <div class="average">
            <div class="con size">{{size}}
              <div class="unit-wrapper"><span class="size-mb">MB</span></div>
            </div>
            <p>应用大小</p>
          </div>
          <div class="average">
            <div class="con times">{{times}}
              <div class="unit-wrapper"><span class="times-w">万</span></div>
            </div>
            <p>下载次数</p>
          </div>
        </div>
        <div class="img-wall" ref="imgWall">
          <ul class="pic-list" ref="picList">
            <li class="pic-item pic-item-hook" v-for="(item,index) in imgArr" :key="index">
              <img :src="item" alt="" @click="toggleImageWall(index)">
            </li>
          </ul>
        </div>
        <div class="news-tag border-bottom">
          <span class="tag-read">{{tagArr[0]}}</span>
          <span class="tag-advise">{{tagArr[1]}}</span>
        </div>
        <div class="apply-desc border-bottom">
          <h1><span></span>应用介绍<i class="iconfont icon-right" ref="descIcon" @click="toggleFold"></i></h1>
          <div class="apply-text" ref="applyText">
            <p>【新手福利】</p>
            <p>首次使用APP，全场书籍免费读10天；</p>
            <p>使用第1-20天，每读1分钟即可兑换1书券，书券可用于购买全场任意书籍； </p>
            <p>使用第11天，根据阅读历史为你献上免费个性书库，精准推荐，包你喜欢！同时可开启高达20本在读书的隐藏福利，免费期延长10天；</p>
            <p>使用第31天，可选择1份神秘大神赠礼，包含一本大神书籍和专属大神签名。</p>
            <p>【热门影视原著】</p>
            <p>《斗破苍穹》：吴磊、林允领衔主演，9月3日起登陆湖南卫视、腾讯视频，且看萧炎如何不惧万难，携手萧薰儿，挑战恶势力，驰骋斗气世界！ </p>
            <p>《武动乾坤》：杨洋、张天爱领衔主演，优酷、东方卫视火热播出中，精彩原著抢先看 </p>
            <p>《后宫如懿传》：周迅、霍建华主演电视剧原著，诠释帝王夫妻的婚姻围城。 </p>
            <p>《凰权》：陈坤、倪妮领衔主演，《天盛长歌》经典原著，乱世风云诡谲，家国天下是非！</p>
            <p>【经典网文】</p>
            <p>江南全新作品《龙族V：悼亡者的归来》独家连载中，江南全系列作品电子版独家上架！ </p>
            <p>【漫画上线】</p>
            <p>领百元大券看漫画，新手礼、每日礼、好书礼，惊喜送不停。有问题找组织，QQ阅读漫画书友群748903129 </p>
            <p>【听书专区】</p>
            <p>《鬼吹灯》《斗破苍穹》《全职高手》《诛仙》《芈月传》等经典好文，有声阅读，解放双眼</p>
            <p>【云书架】书籍、阅读进度、笔记，关联帐号，自动云同步；</p>
            <p>【个性推荐】精选信息流推荐理由告诉你，私人定制不忽悠；</p>
            <p>【名家齐聚】大神携名作汇聚名人堂，快来找找你心水的作家！</p>
            <p>【实惠签到】每日签到领好礼，签满7天，周日还能抽大奖！</p>
            <p>【红包广场】红包功能上线，书币抢不停，看书更任性~</p>
            <div class="detail-refresh">
              <h1><span></span>更新说明：</h1>
              <p>1、包月改版，更多精彩内容，加量不加价！ </p>
              <p>2、其他细节优化</p>
            </div>
          </div>
          <div class="related-msg">
            版本：<span class="version">{{version}}</span>
            日期：<span>{{date}}</span>
          </div>
        </div>
        <div class="news-comment">
          <h1><span></span>评分与评论</h1>
          <div class="grade-wrapper">
            <div class="star-content">
              <h1>{{score}}</h1>
              <div class="star">
                <jb-star :score="score"></jb-star>
              </div>
            </div>
            <div class="progress-content">
              <jb-progress :rateArr="rateArr"></jb-progress>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="download" @click="dealDownload">
      下载
    </div>
    <!--画廊组件-->
    <transition name="fade">
      <div class="qq-read-wall" v-show="imageWallFlag" ref="readWall">
        <ul class="wall-list" ref="wallList">
          <!--<li class="wall-item" >
            <img src="../assets/images/three.png" alt="" @click.stop="toggleImageWall"
                 @touchstart="handleTouchStart($event)"
                 @touchmove="handleTouchMove($event)"
                 @touchend="handleTouchEnd()"
            >
          </li>-->
          <li class="wall-item wall-item-hook">
            <img :src="imgArr[4]" alt="" @click.stop="toggleImageWall()"
                 @touchstart="handleTouchStart($event)"
                 @touchmove="handleTouchMove($event)"
                 @touchend="handleTouchEnd()"
            >
          </li>
          <li class="wall-item wall-item-hook" v-for="(item,index) in imgArr" :key="index">
            <img :src="item" alt="" @click.stop="toggleImageWall()"
                 @touchstart="handleTouchStart($event)"
                 @touchmove="handleTouchMove($event)"
                 @touchend="handleTouchEnd()"
            >
          </li>
          <li class="wall-item wall-item-hook">
            <img :src="imgArr[0]" alt="" @click.stop="toggleImageWall()"
                 @touchstart="handleTouchStart($event)"
                 @touchmove="handleTouchMove($event)"
                 @touchend="handleTouchEnd()"
            >
          </li>
        </ul>
        <ul class="wall-dot-list">
          <li class="dot-item dot-item-hook" v-for="(item,index) of imgArr" :key="index"></li>
        </ul>
      </div>
    </transition>
    <!--画廊组件-->
    <!--微信指引-->
    <div v-show="popupVisible" class='guide_popup' @click="popupVisible=!popupVisible">
      <img src="../assets/images/guide.png" alt="">
    </div>
    <!--微信指引-->
  </div>
</template>

<script>
  import jbStar from "./components/star"
  import jbProgress from "./components/progress"
  import BScroll from 'better-scroll'

  export default {
    name: 'Home',
    data() {
      return {
        title: "QQ阅读",//标题
        description: "新手会员好礼",//描述
        tagArr: ["小说", "电子书"],
        score: 4.5,
        rateArr: [82, 5, 4, 3, 6],//对应星的百分比,从5星到1星
        size: 23.6,//应用大小
        times: 8940,//下载次数
        imgArr: ["../../static/images/one.png", "../../static/images/two.png", "../../static/images/three.png", "../../static/images/four.png", "../../static/images/five.png"],//5张图片的路径
        /*imgArr:["../assets/images/one.png","../assets/images/two.png","../assets/images/three.png","../assets/images/four.png","../assets/images/five.png"],//5张图片的路径*/
        currentIndex: 0,//画廊当前展示第几张图片
        dotIndex: 0,//当前展示第几个圆点
        startX: 0,//滑动的起始位置
        moveX: 0,//滑动图片的水平距离
        maxDistance: 50,//滑动的距离大于这个则切换图片
        wallLiWidth: "",//画廊li的宽度，用来计算设置外面ul的宽度
        translateX: "",//记录ul原本走了多少
        scroll: {},
        scrollImgWall: {},
        liArr: [],
        liWidth: 100,
        version: "v6.6.6.888",
        date: "2018-08-30",
        flagIcon: true,//标识旋转
        popupVisible: false,//微信指引
        imageWallFlag: false//画廊组件
      }
    },
    methods: {
      toggleFold() {//箭头旋转
        if (this.flagIcon) {
          this.$refs.descIcon.style.transform = "rotate(180deg)";
          this.$refs.applyText.style.height = "43rem";
        } else {
          this.$refs.descIcon.style.transform = "rotate(0deg)";
          this.$refs.applyText.style.height = "3rem";
        }
        this.flagIcon = !this.flagIcon;
        //this.$refs.descDetail.style.height="0";
        // this.scroll.refresh();
        setTimeout(() => {
          this.scroll.refresh();
        }, 600);
        /* this.$nextTick(()=>{
           this.scroll.refresh();
         });*/
      },
      dealDownload() {
        MtaH5.clickStat("clicking_download");
        _paq.push(["trackEvent", "点击下载按钮", "点击下载按钮跟踪"]);
        if (/micromessenger/.test(window.navigator.userAgent.toLowerCase())) {
          //若是微信则指引
          this.popupVisible = true;
        } else {
          window.location.href = "http://misc.wcd.qq.com/app?packageName=com.qq.reader&channelId=10031942";
        }
      },
      toggleImageWall(index) {
        //展示画廊组件
        this.imageWallFlag = !this.imageWallFlag;
        if (index >= 0) {
          this.currentIndex = index;
          this.dotIndex = index;
          /*this.translateX=this.wallLiWidth*this.imgArr.length;
          this.$refs.wallList.style.width=this.translateX+"px";*/
          //this.translateX=this.wallLiWidth*(this.currentIndex+1);
          this.$refs.wallList.style.width = this.wallLiWidth * (this.imgArr.length + 2) + "px";//设置wallList的长度
          this.setWallList();//设置当前画廊组件显示第几张图片
        } else {
          //this.$refs.wallList.style.transition="none";
        }
      },
      handleTouchStart(event) {
        this.starX = event.touches[0].clientX;
      },
      handleTouchMove(event) {
        this.moveX = event.touches[0].clientX - this.starX;
        this.moveWallList();
      },
      handleTouchEnd() {
        if (Math.abs(this.moveX) >= this.maxDistance) {
          //切换图片
          if (this.moveX > 0) {
            this.currentIndex--;
            this.dotIndex--;
          } else {
            this.currentIndex++;
            this.dotIndex++;
          }
        }
        this.$refs.wallList.style.transition = "all 1s";
        this.setWallList();
        this.moveX = 0;//滑动事件结束后需要置为0
        setTimeout(() => {
          this.$refs.wallList.style.transition = "none";//切换画面结束后，需要关闭渐变效果
          if (this.currentIndex < 0) {
            this.currentIndex = this.imgArr.length - 1;
            this.setWallList();//无缝切换
          } else if(this.currentIndex>this.imgArr.length-1){
            this.currentIndex = 0;
            this.setWallList();//无缝切换
          }
        }, 1300);
      },
      setWallList() {//wallList最终的位置
        //var tanslateX=this.currentIndex*this.wallLiWidth;
        var liDotArr = document.querySelectorAll(".dot-item-hook");
        for (var i = 0; i < liDotArr.length; i++) {
          liDotArr[i].className = "dot-item dot-item-hook";
        }
        if (this.currentIndex < 0) {
          this.dotIndex = this.imgArr.length - 1;
        } else if(this.currentIndex>this.imgArr.length-1){
          this.dotIndex = 0;
        }
        liDotArr[this.dotIndex].className = "dot-item dot-item-hook actived";
        liDotArr[this.dotIndex].className = "dot-item dot-item-hook actived";
        this.translateX = this.wallLiWidth * (this.currentIndex + 1);
        this.$refs.wallList.style.transform = "translateX(-" + this.translateX + "px)";
      },
      moveWallList() {//touchmove事件移动ul
        this.$refs.wallList.style.transform = "translateX(" + (-this.translateX + this.moveX) + "px)";
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.scroll = new BScroll(this.$refs.wrapper, {
            click: true
          });
        }, 300);
        //横向滑动
        this.liArr = document.querySelectorAll(".pic-item");
        this.liWidth = this.liArr[0].offsetWidth;
        this.$refs.picList.style.width = this.liWidth * (this.liArr.length) + 25 + "px";
        this.scrollImgWall = new BScroll(this.$refs.imgWall, {
          scrollX: true,
          eventPassthrough: 'vertical'

        });
        this.wallLiWidth = document.documentElement.clientWidth;
        //this.wallLiWidth = document.documentElement.clientWidth + 10;
      });
    },
    watch: {
     /* currentIndex(curVal, oldVal) {
        //console.log(curVal);
        var len = this.imgArr.length - 1;
        console.log(this.dotIndex);
        if (curVal < 0) {
          // this.currentIndex=len;
          this.dotIndex = len;
          console.log(this.dotIndex);
        } else if (curVal > len) {
          //this.currentIndex=0;
          this.dotIndex = 0;
        }
      }*/
    },
    components: {
      jbStar,
      jbProgress
    }
  }
</script>
<style lang="stylus" scoped>
  .wrapper
    position absolute
    left 0
    top 0
    /*bottom 3rem*/
    bottom 0
    width 100%
    /*border: 1px solid #000*/
    box-sizing border-box
    padding 0 10px
    overflow hidden
    .content
      /*height 2000px*/
      .header
        text-align center
        font-size 0
        margin-top 1rem
        img
          width 5rem
        p
          font-size 1rem
          /*margin-top .5rem*/
          font-size 1rem
          color #28292E
        .header-icon
          margin-top .2rem
          .icon
            display inline-block
            font-size .8rem
            margin-right 1rem
            i
              display inline-block
              width 1rem
              height 1rem
              line-height 1rem
              text-align center
              font-size .8rem
              color #ffffff
              margin-right .3rem
          .official
            color #22C9AF
            .icon-official
              border-radius .5rem
              background-color #22C9AF
          .non-poisonous
            color #3684F0
            .icon-poisonous
              color #ffffff
              height 1.2rem
              line-height 1.2rem
              background-image url("../assets/images/poisonous.png")
              background-size 100% 100%
              background-repeat no-repeat
      .title
        font-size .9rem
        text-align center
        margin-top .5rem
        i
          font-size .5rem
          color #CCCCCC
          display inline-block
          vertical-align top
          &.quota-left
            margin-right .3rem
          &.quota-right
            margin-left .3rem
      .situation
        display flex
        margin-top 1rem
        .average
          flex 1
          .con
            width 3.6rem
            height 3.6rem
            border-radius 1.8rem
            text-align center
            font-weight 700
            color #ffffff
            margin 0 auto
            font-size .8rem
            position relative
            box-sizing border-box
            .unit-wrapper
              display flex
              align-items center
              justify-content center
              width 1.8rem
              height 1.8rem
              line-height 1.8rem
              border-radius .9rem
              box-sizing border-box
              background-color #ffffff
              position absolute
              right -.8rem
              bottom -.2rem
              span
                display inline-block
                width 1.5rem
                height 1.5rem
                line-height 1.5rem
                border-radius .75rem
                box-sizing border-box
                font-size .4rem
                text-align center
                font-weight 200
                &.size-mb
                  background-color #F9AF28
                &.times-w
                  background-color #FF6471
            &.score
              background-color #24C8AF
              /*padding-top .4rem*/
              display flex
              align-items center
              justify-content center
              .star-wrapper
                display inline-block
                font-size 0
                span
                  font-size 1rem
            &.size
              line-height 3.6rem
              background-color #F9AF28
            &.times
              line-height 3.6rem
              background-color #FF6471
          p
            text-align center
            font-size .8rem
            margin-top .3rem
      .img-wall
        width 100%
        overflow hidden
        white-space nowrap
        margin-top 10px
        .pic-list
          font-size 0
          .pic-item
            display inline-block
            margin-right 6px
            width 9rem
            img
              width 100%
      .news-tag
        padding .6rem 0 .9rem
        text-align center
        font-size 0
        &:before
          border-color #e3e3e3
        span
          color #ffffff
          display inline-block
          padding .3rem .6rem
          font-size .9rem
          border-radius 3px
          &.tag-read
            background-color #2BD9BF
            margin-right 1.5rem
          &.tag-advise
            background-color #FDA894
      .apply-desc
        color #9FA0A4
        font-size .8rem
        padding-bottom .8rem
        &:before
          border-color #e3e3e3
        h1
          font-size .9rem
          padding .5rem 1.6rem
          position relative
          color #000000
          box-sizing border-box
          span
            display inline-block
            width 1rem
            height 1rem
            background-repeat no-repeat
            background-size 100% 100%
            background-image url("../assets/images/desc.png")
            position absolute
            left 0
            top 50%
            margin-top -.5rem
          i
            display inline-block
            font-size .8rem
            width 1.4rem
            height 1.4rem
            line-height 1.4rem
            text-align center
            color #868686
            position absolute
            right .2rem
            top 50%
            margin-top -.7rem
            transition all .5s
        .apply-text
          font-size .8rem
          transition: all .5s
          overflow hidden
          line-height 1rem
          height 3rem
          .detail-refresh
            h1
              font-size .9rem
              padding .5rem 1.6rem
              position relative
              color #000000
              box-sizing border-box
              span
                display inline-block
                width 1rem
                height 1rem
                background-repeat no-repeat
                background-size 100% 100%
                background-image url("../assets/images/refresh.png")
                position absolute
                left 0
                top 50%
                margin-top -.5rem
        .related-msg
          margin-top .5rem
          .version
            margin-right 5px
      .news-comment
        h1
          font-size .9rem
          padding .5rem 1.6rem
          position relative
          span
            display inline-block
            width 1rem
            height 1rem
            position absolute
            left 0
            top 50%
            margin-top -.5rem
            background-repeat no-repeat
            background-size 100% 100%
            background-image url("../assets/images/grade.png")
        .grade-wrapper
          display flex
          margin-top .3rem
          .star-content
            width 7rem
            box-sizing border-box
            h1
              font-size 2.5rem
              color #535353
              text-align center
            .star
              text-align center
          .progress-content
            flex 1

  .download
    line-height 2.2rem
    width 5.6rem
    text-align center
    position fixed
    left 50%
    margin-left -2.8rem
    bottom 1.1rem
    font-size .9rem
    background-color #24C8AF
    color #fff
    font-weight 700
    border-radius 20px

  .qq-read-wall
    position fixed
    left 0
    bottom 0
    top 0
    width 100%
    overflow hidden
    .wall-list
      height 100%
      background-color rgba(0, 0, 0, .8)
      .wall-item
        /*width 360px*/
        width 14.28571428%
        height 100%
        float left
        overflow hidden
        /*margin-right 10px*/
        img
          width 100%
          height 100%
    .wall-dot-list
      position absolute
      left 50%
      bottom 10px
      width 60px
      margin-left -30px
      .dot-item
        float left
        width 5px
        height 5px
        background-color #ffffff
        border-radius 50%
        margin-right 5px
        &.actived
          background-color green

  .fade-enter, .fade-leave-to
    opacity 0

  .fade-enter-active, .fade-leave-active
    transition all 1s

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
