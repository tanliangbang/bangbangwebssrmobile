<template>
    <div class="list">
        <article class="articleList1"   v-for="(item, index)  in articleList"   :key="item.id">
            <h2 class="articleTitle"><i>{{item.typeName}}</i><a>{{item.title}}</a></h2>
            <div class="artContent">
               <img class="lazy-img-fadein" v-lazy="item.imgUrl" />
               <span>{{item.breif}}</span>
            </div>
          <div class="otherInfo">
            <span><i class="fa fa-user"></i><a>{{item.wherefrom}}</a></span>
            <span><i class="fa fa-clock-o"></i>{{formatDate(item.createTime)}}</span>
            <span><i class="fa fa-eye"></i>{{item.ready_num}}</span>
            <span><i class="fa fa-thumbs-up"></i>{{item.like}}</span>
          </div>
        </article>
    </div>

</template>

<script>
import Tool from '../../utils/Tool'
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
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../style/commonClass.less";

</style>
