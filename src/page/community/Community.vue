<template>
  <div class="community">
      <div class="container">
          <div class="navList">
            <ul >
              <li v-on:click="toCommunity(null)" :class="!typeId||typeId===null?'active':''">全部</li>
              <li v-for="(item) in typeList" v-on:click="toCommunity(item.id)" :key="item.id" :class="item.id === typeId?'active' : ''">{{item.content.name}}</li>
              <a v-on:click="publish" class="publish-btn">我要发文</a>
            </ul>
          </div>

        <div class="main-right">
          <div class="main">
            <div class="listContent">
                <div>
                  <Item v-for="(item) in articleList.content"  v-bind:itemData="item" :key="item.id" />
                  <Pagination v-bind:pagination = "pagination"/>
                </div>
            </div>
          </div>
          <div class="right">
            <ContactWay/>
            <aboutWeb/>
            <ScrollImg/>
            <RightList   v-bind:rightList="recommendList" v-bind:type="typeId" v-bind:title="'推荐文章'"/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Tool from '../../utils/Tool'
import RightList from '../../components/right/rightList'
import ContactWay from '../../components/right/contactWay'
import aboutWeb from '../../components/right/aboutWeb'
import ScrollImg from '../../components/right/ScrollImg'
import Item from '../../components/community/Item'
import Pagination from '../../plugins/pagination/Pagination'
import { mapGetters } from 'vuex'

export default {
  name: 'community',
  title () {
    return {
      title: '精英社区',
      keywords: '码农集聚地,前端开发,前端社区,程序员,javascript',
      description: 'bangbang网站提供了很多前端后端及程序员开发文章包含各种html,javascript,nodejs,java,vue,react,angularjs,php等等语言、为打造优秀的程序员学习教程而努力。'
    }
  },
  components: {
    RightList,
    Item,
    Pagination,
    ScrollImg,
    ContactWay,
    aboutWeb
  },
  data () {
    return {
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
      window.scroll(0, 0)
      this.typeId = this.$route.query.typeId ? parseInt(this.$route.query.typeId) : null
      window.scroll(0, 0)
      let param = {
        currpage: currpage,
        pageSize: this.pagination.pageSize,
        typeId: this.typeId,
        community: 1
      }
      await this.$store.dispatch('getArticleList', param)
      await this.$store.dispatch('getRecommendList', param)
      this.pagination.totalSize = this.articleList.pageTotal
    },
    formatDate (date) {
      return Tool.formatDate2(date, '-')
    },
    toCommunity (typeId) {
      this.typeId = typeId
      if (typeId !== null) {
        this.$router.push('community?typeId=' + typeId)
      } else {
        this.$router.push('community')
      }
      this.getCurrDate(1)
    },
    publish () {
      let userInfo = this.$store.state.common.userInfo
      if (userInfo && userInfo !== null) {
        this.$router.push('publishArticle')
      } else {
        this.$loginOrRegist.showLogin()
      }
    }
  },
  async asyncData(context) {
    let store = context.store
    let typeId = context.route.query.typeId
    await store.dispatch('getArticleNav', 'article_type')
    await store.dispatch('getRecommendList', {currpage: 1, pageSize: 5, typeId: typeId, community: 1})
    return store.dispatch('getArticleList', {currpage: 1, pageSize: 10, typeId: typeId, community: 1})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../style/common";
.community{
  .top{
    width:100%;
    >img{
      width:100%;
      height:200px;
    }
  }
  .navList{
    >ul{
      margin: 0px;
      width: 100%;
      height: 48px;
      margin-top:10px;
      background: #fff;
      border: 1px solid #f0f0f0;
      overflow: hidden;
      position: relative;
      .active{
        background:@mainColor;
        color:#fff;
      }
      >li{
        float: left;
        padding: 0 30px;
        border-right: 1px solid #f0f0f0;
        font-size: 16px;
        line-height: 48px;
        position: relative;
        cursor: pointer;
      }
    }
    .publish-btn{
      position: absolute;
      right: 20px;
      top: 9px;
      width: 80px;
      text-align: center;
      height: 30px;
      font-size:14px;
      background:@mainColor;
      color: #fff;
      line-height: 30px;
      cursor: pointer;
    }
  }
  .main-right{
    margin-top:10px;
  }
  .listContent{
    margin-right:360px;
    >div{
      >div:last-child{
        border-bottom:none;
      }
    }
  }
}

</style>
