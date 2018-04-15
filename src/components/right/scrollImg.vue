<template>
  <div class="scrollImg">
    <div class="rightTitle">热门文章</div>
    <div class="content">
      <img src="http://p3gc5ydac.bkt.clouddn.com/Fp4o6jO10oWOJCNGzRmtK-RkmyVS"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ScrollImg',
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="less" scoped>
  @import "../../style/common.less";
  .scrollImg{
    background:#fff;
    margin-bottom:10px;
    padding:10px;
    color:@gray-color;
    .content{
      margin-top:10px;
       width:100%;
       max-height:180px;
       overflow: hidden;
       img{
         width:100%;
       }
    }
  }
</style>
