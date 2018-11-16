<template>
  <div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="header">
          <img src="../assets/images/icon.png" alt="">
          <p>腾讯视频</p>
          <div>
            <span class="icon official"><i class="icon-official iconfont icon-dagou"></i>官方</span><span class="icon non-poisonous"><i class="icon-poisonous iconfont icon-iconjia"></i>无毒</span>
          </div>
        </div>
        <div class="title"><i class="quota-left iconfont icon-shuangyinhao"></i>三国机密全网独播<i class="quota-right iconfont icon-shuangyinhao-copy"></i></div>
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
          <div class="con times">{{Number(times).toFixed(1)}}<div class="unit-wrapper"><span class="times-w">亿</span></div></div>
          <p>下载次数</p>
          </div>
        </div>
        <div class="img-wall" ref="imgWall">
          <ul class="pic-list" ref="picList">
            <li class="pic-item pic-item-hook">
              <img src="../assets/images/one.jpg" alt="">
            </li>
            <li class="pic-item">
              <img src="../assets/images/two.jpg" alt="">
            </li>
            <li class="pic-item">
              <img src="../assets/images/three.jpg" alt="">
            </li>
            <li class="pic-item">
              <img src="../assets/images/four.jpg" alt="">
            </li>
            <li class="pic-item">
              <img src="../assets/images/five.jpg" alt="">
            </li>
          </ul>
        </div>
        <div class="news-tag border-bottom">
          <span class="tag-read">影音播放</span>
          <span class="tag-advise">视频</span>
        </div>
        <!--<div class="apply-desc border-bottom">
          <h1><span></span>应用介绍<i class="iconfont icon-right" ref="descIcon" @click="toggleFold"></i></h1>
          <p class="text">腾讯新闻是腾讯公司为用户精心打造的一款拥有7x24小时全方位新闻报道的新闻产品，为用户提供高效、优质的资讯服务。是一款资讯全，浏览快、省流量的新闻产品。</p>
          <transition name="fade">
            <div class="desc-detail" ref="descDetail" v-if="!flagIcon">
              <div class="detail-special">
                <p>【产品特色】</p>
                <p>-新闻报道：7×24小时不间断更新，为你带来新闻现场一手资讯；重大、突发新闻推送，30秒到你手中</p>
                <p>-众多栏目：众多栏目等你来品味，《新闻哥》带你无底线趣味调侃新闻，《贵圈》带你揭秘娱乐圈不为人知的另一面</p>
                <p>-媒体订阅：精心挑选近千家优质微信媒体，订阅丰富阅读内容</p>
                <p>-个性化推荐：你用得越多，我们推荐的越准，你关心的，尽在眼前</p>
                <p>-直播：乐享五大足球联赛、NBA等国内外重大赛事直播，边看直播边聊天，更有神秘娱乐嘉宾等你来发现</p>
                <p>-评论互动：看网友辣评，聚焦新闻事发地评论，好友趣评也不错过，与亿万网友一起评论时事</p>
                <p>-使用简单、功能强大、省流量的新闻产品</p>
              </div>
              <div class="detail-feedback">
                <p>【意见反馈】</p>
                <p>- 软件反馈：设置- 意见反馈</p>
                <p>- 官方网站：http://news.qq.com/mobile/</p>
                <p>- 腾讯微博：@腾讯新闻客户端</p>
              </div>
              <div class="detail-explain">
                <p>特别说明：</p>
                <p>手机安卓系统版本低于3.0的用户，请访问官网（http://news.qq.com/mobile/）下载定制版本</p>
              </div>
              <div class="detail-refresh">
                <h1><span></span>更新说明：</h1>
                <p>1.「小视频」视觉体验优化</p>
                <p>2.「积分」玩法升级，连续签到领红包</p>
                <p>3. 还解决了其他一些体验问题，感谢用户宝宝们的反馈</p>
              </div>
            </div>
          </transition>
          <div class="related-msg">
            版本：<span class="version">{{version}}</span>
            日期：<span>{{date}}</span>
          </div>
        </div>-->
        <div class="apply-desc border-bottom">
          <h1><span></span>更新说明<i class="iconfont icon-right" ref="descIcon" @click="toggleFold"></i></h1>
          <div class="related-msg">
            版本：<span class="version">{{version}}</span>
            日期：<span>{{date}}</span>
          </div>
          <p class="text">1、《如懿传》独播，每周一至周四20点更新2集，会员始终多看6集</p>
          <p class="text">2、《明日之子》第二季进入直播阶段，九大厂牌正式<span v-if="!flagIcon">发布，选择你喜欢的选手，助力他进击最强厂牌！</span></span></p>
          <p class="text" v-if="!flagIcon">3、《夜天子》、《沙海》、《香蜜沉沉烬如霜》热播，燃爆你的暑期剧单；</p>
          <p class="text" v-if="!flagIcon">4、你的爱豆壁纸已经准备好，来doki的福利社收图吧！都是粉丝贡献的高清、动态壁纸哦~</p>
          <transition name="fade">
            <div class="desc-detail" ref="descDetail" v-if="!flagIcon">
              <div class="detail-refresh">
                <h1><span></span>应用介绍</h1>
                <p>【精彩内容，现在就要】</p>
                <p>《如懿传》：周迅霍建华演绎清宫爱恨风云</p>
                <p>《香蜜沉沉烬如霜》：杨紫邓伦守望千年之恋</p>
                <p>《超人前传：氪星》：DC宇宙新作！超人始祖逆转乱世</p>
                <p>《明日之子2》：带领冲撞正流行！李宇春、吴青峰、华晨宇、杨幂全新领跑音乐审美， 燃爆夏天。</p>
                <p>《幸福三重奏》：感受大S汪小菲、蒋勤勤陈建斌、福原爱江宏杰三对夫妻幸福生活。</p>
                <p>《中餐厅》：赵薇、舒淇、苏有朋、王俊凯、白举纲异国他乡开餐厅。</p>
                <p>《幻乐之城》：王菲携唱演人开启幻乐大秀，用演技诠释音乐魅力！</p>
                <p>《寂静之地》：年度温情惊悚片吓skr人了</p>
                <p>《魅影缝匠》：三届奥斯卡影帝刘易斯的息影之作</p>
                <p>《非凡仪式》：同步BBC首播，以惊人细节揭示全球非凡和极端的仪式。</p>
                <p>《魔道祖师》：新古风真国漫！少年魏无羡快意江湖热血而来</p>
                <p>《张杰2018未LIVE巡演北京站》：8月11日全球直播</p>
                <p>《TFBOYS五周年演唱会》：8月24日直播</p>
                <p>《小猪佩奇》：跟佩奇一起快乐生活</p>
                <p>《上班不如探班》：明日之子、乌龙院、潮音战纪片场大揭秘</p>
                <p>众多内容揽入，HBO官方授权播放平台，腾讯视频不负好时光！</p>
                <p>【意见反馈】</p>
                <p>如遇问题或者有好的建议，欢迎加入体验群反馈，安卓交流群QQ：632943108</p>
              </div>
            </div>
          </transition>
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
      score:2.4,
      rateArr:[26,5,6,6,57],//对应星的百分比,从5星到1星
      size:43.09,//应用大小
      times:6,//下载次数
      scroll:{},
      scrollImgWall:{},
      liArr:[],
      liWidth:100,
      version:"v6.2.5.17230",
      date:"2018-08-20",
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
        window.location.href="http://mcgi.v.qq.com/commdatav2?cmd=4&confid=10470&platform=aphone";
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
        margin-bottom .2rem
        font-size 1rem
        color #28292E
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
        padding .1rem .3rem
        font-size .8rem
        border-radius 3px
        &.tag-read
          background-color #2BD9BE
          margin-right 1.5rem
        &.tag-advise
          background-color #FDA894
    .apply-desc
      color #9FA0A4
      font-size .8rem
      padding-bottom .8rem
      &:before
        border-color #e3e3e3
      .related-msg
        margin-bottom .1rem
        .version
          margin-right 5px
      h1
        font-size .9rem
        padding .5rem 1.6rem
        position relative
        color #000000
        box-sizing border-box
        span
          display inline-block
          width .9rem
          height .9rem
          background-repeat no-repeat
          background-size 100% 100%
          background-image url("../assets/images/refresh.png")
          position absolute
          left 0
          top 50%
          margin-top -.45rem
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
      .text
        line-height 1.2rem
      .fade-leave-active,.fade-enter-active
        transition all .5s
      .fade-enter,.fade-leave-to
        height 0
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
              width .9rem
              height .9rem
              background-repeat no-repeat
              background-size 100% 100%
              background-image url("../assets/images/desc.png")
              position absolute
              left 0
              top 50%
              margin-top -.45rem
    .news-comment
      h1
        font-size .9rem
        padding .5rem 1.6rem
        position relative
        span
          display inline-block
          width .9rem
          height .9rem
          position absolute
          left 0
          top 50%
          margin-top -.45rem
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
