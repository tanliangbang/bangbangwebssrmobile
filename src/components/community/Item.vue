<template>
  <div class="item">
    <div class="top" v-if="itemData.username">
      <img v-if="itemData.userAavar !== null" class="avatar"  :src="itemData.userAavar" />
      <img v-if="itemData.userAavar === null" class="avatar" src="/static/img/user.jpg">
      <span >{{itemData.username}}</span>
    </div>
    <p class="title" >
      <i>{{itemData.typeName}}</i>
      <router-link v-if="!$store.state.common.isMobile" target="_blank" :to="{ path: '/articleDetail',query: { id: itemData.id,}}">{{itemData.title}}</router-link>
      <router-link v-if="$store.state.common.isMobile"  :to="{ path: '/articleDetail',query: { id: itemData.id}}">{{itemData.title}}</router-link>
    </p>
    <p class="summary">{{itemData.breif}}</p>
    <div class="otherInfo">
      <span><i class="iconfont icon-time"></i>{{formatDate(itemData.createTime)}}</span>
      <span><i class="iconfont icon-ready"></i>{{itemData.ready_num}} 浏览</span>
      <span><i class="iconfont icon-comment"></i>{{itemData.comment_num}} 评论</span>
      <span><i class="iconfont icon-like" v-on:click="like(itemData.id)"></i>{{itemData.likeNum}} 喜欢</span>
    </div>
<!--
    <img class="summaryImg" v-if="itemData.imgUrl!==''&&itemData.imgUrl!==null" :src="itemData.imgUrl">
-->
  </div>
</template>

<script>
import Tool from '../../utils/Tool'
import * as api from '../../service/getData'
export default {
  name: 'list',
  props: ['itemData', 'type'],
  data () {
    return {
    }
  },
  mounted () {
  },
  created () {
  },
  methods: {
    formatDate (date) {
      return Tool.formatDate1(date)
    },
    like (id) {
      var _this = this
      api.like(id).then(function () {
        _this.itemData.likeNum = _this.itemData.likeNum + 1
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
 @import "../../style/common.less";
 @import "../../style/commonClass.less";
 .item:hover{
   box-shadow: 0px 0px 10px #999;
 }
 .item{
    background:#fff;
    position:relative;
    margin-bottom:10px;
    padding:20px;
    min-height: 120px;
   .label{
     position:absolute;
     padding:5px 10px;
     left:0px;
     top:0px;
     color:#fff;
     background:#9e5ae2;
     font-size:12px;
   }
    .avatar{
      width:20px;
      height:20px;
      border-radius: 50%;
      margin-right:5px;
      vertical-align: -5px;
    }
    .title{
      margin:10px 0 8px;
      display: inherit;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.5;
      i{
        background:#d9534f;
        color:#fff;
        font-size:12px;
        position: relative;
        padding:5px 10px;
        border-radius:3px;
        margin-right:20px;
        top:-2px;
      }
      i::after{
        top: 7px;
        right: -4px;
        border-left: 4px solid #d9534f;
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
        position: absolute;
        width: 0;
        height: 0;
        vertical-align: top;
        content: "";
      }
      a{
        color:@mainColor;
      }
    }
    .summary{
      padding-right:0px;
      font-size:14px;
      line-height:25px;
    }
    .summaryImg{
      width:100px;
      height:80px;
      position:absolute;
      right:20px;
      top:50%;
      margin-top:-40px;
    }
   .otherInfo{
     margin-top:10px;
   }
}
</style>
