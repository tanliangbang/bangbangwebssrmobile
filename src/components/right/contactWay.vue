<template>
  <div class="contactWay">
    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=648103576&site=qq&menu=yes">
      <i class="qq fa fa-qq"></i>
    </a>
    <a href="https://github.com/tanliangbang"  rel="external nofollow" title="" target="_blank" data-original-title="github">
      <i class="sinaweibo fa fa-twitter"></i>
    </a>
    <a href="mailto:648103576@qq.com" rel="external nofollow" title="" target="_blank" data-original-title="Email">
      <i class="email fa fa-envelope-o"></i>
    </a>
    <a class="weixin" v-on:mouseenter="showWX(true)" v-on:mouseleave="showWX(false)" title="微信">
      <i class="weixins fa fa-weixin"></i>
      <div :class="isShowWX?'weixin-popover':'none'">
        <i class="arrow"></i>
        <img src="https://file.tanliangbang.club/FhxcFJMJoGrOIKcUDkterTDo5CL-">
      </div>
    </a>
    <a href="http://t.qq.com/tanliangbang" rel="external nofollow" title="" target="_blank" data-original-title="腾讯微博">
        <i class="tencentweibo fa fa-tencent-weibo"></i>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'ContactWay',
    data () {
      return {
        isShowWX: false
      }
    },
    methods: {
      showWX (bool) {
        this.isShowWX = bool
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../style/common.less";
  .contactWay{
    height: 65px;
    padding: 10px 6px;
    background-color:#fff;
    margin-bottom:10px;
    >a{
      font-size:14px;
      float: left;
      width: 45px;
      height: 45px;
      text-align: center;
      margin:0px 4px;
      position: relative;
      color: #fff;
      >i{
        font-size: 2.5em;
        width: 45px;
        height: 38px;
        padding-top:7px;
        border-radius: 4px;
        box-sizing: content-box;
      }
      >i:hover{
        background: @mainColor;
      }
    }
    .weixin-popover{
      position: absolute;
      width: 200px;
      top: 58px;
      left: 50%;
      margin-left: -125px;
      height: 200px;
      z-index:10;
      background:#fff;
      padding:20px;
      border: 1px solid rgba(0,0,0,0.2);
      img{
        width:100%;
        height:100%;
      }
    }
    .weixin-popover::after{
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 15px solid rgba(0,0,0,0.2);
      position: absolute;
      width: 0;
      height: 0;
      vertical-align: top;
      content: "";
      top:-15px;
      right:100px;
    }
    .weixin-popover::before{
      border-left: 13px solid transparent;
      border-right: 13px solid transparent;
      border-bottom: 13px solid #fff;
      position: absolute;
      z-index:10;
      width: 0;
      height: 0;
      vertical-align: top;
      content: "";
      top:-13px;
      right:102px;
    }
    .sinaweibo {
      background: #f78585;
    }
    .tencentweibo {
      background: #27ccc0;
    }
    .weixins {
      background: #6fc299;
    }
    .email {
      background: #ECA3AC;
    }
    .qq {
      background: #e74c3c;
    }
    .rss {
      background: #FF7C49;
    }
  }
</style>
