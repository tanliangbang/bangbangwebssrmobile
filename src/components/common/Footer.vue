<template>
  <div class="footer">
    <p v-if="!$store.state.common.isMobile">
      关于本站:&nbsp;作者版权所有：谭亮邦&nbsp;QQ:648103576&nbsp;程序员技术文章网站&nbsp;湘ICP备18004544号&nbsp;©2018-2017
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43022402000021"><img src="../../../static/img/beian.png"  />湘公网安备 43022402000021号</a>

    </p>
    <p v-if="$store.state.common.isMobile">
     关于本站:&nbsp;作者版权所有：谭亮邦&nbsp;QQ:648103576&nbsp;程序员技术文章网站&nbsp;湘ICP备18004544号&nbsp;©2018-2017
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43022402000021"><img src="../../../static/img/beian.png" />湘公网安备 43022402000021号</a>

    </p>
    <div style="width:300px;margin:0 auto; padding-top:10px;">
    </div>
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
    padding:10px 0px;
    >p{
      color:#fff;
      line-height:20px;
    }
    a{
      color:#fff;
    }
  }
  @media screen and (max-width: 1000px) {
    .footer{
       font-size:12px;
    }
  }
</style>
