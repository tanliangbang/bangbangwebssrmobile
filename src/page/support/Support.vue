<template>
  <div class="support">
    <div class="container">
        <div class="supportWay">
          <header>
            <h1>赞助本站</h1>
          </header>
          <h2>如果您喜欢本站，感觉本站内容对您有帮助，不妨动动您的金手指给予小额赞助，予人玫瑰，手有余香，不胜感激。</h2>
          <div class="pay">
             <div>
               <p>支付宝扫一扫</p>
               <img src="https://file.tanliangbang.club/zfbpay.png">
             </div>
            <div>
              <p>微信扫一扫</p>
              <img src="https://file.tanliangbang.club/wxpay.png">
            </div>
          </div>

          <div class="comment">
            <Comment v-bind:topicId="0"  v-on:commentSuccess="commentSuccess"/>
            <CommentList v-bind:topicId="0" ref="commentList"/>
          </div>

        </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Comment from '../../components/comment/Comment'
  import CommentList from '../../components/comment/CommentList'
  export default {
    name: 'Support',
    title () {
      return {
        title: '赞助及留言',
        keywords: '码农集聚地,前端开发,前端社区,程序员,javascript',
        description: 'bangbang网站提供了很多前端后端及程序员开发文章包含各种html,javascript,nodejs,java,vue,react,angularjs,php等等语言、为打造优秀的程序员学习教程而努力。'
      }
    },
    components: {
      Comment,
      CommentList
    },
    data () {
      return {}
    },
    mounted () {
      window.scroll(0, 0)
    },
    computed: {
      ...mapGetters({
        recommendList: 'getRecommendList'
      })
    },
    methods: {
      commentSuccess () {
        this.$refs.commentList.initData()
      }
    },
    asyncData({ store }) {
      return store.dispatch('getRecommendList', {typeId: 0})
    }
  }
</script>

<style lang="less" scoped>
  @import "../../style/common.less";
  .support{
    .container{
      background-color:#fff;
      margin-top:10px;
    }
    padding-bottom:30px;
    header{
      padding: 10px 20px 8px;
      line-height: 24px;
      position: relative;
      border-bottom: 1px solid #eee;
      margin-bottom: 0;
      background-color: #fff;
      h1{
        color:#444;
        font-size: 21px;
        font-weight: normal;
        padding: 0;
        margin: 14px 0 0 0;
        line-height: 24px;
      }
    }
    h2{
      font-size: 18px;
      font-weight: bold;
      padding: 10px 20px 9px 10px;
      line-height: 18px;
      text-align: center;
      border-left: 4px solid #00a67c;
      background-color: #fbfbfb;
    }
    .pay{
      width:56%;
      margin-left:22%;
      display:flex;
      flex-wrap: wrap-reverse;
      margin-top:30px;
      >div{
        flex:1;
        margin-right:100px;
        p{
          text-align: center;
          font-size:16px;
          font-weight: bold;
          margin:20px 0px;
          color:@mainColor;
        }
        img{
          border:1px solid @mainColor;
          width:100%;
          min-width:200px;
        }
      }
    }
    .comment{
      margin-top:100px;
    }

  }
</style>
