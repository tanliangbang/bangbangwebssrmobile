<template>
  <div class="index">
    <div class="container">
         <div class="model1">
             <p>在 bangbang，学习技能、解决问题</p>
             <p>每个月，我们帮助 1000 万的开发者解决各种各样的技术问题。并助力他们在技术能力、职业生涯、影响力上获得提升。</p>
         </div>
         <div class="model2">


           <div class="articleList">
              <div>
                <p class="model-title">前端技术  <router-link to="/resContentList?type=webtec"> 更多</router-link></p>
                <div class="list-model1">
                  <div v-for="(item) in articleList[0]" :key="item.id" class="item">
                    <p v-if="!$store.state.common.isMobile" class="nomalTitle"><router-link   target="_blank" :to="{ path: '/resContent',query: { id: item.id, type: 'webtec' }}">{{item.content.title}}</router-link></p>
                    <p v-if="$store.state.common.isMobile" class="nomalTitle"><router-link  :to="{ path: '/resContent',query: { id: item.id, type: 'webtec' }}">{{item.content.title}}</router-link></p>
                    <div>
                      <span>作者:  {{item.content.from}}</span><span>日期  :{{formatDate(item.createTime,'-')}}</span><span>阅读:{{item.readyNum}}</span>
                    </div>
                  </div>
                </div>
              </div>

             <div>
               <p class="model-title">后端技术  <router-link to="/resContentList?type=backtec"> 更多</router-link></p>
               <div class="list-model1">
                 <div v-for="(item) in articleList[1]" :key="item.id" class="item">
                   <p v-if="!$store.state.common.isMobile" class="nomalTitle"><router-link   target="_blank" :to="{ path: '/resContent',query: { id: item.id, type: 'backtec' }}">{{item.content.title}}</router-link></p>
                   <p v-if="$store.state.common.isMobile" class="nomalTitle" ><router-link  :to="{ path: '/resContent',query: { id: item.id, type: 'backtec' }}">{{item.content.title}}</router-link></p>
                   <div>
                     <span>作者: {{item.content.from}}</span><span>日期 :{{formatDate(item.createTime,'-')}}</span> <span> 阅读: {{item.readyNum}}</span>
                   </div>
                 </div>
               </div>
             </div>

             <div>
               <p class="model-title">优秀文章  <router-link to="/resContentList?type=goodarticles"> 更多</router-link></p>
               <div class="list-model1">
                 <div v-for="(item) in articleList[2]" :key="item.id" class="item">
                   <p v-if="!$store.state.common.isMobile" class="nomalTitle"><router-link  target="_blank" :to="{ path: '/resContent',query: { id: item.id, type: 'goodarticles' }}">{{item.content.title}}</router-link></p>
                   <p v-if="$store.state.common.isMobile" class="nomalTitle"><router-link  :to="{ path: '/resContent',query: { id: item.id, type: 'goodarticles' }}">{{item.content.title}}</router-link></p>
                   <div>
                     <span>作者: {{item.content.from}}</span> <span>日期 :{{formatDate(item.createTime,'-')}}</span> <span> 阅读: {{item.readyNum}}</span>
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
      store.dispatch('getIndexArticleList', {type: 'webtec', currpage: 1, size: 10}),
      store.dispatch('getResContentList', {type: 'production', currpage: 1, size: 4})
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "./index";
</style>
