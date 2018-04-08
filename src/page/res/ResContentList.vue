<template>
    <div class="container">
      <div class="catorgary">
         <ul>
           <li v-for="(item) in typeList"><a>{{item.content.name}}({{item.content.sys_article_num}})</a></li>
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
            <RightList   v-bind:rightList="readyRank" v-bind:type="type" v-bind:title="'热门文章'"/>
          </div>
      </div>
    </div>
</template>

<script>
import Tool from '../../utils/Tool'
import List from '../../components/res/List'
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
  mounted () {
    window.scroll(0, 0)
    this.pagination.totalSize = this.articleList.pageTotal
    this.dealType(this.articleList.content, this.typeList)
    this.$store.commit('GET_ARTICLE_LIST', this.articleList)
  },
  computed: {
    ...mapGetters({
      typeList: 'getArticleNav',
      articleList: 'getArticleList',
      readyRank: 'getReadyRank',
      recommend: 'getRecommend'
    })
  },
  methods: {
    async getCurrDate (currpage) {
      window.scroll(0, 0)
      await this.$store.dispatch('getArticleList', {currpage: currpage, pageSize: this.pagination.pageSize})
      this.dealType(this.articleList.content, this.typeList)
      this.$store.commit('GET_ARTICLE_LIST', this.articleList)
      this.pagination.totalSize = this.articleList.pageTotal
    },
    formatDate (date) {
      return Tool.formatDate1(date)
    },
    dealType (articleList, typeList) {
      for (let i = 0; i < articleList.length; i++) {
        for (let j = 0; j < typeList.length; j++) {
          if (articleList[i].typeId === typeList[j].id) {
            articleList[i]['typeName'] = typeList[j].content.name
          }
        }
      }
    },
    changeList (name) {
      this.$router.push('resContentList?type=' + name)
    },
    fetchData () {
      if (this.$route.name === 'resContentList' && this.$route.query.type && this.type !== null) {
        this.getCurrDate(1)
      }
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  async asyncData(context) {
    let store = context.store
    store.dispatch('getArticleNav', 'article_type')
    // if (!type) {
      // type = store.state.res.articleNav[0].name
    // }
    // await store.dispatch('getReadyRank', {type: type, size: 5})
    // await store.dispatch('getRecommend', {type: type, size: 5})
    return store.dispatch('getArticleList', {currpage: 1, pageSize: 10})
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
       a{
         padding:10px 20px;
         text-align: center;
         border-radius:4px;
         margin-right:10px;
         background:#eee;
         color:@mainColor;
         margin-bottom:10px;
         display:inline-block;
       }
        a:hover{
          background:@mainColor;
          color:#fff;
          cursor: pointer;
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
