  <template>
  <div class="resContent" v-if="resContent!==null">
    <div class="container">

      <div class="main-right">
            <div class="main">
                <div class="mainList">
                  <div class="topadvertise">
                    <img src="https://file.tanliangbang.club/top.png"/>
                  </div>
                  <div class="list-model1">
                    <div class="item">
                      <p class="bigTitle">{{resContent.content.title}}</p>
                      <div>
                        <span>来源:&nbsp;{{resContent.username!==null?resContent.username:resContent.content.from}}</span>&nbsp;&nbsp;<span>日期&nbsp;:&nbsp;{{formatDate(resContent.createTime)}}</span>&nbsp;&nbsp;<span>&nbsp;阅读:&nbsp;{{resContent.readyNum}}</span>
                      </div>
                    </div>
                    <div class="content"  v-html="resContent.content.content"></div>
                  </div>
                  <Comment v-bind:topicId="resContent.id" v-bind:type="type" v-on:commentSuccess="commentSuccess"/>
                  <CommentList v-bind:topicId="resContent.id" ref="commentList" v-bind:type="type"/>
                </div>
              </div>
            <div class="right">
             <RightList v-if="type!==null" v-bind:rightList="readyRank"  v-bind:title="'阅读排行'" v-bind:type="type"/>
             <RightList v-if="type!==null"  v-bind:rightList="recommend"   v-bind:title="'推荐排行'" v-bind:type="type"/>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
import Tool from '../../utils/Tool'
import RightList from '../../components/res/RightList'
import Comment from '../../components/comment/Comment'
import CommentList from '../../components/comment/CommentList'
import { mapGetters } from 'vuex'
export default {
  name: 'ResContent',
  title () {
    return {
      title: '精彩内容'
    }
  },
  components: {
    RightList,
    Comment,
    CommentList
  },
  data () {
    return {
      title: null,
      type: null
    }
  },
  created () {
    this.type = this.$route.query.type
  },
  computed: {
    ...mapGetters({
      resContent: 'getResContent',
      readyRank: 'getReadyRank',
      recommend: 'getRecommend'
    })
  },
  mounted () {
    window.scroll(0, 0)
    this.$store.dispatch('getReadyRank', {type: this.type, size: 5})
    this.$store.dispatch('getRecommend', {type: this.type, size: 5})
  },
  methods: {
    commentSuccess () {
      this.$refs.commentList.initData()
    },
    formatDate (date) {
      return Tool.formatDate2(date, '-')
    },
    fetchData () {
      if (this.$route.name === 'resContent' && this.$route.query.type) {
        this.$store.dispatch('getResContent', {type: this.type, id: this.$route.query.id})
      }
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  async asyncData(context) {
    let store = context.store
    let id = context.route.query.id
    let type = context.route.query.type
    return store.dispatch('getResContent', {type: type, id: id})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../style/common.less";
  .resContent{
    width:100%;
  }
  .mainList{
    background:#fff;
    padding-top:20px;
    .content{
      overflow-x:hidden;
      padding:10px 20px;
      img{
        width:100% !important;
      }
    }
  }
  .topadvertise {
    padding:0px 20px;
    >img{
      width:100%;
    }
  }
  .share{
    position:relative;
  }
</style>
