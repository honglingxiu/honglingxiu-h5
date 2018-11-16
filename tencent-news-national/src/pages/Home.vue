<template>
  <div>
    <div class="wrapper">
      <img class="header" src="../assets/images/1.jpg" alt="">
      <div class="title border-bottom">
        新个税法通过 起征点每月5000元
      </div>
      <div class="con-icons">
        <a href="#" class="icon" @click="dealDownload('others')">
          <div class="icon-wrapper">
            <img src="../assets/images/1.png" alt="">
          </div>
          <p>个税计算器</p>
        </a>
        <a href="#" class="icon" @click="dealDownload('others')">
          <div class="icon-wrapper">
            <img src="../assets/images/2.png" alt="">
          </div>
          <p>一图读懂</p>
        </a>
        <a href="#" class="icon" @click="dealDownload('others')">
          <div class="icon-wrapper">
            <img src="../assets/images/3.png" alt="">
          </div>
          <p>你想说点啥</p>
        </a>
      </div>
      <div class="con-point border-bottom">
        <span>1</span>
        <span class="border"></span>
        <span>4</span>
        <span>重点关注</span>
      </div>
      <ul class="list">
        <li @click="dealDownload('others')">
          <div class="con-left">
            <p>
              权威解读最新出炉！过渡期个税该这么缴
            </p>
            <div class="from">国税总局</div>
          </div>
          <div class="con-right">
            <img src="../assets/images/2.jpg" alt="">
          </div>
        </li>
        <li @click="dealDownload('others')">
          <div class="con-left">
            <p>
              房贷利息抵个税重大信号：非普通住房或排除在外
            </p>
            <div class="from">第一财经</div>
          </div>
          <div class="con-right">
            <img src="../assets/images/3.jpg" alt="">
          </div>
        </li>
        <li @click="dealDownload('others')">
          <div class="con-left">
            <p>
              个税房贷利息抵扣酝酿细则 专家称将刺激刚需入场
            </p>
            <div class="from">证券日报</div>
          </div>
          <div class="con-right">
            <img src="../assets/images/4.jpg" alt="">
          </div>
        </li>
      </ul>
      <div class="fold" @click="dealDownload('others')">展开更多<img src="../assets/images/4.png"/></div>
      <div class="con-point border-bottom">
        <span>2</span>
        <span class="border"></span>
        <span>4</span>
        <span>新增反避税条款</span>
      </div>
      <ul class="list">
        <li @click="dealDownload('others')" class="border-bottom">
          <div class="con-left">
            <p>
              个税改革、研究降低社保费率 税务总局最新通知谈了这些
            </p>
            <div class="from">每日经济新闻</div>
          </div>
          <div class="con-right">
            <img src="../assets/images/5.jpg" alt="">
          </div>
        </li>
        <li @click="dealDownload('others')" class="border-bottom">
          <div class="con-left">
            <p>
              十月工资到手，你少交了多少个税
            </p>
            <div class="from">话题</div>
          </div>
          <div class="con-right">
            <img src="../assets/images/6.jpg" alt="">
          </div>
        </li>
        <li @click="dealDownload('others')" class="border-bottom">
          <div class="con-left">
            <p>
              新个税法设“反避税”条款 加强高收入者个税征管
            </p>
            <div class="from">证券日报</div>
          </div>
          <div class="con-right">
            <img src="../assets/images/7.jpg" alt="">
          </div>
        </li>
      </ul>
      <div class="fold" @click="dealDownload('others')">展开更多<img src="../assets/images/4.png"/></div>
      <div class="con-point border-bottom">
        <span>3</span>
        <span class="border"></span>
        <span>4</span>
        <span>对你有何影响</span>
      </div>
      <ul class="list">
        <li @click="dealDownload('others')" class="border-bottom">
          <div class="con-left">
            <p>
              个税改革与社保从严征管如何影响个人与企业？
            </p>
            <div class="from">人民网</div>
          </div>
          <div class="con-right">
            <img src="../assets/images/8.jpg" alt="">
          </div>
        </li>
        <li @click="dealDownload('others')" class="border-bottom">
          <div class="con-left">
            <p>
              渣打：税改利好低收入群体 月薪14000元内税负减轻70%
            </p>
            <div class="from">陆家嘴杂志</div>
          </div>
          <div class="con-right">
            <img src="../assets/images/9.jpg" alt="">
          </div>
        </li>
        <li @click="dealDownload('others')">
          <div class="con-left">
            <p>
              房贷利息抵个税倒计时，这波“红利”你能享受多少？
            </p>
            <div class="from">时代财经</div>
          </div>
          <div class="con-right">
            <img src="../assets/images/10.jpg" alt="">
          </div>
        </li>
      </ul>
      <div class="fold" @click="dealDownload('others')">展开更多<img src="../assets/images/4.png"/></div>
      <div class="con-point border-bottom">
        <span>4</span>
        <span class="border"></span>
        <span>4</span>
        <span>各方观点</span>
      </div>
      <ul class="list">
        <li @click="dealDownload('others')">
          <div class="con-left">
            <p>
              宗庆后表示“不收工薪阶层个税，消费才拉的起来”，你同意吗？
            </p>
            <div class="from">江瀚的视野</div>
          </div>
          <div class="con-right">
            <img src="../assets/images/11.jpg" alt="">
          </div>
        </li>
        <li @click="dealDownload('others')">
          <div class="con-left">
            <p>
              灼见 | 张巍：从世界个税起源发展现状看中国个税改革前景
            </p>
            <div class="from">腾讯财经</div>
          </div>
          <div class="con-right">
            <img src="../assets/images/12.jpg" alt="">
          </div>
        </li>
        <li @click="dealDownload('others')">
          <div class="con-left">
            <p>
              蒋震：个税改革不是简单地提高免征额 未来改革仍待优化
            </p>
            <div class="from">腾讯财经</div>
          </div>
          <div class="con-right">
            <img src="../assets/images/13.jpg" alt="">
          </div>
        </li>
      </ul>
      <div class="fold" @click="dealDownload('others')">展开更多<img src="../assets/images/4.png"/></div>
    </div>
    <div class="download" @click="dealDownload('click')">
      下载腾讯新闻，查看专题详情<img src="../assets/images/arrow.png"/>
    </div>
    <div class="blank"></div>
    <div v-show="popupVisible" class='guide_popup' @click="popupVisible=!popupVisible">
      <img src="../assets/images/guide.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        popupVisible: false//微信指引
      }
    },
    methods: {
      dealDownload(flag) {
        if (flag=="click") {
          MtaH5.clickStat("click_download");
          _paq.push(["trackEvent", "立即下载按钮", "点击下载按钮跟踪"]);
        }else {
          MtaH5.clickStat("click_others");
          _paq.push(["trackEvent", "其他链接", "其他链接点击跟踪"]);
        }
        if (/micromessenger/.test(window.navigator.userAgent.toLowerCase())) {
          //若是微信则指引
          this.popupVisible = true;
        } else {
          window.location.href = "https://jmyunyingapp.lipush.com/yunying/app/TencentNews_304_v5.6.70.apk";
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .wrapper
    .header
      width 100%
      display block
    .title
      text-indent 1rem
      line-height 3.2rem
      &:before
        border-color rgba(3,3,3,.4)
    .con-icons
      display flex
      height 5.6rem
      .icon
        flex 1
        /*border: 1px solid #000*/
        text-align center
        padding 20px
        .icon-wrapper
          img
            width 36%
        p
          font-size .8rem
    .con-point
      line-height 2.666rem
      padding-left 10px
      font-size .9rem
      span
        font-weight 700
      .border
        display inline-block
        width .11rem
        height .6rem
        background-color #000
      &:before
        border-color rgba(3,3,3,.4)
    .list
      padding 0px 10px
      li
        height 6.5rem
        /*border: 1px solid #000*/
        display flex
        padding-top 10px
        &:before
          border-color rgba(3,3,3,.4)
        .con-left
          /*width 12.5rem*/
          flex 1
          /*border: 1px solid #000*/
          padding-right 15px
          position relative
          p
            color #222
            font-size 1rem
            line-height 1.4rem
          .from
            font-size .5rem
            color #899097
            /*margin-top 10px*/
            position absolute
            left 0
            bottom .8rem
        .con-right
          /*flex 1*/
          width 6.111rem
          /*border: 1px solid #000*/
          img
            width 100%
            height 4.5rem
            border-radius .1rem
    .fold
      text-align center
      color #111
      font-size .75rem
      display flex
      justify-content center
      align-items center
      padding 20px 0
      img
        /*float left*/
        width .75rem
        height  .75rem
        margin-left 8px
  .blank
    height 3rem
  .download
    display flex
    justify-content center
    align-items center
    position fixed
    left 50%
    margin-left -45%
    width 90%
    height 3rem
    /*margin-left -2.8rem*/
    bottom 1.1rem
    font-size .9rem
    background-color #2B61C1
    color #fff
    font-weight 700
    border-radius 50px
    box-shadow 2px 5px 10px rgba(0,0,0,.6)
    img
      margin-left 5px
      width .7rem
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
