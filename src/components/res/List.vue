<template>
    <div class="list">
        <article class="articleList1"   v-for="(item, index)  in resContentList"   :key="item.id">
            <h2 class="articleTitle"><i>个人日记</i><a>{{item.content.title}}</a></h2>
            <div class="artContent">
               <img class="lazy-img-fadein" v-lazy="item.content.titleImg" />
               <span>{{item.content.breif}}</span>
            </div>
          <div class="otherInfo">
            <span><i class="fa fa-user"></i><a>{{item.content.from}}</a></span>
            <span><i class="fa fa-clock-o"></i>{{formatDate(item.createTime)}}</span>
            <span><i class="fa fa-eye"></i>{{item.readyNum}}</span>
            <span><i class="fa fa-thumbs-up"></i>1000</span>
          </div>
        </article>

   <!--   <div class="mainList">
          <div class="list-model1">
            <transition-group>
            <div class="item" v-for="(item, index)  in resContentList"   v-bind:data-index="index" :key="item.id" >
                  <p v-if="!$store.state.common.isMobile" class="bigTitle"><router-link  target="_blank" :to="{ path: '/resContent',query: { id: item.id, type: type }}">{{item.content.title}}</router-link></p>
                  <p v-if="$store.state.common.isMobile" class="bigTitle"><router-link   :to="{ path: '/resContent',query: { id: item.id, type: type }}">{{item.content.title}}</router-link></p>

                   <div>
                    <span>来源: {{item.content.from}}</span><span>日期 :{{formatDate(item.createTime)}}</span><span>阅读:{{item.readyNum}}</span>
                  </div>
                  <div class="list1-content">
                    <div>
                      <img class="lazy-img-fadein" v-lazy="item.content.titleImg">
                    </div>
                    <p>{{item.content.breif}}</p>
                  </div>
              </div>
            </transition-group>

          </div>

      </div>-->

    </div>

</template>

<script>
import Tool from '../../utils/Tool'
export default {
  name: 'List',
  props: ['resContentList', 'type'],
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
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../style/commonClass.less";

</style>
