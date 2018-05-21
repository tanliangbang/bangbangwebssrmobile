<template>
    <div class="container">
      <div class="catorgary">
         <ul>
           <li>
             <a :class="!typeId||typeId===null?'selected':''" v-on:click="articleListByType(null)">
               全部
             </a>
           </li>
           <li v-for="(item) in typeList">
             <a :class="item.id===typeId?'selected':''" v-on:click="articleListByType(item.id)">
               {{item.content.name}}({{item.content.sys_article_num}})
             </a>
           </li>
         </ul>
      </div>
      <div class="main-right">
          <div class="main">
            <List v-bind:articleList="articleList.content" ></List>
            <Pagination v-bind:pagination = "pagination"/>
          </div>
          <div class="right">
            <ContactWay/>
            <aboutWeb/>
            <ScrollImg/>
            <RightList   v-bind:rightList="recommendList" v-bind:type="typeId" v-bind:title="'推荐文章'"/>
          </div>
      </div>
    </div>
</template>

<script>
import Tool from '../../utils/Tool'
import List from '../../components/article/List'
import RightList from '../../components/right/rightList'
import ContactWay from '../../components/right/contactWay'
import aboutWeb from '../../components/right/aboutWeb'
import ScrollImg from '../../components/right/ScrollImg'
import Pagination from '../../plugins/pagination/Pagination'
import { mapGetters } from 'vuex'

export default {
  name: 'ResContentList',
  title () {
    return {
      title: '精选文章',
      keywords: '码农集聚地,前端开发,前端社区,程序员,javascript',
      description: 'bangbang网站提供了很多前端后端及程序员开发文章包含各种html,javascript,nodejs,java,vue,react,angularjs,php等等语言、为打造优秀的程序员学习教程而努力。'
    }
  },
  components: {
    List,
    RightList,
    Pagination,
    ContactWay,
    aboutWeb,
    ScrollImg
  },
  data () {
    return {
      type: null,
      typeId: null,
      pagination: {
        current: 1,
        pageSize: 10,
        total: 0,
        totalSize: 0,
        onShowSizeChange: this.getCurrDate,
        onChange: null
      }
    }
  },
  created () {
    this.typeId = this.$route.query.typeId ? parseInt(this.$route.query.typeId) : null
  },
  mounted () {
    window.scroll(0, 0)
    this.pagination.totalSize = this.articleList.pageTotal
  },
  computed: {
    ...mapGetters({
      typeList: 'getArticleNav',
      articleList: 'getArticleList',
      recommendList: 'getRecommendList'
    })
  },
  methods: {
    async getCurrDate (currpage) {
      this.typeId = this.$route.query.typeId ? parseInt(this.$route.query.typeId) : null
      window.scroll(0, 0)
      let param = {
        currpage: currpage,
        pageSize: this.pagination.pageSize,
        typeId: this.typeId
      }
      await this.$store.dispatch('getArticleList', param)
      await this.$store.dispatch('getRecommendList', param)
      this.pagination.totalSize = this.articleList.pageTotal
    },
    articleListByType (typeId) {
      if (typeId === null) {
        this.$router.push('/articleList')
      } else {
        this.$router.push('/articleList?typeId=' + typeId)
      }
      this.getCurrDate(1)
    },
    formatDate (date) {
      return Tool.formatDate1(date)
    },
    changeList (name) {
      this.$router.push('resContentList?type=' + name)
    },
    fetchData () {
      if (this.$route.name === 'resContentList' && parseInt(this.$route.query.type) && this.type !== null) {
        this.getCurrDate(1)
      }
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  async asyncData(context) {
    let store = context.store
    let typeId = context.route.query.typeId
    await store.dispatch('getArticleNav', 'article_type')
    await store.dispatch('getArticleList', {currpage: 1, pageSize: 10, typeId: typeId})
    return store.dispatch('getRecommendList', {currpage: 1, pageSize: 5, typeId: typeId})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../style/common.less";
  .catorgary{
    width:100%;
    background:#fff;
    padding:10px 0px;
    margin:10px 0px;
    ul{
      padding-left:10px;
      li{
        float:left;
        .selected{
          background:@mainColor;
          color:#fff;
          cursor: pointer;
        }
       a{
         padding:10px 20px;
         text-align: center;
         border-radius:4px;
         margin-right:10px;
         background:#eee;
         color:@mainColor;
         margin-bottom:10px;
         display:inline-block;
         position:relative;
         cursor: pointer;
       }
        a:hover{
          color: @mainColor;
        }
      }

    }
    ul::after{
      content: "\0020";
      display: block;
      height: 0;
      clear: both;
    }
  }
</style>
