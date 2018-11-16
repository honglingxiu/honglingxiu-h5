<template>
  <div class="progress">
    <ul>
      <li v-for="(item,index) in rateArr">
        <span class="text f-l">{{rateArr.length-index}}星</span>
        <div class="item item-hook">
          <div class="score" :style="'width:'+itemHeightArr[index]+'px'"></div>
        </div>
        <span class="rate f-r">{{item}}%</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "jb-progress",
    props: {
      rateArr: {
        type: Array,
        default:function () {
          return [50,50,50,50,50];
        }
      }
    },
    computed:{
      itemHeightArr(){
        var result=[];
        for (var i=0;i<this.rateArr.length;i++){
          result.push(Math.round(this.rateArr[i]*this.itemWidth/100));
        }
        return result;
      }
    },
    data(){
      return {
        itemWidth:100
      }
    },
    mounted(){
      this.$nextTick(()=>{
        var item=document.querySelector(".item-hook");
        this.itemWidth=item.offsetWidth;
      });
    }
  }
</script>

<style lang="stylus" scoped>
.progress
  box-sizing border-box
  li
    margin-bottom .5rem
    display flex
    align-items center
    .item
      flex 1
      /*margin 0 1rem*/
      position relative
      background-color #EBEBEB
      height .5rem
      .score
        position absolute
        left 0
        top 0
        background-color #24C8AF
        height 100%
    span
      display inline-block
      width 2.5rem
      /*border: 1px solid #000*/
      text-align center
      font-size .5rem
      color #999
</style>
