<template>
  <div class="right-list1">
    <div class="rightTitle">{{title}}</div>
      <ul>
        <li v-if="rightList!==null" v-for="(item) in rightList" :key="item.id" class="right-list1-item">
          <router-link target="_blank" :to="{ path: '/resContent',query: { id: item.id, type: type }}" :title="item.content.title">
            <span>
              <img  v-if="item.content.titleImg" :src="item.content.titleImg" :alt="item.content.title">
              <img v-if="!item.content.titleImg" src="/static/img/user.jpg" :alt="item.content.title">
            </span>
            <span>{{item.content.title}}</span>
            <span>{{formatDate(item.createTime)}}</span><span>3评论</span>
          </router-link>
        </li>
     </ul>
  </div>
</template>

<script>
import Tool from '../../utils/Tool'
export default {
  name: 'RightList',
  props: ['rightList', 'title', 'type'],
  data () {
    return {}
  },
  methods: {
    formatDate (date) {
      return Tool.formatDate2(date, '-')
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../style/common.less";
  .right-list1{
    padding:10px;
    margin-bottom:20px;
    background:#fff;
    ul{
      padding: 0 0px 20px;
      li{
        line-height:20px;
        a{
          padding: 5px 0px 15px 90px;
          border-bottom:1px dashed @borderColor;
          overflow: hidden;
          position: relative;
          display: block;
          font-size: 14px;
          color:@mainColor;
          >span:nth-child(1){
            float: left;
            margin-left: -90px;
            margin-top: 10px;
            margin-right: 10px;
            img{
              width: 100px;
              height: 64px;
              display: block;
              margin: 0 auto;
            }
          }
          >span:nth-child(2){
            margin: 5px 0px 0px 0px;
            display: block;
            max-height: 50px;
            overflow: hidden;
            line-height: 24px;
          }
          >span:nth-child(3){
            color:@gray-color;
          }
          >span:nth-child(4){
            float:right;
            color:@gray-color;
          }
        }
      }
    }
  }
</style>
