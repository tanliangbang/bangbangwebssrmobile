<template>
  <div class="support">
    <div class="container">
        <div class="supportWay">
          <header>
            <h1>赞助本站</h1>
          </header>
          <h2>如果您喜欢本站，感觉本站内容对您有帮助，不妨动动您的金手指给予小额赞助，予人玫瑰，手有余香，不胜感激。</h2>
        </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

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
    },
    data () {
      return {}
    },
    mounted () {
      window.scroll(0, 0)
    },
    computed: {
      ...mapGetters({
      })
    },
    methods: {
    },
    asyncData({ store }) {
      // return store.dispatch('getResContentList', {type: 'production', currpage: 1, size: 5})
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
  }
  .support{
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

  }
</style>
