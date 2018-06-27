  <template>
  <div class="articleDtail" v-if="articleDetail!==null">
    <div class="container" >
      <div class="main-right">
            <div class="main">
                <div class="mainList">
                  <div class="topadvertise">
                    <img src="https://file.tanliangbang.club/top.png"/>
                  </div>
                  <div class="list-model1">
                    <div class="item">
                      <p class="bigTitle">{{articleDetail.title}}</p>
                      <div>
                        <span>来源:{{articleDetail.wherefrom!==""?articleDetail.wherefrom:articleDetail.username}}</span><span>日期 : {{formatDate(articleDetail.createTime)}}</span><span>阅读: {{articleDetail.ready_num}}</span>
                      </div>
                    </div>
<!--
                    <div class="content"  v-html="articleDetail.content"></div>
-->
                    <div id="doc-content" >
                      <textarea style="display:none;">{{articleDetail.content}}</textarea>
                    </div>
                  </div>
                  <div class="comment">
                    <Comment v-bind:topicId="articleDetail.id"  v-on:commentSuccess="commentSuccess"/>
                    <CommentList v-bind:topicId="articleDetail.id" ref="commentList"/>
                  </div>

                </div>
              </div>
            <div class="right">
              <ContactWay/>
              <aboutWeb/>
              <ScrollImg/>
              <RightList   v-bind:rightList="recommendList"  v-bind:title="'热门文章'"/>
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
import Comment from '../../components/comment/Comment'
import CommentList from '../../components/comment/CommentList'
let $s = null
if (typeof window !== 'undefined') {
  $s = require('scriptjs')
}
import { mapGetters } from 'vuex'
export default {
  name: 'ArticleDetail',
  title () {
    return {
      title: this.articleDetail ? this.articleDetail.title : '',
      keywords: (this.articleDetail && this.articleDetail['seo_keys'] !== null) ? this.articleDetail['seo_keys'] : '码农集聚地,前端开发,前端社区,程序员,javascript',
      description: 'bangbang网站提供了很多前端后端及程序员开发文章包含各种html,javascript,nodejs,java,vue,react,angularjs,php等等语言、为打造优秀的程序员学习教程而努力。'
    }
  },
  components: {
    RightList,
    Comment,
    CommentList,
    ContactWay,
    aboutWeb,
    ScrollImg
  },
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
    ...mapGetters({
      articleDetail: 'getArticleDetail',
      recommendList: 'getRecommendList'
    })
  },
  mounted () {
    let editorPath = './../../../static/editor.md-master'
    $s([
      `${editorPath}/jquery.js`,
      `${editorPath}/lib/marked.min.js`,
      `${editorPath}/lib/prettify.min.js`,
      `${editorPath}/lib/raphael.min.js`,
      `${editorPath}/lib/underscore.min.js`,
      `${editorPath}/lib/flowchart.min.js`,
      `${editorPath}/lib/jquery.flowchart.min.js`
    ], () => {
      $s([`${editorPath}/editormd.min.js`, `${editorPath}/lib/sequence-diagram.min.js`], () => {
        this.initEditor()
      })
    })

    window.scroll(0, 0)
    let param = {
      typeId: this.articleDetail.typeId
    }
    this.$store.dispatch('getRecommendList', param)
  },
  methods: {
    commentSuccess () {
      this.$refs.commentList.initData()
    },
    formatDate (date) {
      return Tool.formatDate2(date, '-')
    },
    fetchData () {
      if (this.$route.name === 'articleDetail') {
        this.$store.dispatch('getArticleDetail', {id: this.$route.query.id})
      }
    },
    initEditor() {
      this.$nextTick((editorMD = window.editormd) => {
        if (editorMD) {
          if (this.type === 'editor') {
            console.log('editor')
            // this.instance = editorMD(this.id, this.editorConfig)
          } else {
            console.log('html')
            this.instance = editorMD.markdownToHTML('doc-content', {
              htmlDecode: 'style,script,iframe',
              emoji: true,
              taskList: true,
              tex: true, // 默认不解析
              flowChart: true, // 默认不解析
              sequenceDiagram: true, // 默认不解析
              codeFold: true
            })
          }
        }
      })
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  async asyncData(context) {
    let store = context.store
    console.log(context.route.params)
    let id = context.route.params.id
    return store.dispatch('getArticleDetail', id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../style/var";
  h4{
    position:relative;
    line-height: 18px;
    padding: 10px 20px 9px 10px;
  }
  h4::after{
    content:' ';
    width:5px;
    height:100%;
    position:absolute;
    left:-20px;
    top:0;
    background:@mainColor;
  }
  .articleDetail{
    width:100%;
  }
  #doc-content{
    padding:20px;
  }
  .mainList{
    padding-top:20px;
    .content{
      overflow-x:hidden;
      padding:10px 20px;
      img{
        width:100% !important;
      }
    }
    .list-model1{
      background:#fff;
    }
  }
  .topadvertise {
    padding:0px;
    >img{
      width:100%;
    }
  }
  .comment{
    background:#fff;
    margin-top:10px;
  }
  .share{
    position:relative;
  }
</style>
