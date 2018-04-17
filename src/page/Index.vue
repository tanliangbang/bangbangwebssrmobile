<template>
  <div class="index">
    <div class="container">
         <div class="model1">
             <p>bangbang的个人网站</p>
             <p>致力于前端开发,为前端工程师提供好的学习资源,解决各种问题</p>
         </div>
         <div class="model2">


           <div class="articleList">
              <div>
                <p class="model-title">最新文章  <router-link to="/articleList"> 更多</router-link></p>
                <div class="list-model1">
                  <div v-for="(item) in articleList[0]" :key="item.id" class="item">
                    <p v-if="!$store.state.common.isMobile" class="nomalTitle"><router-link   target="_blank" :to="{ path: '/articleDetail',query: { id: item.id}}">{{item.title}}</router-link></p>
                    <p v-if="$store.state.common.isMobile" class="nomalTitle"><router-link  :to="{ path: '/articleDetail',query: { id: item.id}}">{{item.title}}</router-link></p>
                    <div class="otherInfo">
                      <span><i class="iconfont icon-user"></i> {{item.wherefrom}}</span>
                      <span><i class="iconfont icon-time"></i> {{formatDate(item.createTime,'-')}}</span>
                      <span> <i class="iconfont icon-ready"></i> {{item.ready_num}}</span>
                      <span> <i class="iconfont icon-comment"></i> {{item.comment_num}}</span>                    </div>
                  </div>
                </div>
              </div>

             <div>
               <p class="model-title">好文推荐  <router-link to="/articleList"> 更多</router-link></p>
               <div class="list-model1">
                 <div v-for="(item) in articleList[1]" :key="item.id" class="item">
                   <p v-if="!$store.state.common.isMobile" class="nomalTitle"><router-link   target="_blank" :to="{ path: '/articleDetail',query: { id: item.id}}">{{item.title}}</router-link></p>
                   <p v-if="$store.state.common.isMobile" class="nomalTitle" ><router-link  :to="{ path: '/articleDetail',query: { id: item.id }}">{{item.title}}</router-link></p>
                   <div class="otherInfo">
                     <span><i class="iconfont icon-user"></i> {{item.wherefrom}}</span>
                     <span><i class="iconfont icon-time"></i> {{formatDate(item.createTime,'-')}}</span>
                     <span> <i class="iconfont icon-ready"></i> {{item.ready_num}}</span>
                    <span> <i class="iconfont icon-comment"></i> {{item.comment_num}}</span>
                   </div>
                 </div>
               </div>
             </div>

           </div>



         </div>

          <div class="model4">
            <p class="model-title">我的作品  <router-link to="/myProduction"> 更多作品</router-link></p>
            <div>
                <ListItem v-for="(item) in myproduction.content" :key="item.id" v-bind:item = "item" />
            </div>
          </div>

          <div class="model3">
             <p class="model-title">项目案例  <router-link to="/myProduction"> 更多案例</router-link></p>
             <div>
               <div>
                 <img src="https://file.tanliangbang.club/logo.png" />
                 <p>vue.js的项目搭建案例</p>
               </div>
               <div>
                 <img src="https://file.tanliangbang.club/react.jpg" />
                 <p>vue.js的项目搭建案例</p>
               </div>
               <div>
                 <img src="https://file.tanliangbang.club/nodejs.jpg" />
                 <p>vue.js的项目搭建案例</p>
               </div>
               <div>
                 <img src="https://file.tanliangbang.club/angular.jpg" />
                 <p>vue.js的项目搭建案例</p>
               </div>
             </div>
            </div>

    </div>
  </div>
</template>

<script>
import Tool from '../utils/Tool'
import ListItem from '../components/production/ListItem'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  title () {
    return {
      title: '',
      keywords: '码农集聚地,前端开发,前端社区,程序员,javascript',
      description: 'bangbang网站提供了很多前端后端及程序员开发文章包含各种html,javascript,nodejs,java,vue,react,angularjs,php等等语言、为打造优秀的程序员学习教程而努力。'
    }
  },
  components: {
    ListItem
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      articleList: 'getIndexArticleList',
      myproduction: 'getIndexProduction'
    })
  },
  mounted () {
    window.scroll(0, 0)
  },
  methods: {
    formatDate (date) {
      return Tool.formatDate2(date, '-')
    }
  },
  async asyncData({ store }) {
    await Promise.all([
      store.dispatch('getIndexArticleList'),
      store.dispatch('getResContentList', {type: 'production', currpage: 1, size: 4})
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "./index";
</style>
