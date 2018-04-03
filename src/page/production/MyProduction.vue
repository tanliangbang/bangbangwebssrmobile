<template>
  <div class="myProduction">
      <div class="container">
        <div class="production-page">
          <img src="https://file.tanliangbang.club/proImg.jpg">
          <div class="productionList">
            <div>
              <ListItem v-for="(item) in myproduction.content[0]" :key="item.id" v-bind:item="item" />
            </div>
            <div>
              <ListItem v-for="(item) in myproduction.content[1]" :key="item.id" v-bind:item="item" />
            </div>
            <div>
              <ListItem v-for="(item) in myproduction.content[2]" :key="item.id" v-bind:item="item" />
            </div>
            <div>
              <ListItem v-for="(item) in myproduction.content[3]" :key="item.id" v-bind:item="item" />
            </div>
          </div>

        </div>

      </div>
  </div>
</template>

<script>
import ListItem from '../../components/production/ListItem'
import { mapGetters } from 'vuex'

export default {
  name: 'MyProduction',
  title () {
    return {
      title: '我的作品',
      keywords: '码农集聚地,前端开发,前端社区,程序员,javascript',
      description: 'bangbang网站提供了很多前端后端及程序员开发文章包含各种html,javascript,nodejs,java,vue,react,angularjs,php等等语言、为打造优秀的程序员学习教程而努力。'
    }
  },
  components: {
    ListItem
  },
  data () {
    return {}
  },
  mounted () {
    window.scroll(0, 0)
  },
  computed: {
    ...mapGetters({
      myproduction: 'getMyproduction'
    })
  },
  methods: {
  },
  asyncData({ store }) {
    return store.dispatch('getResContentList', {type: 'production', currpage: 1, size: 5})
  }
}
</script>

<style lang="less" scoped>
  @import "../../style/common.less";
  .productionList{
    display: flex;
    flex-wrap:wrap;
    >div{
      flex:1;
      margin:20px;
      min-width:200px;
    }
  }

  .production-page{
    background:#fff;
    >img{
      width:100%;
      height:200px;
    }
  }
</style>
