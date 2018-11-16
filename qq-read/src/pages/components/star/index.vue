<template>
  <div class="star" :class="starType">
    <span v-for="(itemClass,index) in itemClassArr" :key="index" :class="itemClass" class="star-item"></span>
  </div>
</template>

<script>
  const LENGTH = 5;
  const CLS_ON = "on";
  const CLS_HALF = "half";
  const CLS_OFF = "off";
  export default {
    name: "jb-star",
    props: {
      score: {//分数
        type: Number,
        default: 5
      },
      size:{//控制星星大小
        type :Number,
        default:20
      }
    },
    computed: {
      itemClassArr() {
        var result=[];
        var hasDecimal=this.score%1 == 0 ? false:true;//是否有半星
        var integer=Math.floor(this.score);// 向下取整，有多少个on五星
        for(var i=0;i<integer;i++){
           result.push(CLS_ON);
        }
        if (hasDecimal) {
          result.push(CLS_HALF);
        }
        while(result.length<LENGTH){
          result.push(CLS_OFF);
        }
        return result;
      },
      starType(){
        return "star-"+this.size;
      }
    }
  }
</script>

<style lang="stylus" scoped>
.star
  display inline-block
  &.star-20
    .star-item
      display inline-block
      width 0.8rem
      height 0.8rem
      background-repeat no-repeat
      background-size contain
      margin-right .2rem
      &.on
        background-image url("./images/star20_on.png")
      &.half
        background-image url("./images/star20_half.png")
      &.off
        background-image url("./images/star20_off.png")
  &.star-22
    background-color #24C8AF
    .star-item
      display inline-block
      width 0.4rem
      height 0.4rem
      background-repeat no-repeat
      background-size contain
      margin-right .05rem
      &.on
        background-image url("./images/star22_on.png")
      &.half
        background-image url("./images/star22_half.png")
      &.off
        background-image url("./images/star22_off.png")
</style>
