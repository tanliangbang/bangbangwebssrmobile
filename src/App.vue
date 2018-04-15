<template>
  <div id="app">
   <Header></Header>
    <div class="pageContent" v-bind:style="{ minHeight:minHeight+'px' }">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      minHeight: '0px'
    }
  },
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapGetters({
      currWidth: 'setCurrWidth'
    })
  },
  mounted () {
    this.$store.dispatch('getUserInfo')
    this.minHeight = document.documentElement.clientHeight - 40
    let width = document.documentElement.clientWidth
    this.$store.dispatch('setCurrWidth', width)
    window.onresize = () => {
      this.minHeight = document.documentElement.clientHeight - 40
      let width = document.documentElement.clientWidth
      this.$store.dispatch('setCurrWidth', width)
    }
  }
}
</script>

<style lang="less">
@import 'style/nprogress.css';
@import 'style/common.less';
 html,body{
   margin:0px;
   width:100%;
   min-height:100%;
   //background:url("../static/img/bg.png") repeat;
   background:#eee;
 }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width:100%;
}
</style>
