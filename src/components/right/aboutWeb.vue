<template>
  <div class="aboutWeb">
     <div class="rightTitle">关于本站</div>
      <div>
         本站前端采用的是vue-router、vuex、webpack、less,vue用了服务器端渲染和按需加载，后端采用的是nodejs+mysql,服务器用的是腾讯云+七牛云
      </div>
  </div>
</template>

<script>
  export default {
    name: 'ContactWay',
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
  .aboutWeb{
    background:#fff;
    margin-bottom:10px;
    padding:10px;
    color:@gray-color;
    >div:nth-child(2){
      font-size:14px;
      margin-top:5px;
      line-height:24px;
   }
  }
</style>
