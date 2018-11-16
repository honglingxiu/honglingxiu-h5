<template>
  <div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="header">
          <img src="../assets/images/icon.png" alt="">
          <p>{{title}}</p>
          <div class="header-icon">
            <span class="icon official"><i class="icon-official iconfont icon-dagou"></i>官方</span><span class="icon non-poisonous"><i class="icon-poisonous iconfont icon-iconjia"></i>无病毒</span>
          </div>
        </div>
        <div class="title"><i class="quota-left iconfont icon-shuangyinhao"></i>{{description}}<i class="quota-right iconfont icon-shuangyinhao-copy"></i></div>
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
          <div class="con size">{{size}}<div class="unit-wrapper"><span class="size-mb">MB</span></div></div>
          <p>应用大小</p>
          </div>
          <div class="average">
          <div class="con times">{{times}}<div class="unit-wrapper"><span class="times-w">万</span></div></div>
          <p>下载次数</p>
          </div>
        </div>
        <div class="img-wall" ref="imgWall">
          <ul class="pic-list" ref="picList">
            <li class="pic-item pic-item-hook">
              <img src="../assets/images/one.png" alt="">
            </li>
            <li class="pic-item">
              <img src="../assets/images/two.png" alt="">
            </li>
            <li class="pic-item">
              <img src="../assets/images/three.png" alt="">
            </li>
            <li class="pic-item">
              <img src="../assets/images/four.png" alt="">
            </li>
            <li class="pic-item">
              <img src="../assets/images/five.png" alt="">
            </li>
          </ul>
        </div>
        <div class="news-tag border-bottom">
          <span class="tag-read">{{tagArr[0]}}</span>
          <span class="tag-advise">{{tagArr[1]}}</span>
        </div>
        <div class="apply-desc border-bottom">
          <h1><span></span>应用介绍<i class="iconfont icon-right" ref="descIcon" @click="toggleFold"></i></h1>
          <div>
            <p>【新手福利】</p>
            <p>首次使用APP，全场书籍免费读10天；</p>
            <p>使用第1-20天，每读1分钟即可兑换1书券，书券可用<span v-if="!flagIcon">于购买全场任意书籍；</span> </p>
            <p v-if="!flagIcon">使用第11天，根据阅读历史为你献上免费个性书库，精准推荐，包你喜欢！同时可开启高达20本在读书的隐藏福利，免费期延长10天；</p>
            <p v-if="!flagIcon">使用第31天，可选择1份神秘大神赠礼，包含一本大神书籍和专属大神签名。</p>
          </div>
          <transition name="fade">
            <div class="desc-detail" ref="descDetail" v-if="!flagIcon">
              <div class="detail-special">
                <p>【热门影视原著】</p>
                <p>《斗破苍穹》：吴磊、林允领衔主演，9月3日起登陆湖南卫视、腾讯视频，且看萧炎如何不惧万难，携手萧薰儿，挑战恶势力，驰骋斗气世界！ </p>
                <p>《武动乾坤》：杨洋、张天爱领衔主演，优酷、东方卫视火热播出中，精彩原著抢先看 </p>
                <p>《后宫如懿传》：周迅、霍建华主演电视剧原著，诠释帝王夫妻的婚姻围城。 </p>
                <p>《凰权》：陈坤、倪妮领衔主演，《天盛长歌》经典原著，乱世风云诡谲，家国天下是非！</p>
              </div>
              <div class="detail-feedback">
                <p>【经典网文】</p>
                <p>江南全新作品《龙族V：悼亡者的归来》独家连载中，江南全系列作品电子版独家上架！  </p>
              </div>
              <div class="detail-feedback">
                <p>【漫画上线】</p>
                <p>领百元大券看漫画，新手礼、每日礼、好书礼，惊喜送不停。有问题找组织，QQ阅读漫画书友群748903129 </p>
              </div>
              <div class="detail-explain">
                <p>【听书专区】</p>
                <p>《鬼吹灯》《斗破苍穹》《全职高手》《诛仙》《芈月传》等经典好文，有声阅读，解放双眼</p>
                <p>【云书架】书籍、阅读进度、笔记，关联帐号，自动云同步；</p>
                <p>【个性推荐】精选信息流推荐理由告诉你，私人定制不忽悠；</p>
                <p>【名家齐聚】大神携名作汇聚名人堂，快来找找你心水的作家！</p>
                <p>【实惠签到】每日签到领好礼，签满7天，周日还能抽大奖！</p>
                <p>【红包广场】红包功能上线，书币抢不停，看书更任性~</p>
              </div>
              <div class="detail-refresh">
                <h1><span></span>更新说明：</h1>
                <p>1、包月改版，更多精彩内容，加量不加价！ </p>
                <p>2、其他细节优化</p>
              </div>
            </div>
          </transition>
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
    <div v-show="popupVisible" class='guide_popup' @click="popupVisible=!popupVisible">
      <img src="../assets/images/guide.png" alt="">
    </div>
  </div>
</template>

<script>
import jbStar from "./components/star"
import jbProgress from "./components/progress"
import BScroll from 'better-scroll'
export default {
  name: 'Home',
  data () {
    return {
      title:"QQ阅读",//标题
      description:"新手会员好礼",//描述
      tagArr:["小说","电子书"],
      score:4.5,
      rateArr:[82,5,4,3,6],//对应星的百分比,从5星到1星
      size:23.6,//应用大小
      times:8940,//下载次数
      scroll:{},
      scrollImgWall:{},
      liArr:[],
      liWidth:100,
      version:"v6.6.6.888",
      date:"2018-08-30",
      flagIcon:true,//标识旋转
      popupVisible:false//微信指引
    }
  },
  methods:{
    toggleFold(){//箭头旋转
      if(this.flagIcon){
        this.$refs.descIcon.style.transform="rotate(180deg)";
      }else {
        this.$refs.descIcon.style.transform="rotate(0deg)";
      }
      this.flagIcon=!this.flagIcon;
      //this.$refs.descDetail.style.height="0";
      this.scroll.refresh();
    },
    dealDownload(){
      MtaH5.clickStat("clicking_download");
      _paq.push(["trackEvent", "点击下载按钮", "点击下载按钮跟踪"]);
      if (/micromessenger/.test(window.navigator.userAgent.toLowerCase())) {
        //若是微信则指引
        this.popupVisible=true;
      }else {
       // window.location.href="http://misc.wcd.qq.com/app?packageName=com.qq.reader&channelId=10031941";
        window.location.href="https://jmyunyingapp.lipush.com/yunying/app/10031941.apk";
      }
    }
  },
  mounted(){
    this.$nextTick(()=>{
      setTimeout(()=>{
        this.scroll = new BScroll(this.$refs.wrapper,{
          click:true
        });
      },300);
      //横向滑动
      this.liArr=document.querySelectorAll(".pic-item");
      this.liWidth=this.liArr[0].offsetWidth;
      this.$refs.picList.style.width=this.liWidth*(this.liArr.length)+25+"px";
      this.scrollImgWall = new BScroll(this.$refs.imgWall,{
        scrollX :true,
        eventPassthrough :'vertical'

      });
    });
  },
  components:{
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
      /*.text
        line-height 1.2rem*/
      .fade-leave-active,.fade-enter-active
        transition all 1s
      .fade-enter,.fade-leave-to
        height   0
      .desc-detail
        /*border: 1px solid #000*/
        overflow hidden
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
