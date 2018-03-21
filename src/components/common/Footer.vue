<template>
  <div class="footer">
    <p v-if="!$store.state.common.isMobile">
      关于本站:&nbsp;作者版权所有：谭亮邦&nbsp;QQ:648103576&nbsp;程序员技术文章网站&nbsp;湘ICP备18004544号-1&nbsp;©2018-2017
    </p>
    <p v-if="$store.state.common.isMobile">关于本站:&nbsp;作者版权所有：谭亮邦&nbsp;QQ:648103576&nbsp;程序员技术文章网站&nbsp;湘ICP备18004544号-1&nbsp;©2018-2017 </p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  @import "../../style/common.less";
  .footer{
    width:100%;
    background:#333;
    text-align: center;
    clear:both;
    padding:10px 20px;
    >p{
      color:#fff;
      line-height:20px;
    }
  }
  @media screen and (max-width: 1000px) {
    .footer{
       font-size:12px;
    }
  }
</style>
