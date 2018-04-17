<template>
    <div class="list">
        <article class="articleList1"   v-for="(item, index)  in articleList"   :key="item.id">
            <h2 class="articleTitle"><i>{{item.typeName}}</i>
              <router-link v-if="$store.state.common.isMobile" :to="{ path: '/articleDetail',query: { id: item.id }}">{{item.title}}</router-link>
              <router-link v-if="!$store.state.common.isMobile" target="_blank" :to="{ path: '/articleDetail',query: { id: item.id }}">{{item.title}}</router-link>
            </h2>
            <div class="artContent">
                <router-link v-if="!$store.state.common.isMobile" target="_blank" :to="{ path: '/articleDetail',query: { id: item.id }}">
                  <img class="lazy-img-fadein"  v-lazy="item.imgUrl" />
                </router-link>
               <span>{{item.breif}}</span>
            </div>
          <div class="otherInfo">
            <span><i class="iconfont icon-user"></i><a>{{item.wherefrom}}</a></span>
            <span><i class="iconfont icon-time"></i>{{formatDate(item.createTime)}}</span>
            <span><i class="iconfont icon-ready"></i>{{item.ready_num}} 浏览</span>
            <span><i class="iconfont icon-comment"></i>{{item.comment_num}} 评论</span>
            <span v-on:click="like(item.id, index)"><i  class="iconfont icon-like"></i>{{item.likeNum}} 喜欢</span>
          </div>
        </article>
    </div>

</template>

<script>
import Tool from '../../utils/Tool'
import * as api from '../../service/getData'
export default {
  name: 'List',
  props: ['articleList'],
  data () {
    return {}
  },
  created () {
  },
  mounted () {
  },
  methods: {
    formatDate (date) {
      return Tool.formatDate2(date, '-')
    },
    like (id, index) {
      var _this = this
      api.like(id).then(function () {
        _this.articleList[index].likeNum = _this.articleList[index].likeNum + 1
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../style/commonClass.less";
</style>
