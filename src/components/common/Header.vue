<template>
  <div >
    <div class="header" v-if="!$store.state.common.isMobile">
      <div class="container">
        <h1 class="webBreif"><img src="../../../static/img/logo.png" /><img src="../../../static/img/webTitle.png" /></h1>
      </div>
      <div class="headerNav">
         <div class="container">
           <ul class="nav">
             <li><router-link to="home" > 首页 </router-link></li>
             <li><router-link to="articleList">技术文章</router-link></li>
             <li><router-link to="myProduction"> 作品展示</router-link></li>
             <li><router-link to="community"> 程序员社区</router-link></li>
             <li><router-link to="support">赞助及留言</router-link></li>

           </ul>
           <div class="loginOrRegist" v-if="this.$store.state.common.userInfo === null">
             <a v-on:click="showLoginOrRegsit('login')">登入</a> / <a v-on:click="showLoginOrRegsit('regist')">注册</a>
           </div>
           <div class="loginOrRegist" v-if="this.$store.state.common.userInfo!==null">
             <router-link to="/userCenter">{{this.$store.state.common.userInfo.username}}</router-link> / <a v-on:click="loginOut" class="loginOut">退出</a>
           </div>
         </div>
      </div>

    </div>

      <div class="mheader" v-if="$store.state.common.isMobile">
          <p class="my-logo"><router-link to="/">bangbang</router-link></p>
          <img class="moreModel" v-on:click="show = !show" src="../../../static/img/Viewlist.png">
          <transition name="fade">
            <ul v-if="show" class="nav">
                <li><a v-on:click="toUrl('home')"  > 首页 </a></li>
                <li><a v-on:click="toUrl('resContentList')">技术文章</a></li>
                <li><a v-on:click="toUrl('myProduction')"> 作品展示</a></li>
                <li><a v-on:click="toUrl('community')" > 程序员社区</a></li>
                <li v-if="this.$store.state.common.userInfo === null"><a v-on:click="showLoginOrRegsit('login')" > 登入</a></li>
                <li v-if="this.$store.state.common.userInfo === null"><a v-on:click="showLoginOrRegsit('regist')" > 注册 </a></li>
                <li v-if="this.$store.state.common.userInfo !== null"><a v-on:click="toUrl('userCenter')" > {{this.$store.state.common.userInfo.username}}</a></li>
                <li v-if="this.$store.state.common.userInfo !== null"><a v-on:click="loginOut" > 退出</a></li>
              <br class="clear" />
              </ul>
          </transition>
     </div>
  </div>

</template>

<script>
import * as api from '../../service/getData'
import {mapActions} from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
      show: false
    }
  },
  mounted () {
  },
  methods: {
    ...mapActions([
      'setUserInfo'
    ]),
    showLoginOrRegsit (str) {
      this.show = !this.show
      if (str === 'login') {
        this.$loginOrRegist.showLogin()
      } else {
        this.$loginOrRegist.showRegist()
      }
    },
    toUrl (url) {
      this.show = !this.show
      this.$router.push('/' + url)
    },
    async loginOut () {
      await api.loginOut()
      this.setUserInfo(null)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
 @import "../../style/common.less";
.header{
  top: 0;
  width: 100%;
  background: @mainColor;
  color:#fff;
  z-index: 3000;
  transition: all 1s ease;
  .router-link-active{
    background:@mainSecendColor;
  }
  .headerNav{
    height: 52px;
    background-color: #4a4a4a;
    opacity: .9;
    clear: both;
  }
  .webBreif{
    font-weight: 100;
    text-shadow: 0px 0px 1px rgba(94, 255, 216, 0.8);
    padding: 20px 0px 20px 0px;
    cursor: pointer;
    position: relative;
    color: #fff;
    text-align: center;
    >img:nth-child(2){
      height:60px;
    }
  }
  .loginOrRegist{
    float:right;
    margin-top:18px;
    a{
      color:#fff;
      cursor: pointer;
    }
    a:hover{
      color:@mainSecendColor;
    }
  }
  ul{
    float:left;
    li{
      float:left;
      a{
        line-height:52px;
        padding:0px 20px;
        color:#fff;
        display:inline-block;
        position:relative;
      }
      a::before{
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        background: @mainSecendColor;
        z-index: -1;
        transform: scale3d(0, 0, 1);
        transform-origin: 50% 100%;
        transition: transform .3s;
      }
      a:hover{
        color: #fff;
        &::before {
          transform: scale3d(1, 1, 1);
          transform-origin: 50% 0%;
        }
      }
    }

  }
}

.mheader{
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: #333;
  color:#fff;
  z-index: 3000;
  transition: all 1s ease;
  .my-logo{
    margin-left:10px;
  }
  .moreModel{
     width:30px;
     height:30px;
     float:right;
     margin-top:15px;
     margin-right:10px;
  }
  .nav{
    margin-top:60px;
    background: #333;
    width:100%;
    border-top:1px solid @mainColor;
    padding-bottom:20px;
    li{
      text-align: center;
      padding-top:20px;
      float:left;
      width:50%;
      >a{
        color:#fff;
      }
    }
  }
  .clear{
    clear:both;
  }

}

 .my-logo{
   float:left;
   font-family: 'Open Sans',sans-serif;
   text-shadow: -2px 2px 4px rgba(255,255,255,1);
   font-style: italic;
   font-size: 2em;
   display: inline-block;
   position: relative;
   margin-top:5px;
   a{
     color:@mainColor;
   }
 }

 .fade-enter-active, .fade-leave-active {
   transition: all 0.5s;
 }
 .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
   opacity: 0;
 }
</style>
