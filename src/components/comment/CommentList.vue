<template>
  <div class="commentList" v-if="commentList!==null">
    <p>评论列表</p>
    <div v-for="comment in commentList" :key="comment.id">
       <div class="comment-item">
          <img :src="comment.user.userAavar" />
          <div>
            <div class="ctop">
              <span class="cname">{{comment.user.userName}}</span>
              <span class="ctime">{{formatdate(comment.cTime)}}</span>
            </div>
            <p>
              {{comment.content}}
            </p>
            <a class="replay" v-on:click="showReply($event,comment.id,comment.user)">回复</a>
          </div>
       </div>
      <Comment class="commentForm" ref="commentForm" v-bind:topicId="form.id" v-bind:type="form.type" v-bind:replyId="form.replyId"
               v-bind:toUserId="form.toUserId" v-on:commentSuccess="commentSuccess" />
      <div v-for="reply in comment.reply.list" :key="reply.id">
        <div class="comment-item" >
          <img :src="reply.user.userAavar" />
          <div>
            <div class="ctop">
              <span class="cname">{{reply.user.userName}} <i>回复</i> {{reply.to_user.userName}}</span>
              <span class="ctime">{{formatdate(reply.cTime)}}</span>
            </div>
            <p>
              {{reply.content}}
            </p>
            <a class="replay" v-on:click="showReply($event, comment.id, reply.user)">回复</a>
          </div>
        </div>
        <Comment class="commentForm" ref="commentForm" v-bind:topicId="form.id" v-bind:type="form.type" v-bind:replyId="form.replyId"
                 v-bind:toUserId="form.toUserId" v-on:commentSuccess="commentSuccess" />
      </div>

    </div>

  </div>
</template>

<script>
import * as api from '../../service/getData'
import Comment from '../../components/comment/Comment'
import Tool from '../../utils/Tool'
export default {
  name: 'CommentList',
  components: {
    Comment
  },
  props: ['topicId', 'type'],
  data () {
    return {
      commentList: null,
      form: {
        id: this.topicId,
        type: this.type,
        replyId: 0,
        toUserId: 0
      }
    }
  },
  created () {
    this.initData()
  },
  methods: {
    async initData () {
      let res = await api.getCommentList(this.topicId, this.type, 0, 5)
      this.commentList = res.data.list
    },
    commentSuccess () {
      let refs = this.$refs.commentForm
      for (let i = 0; i < refs.length; i++) {
        refs[i].$el.style.display = 'none'
      }
      this.initData()
    },
    showReply (event, replyId, user) {
      let refs = this.$refs.commentForm
      this.form.replyId = replyId
      this.form.toUserId = user.id
      let currNode = event.currentTarget.parentNode.parentNode.nextElementSibling
      if (currNode.style.display === 'block') {
        currNode.style.display = 'none'
      } else {
        for (let i = 0; i < refs.length; i++) {
          refs[i].$el.style.display = 'none'
        }
        currNode.style.display = 'block'
      }
    },
    formatdate (date) {
      return Tool.formatDate1(date)
    },
    fetchData () {
      this.initData()
    }
  },
  watch: {
    'topicId': 'fetchData'
  }
}
</script>

<style lang="less" scoped>
  @import "../../style/common";
  .commentForm{
    display:none;
  }
  .comment-item{
    position:relative;
    padding: 12px 20px 10px 20px;
    >img{
      width:54px;
      height:54px;
      position:absolute;
    }
    .ctop{
      a{
        margin-left:10px;
        font-size:14px;
        color:@mainColor;
      }
    }
    .ctime{
      position:absolute;
      right:20px;
      top:10px;
      color:@gray-color;
    }
    >p{
      color:@nomal-font-color;
    }
    .cname{
      color:@mainColor;
      i{
        color:@gray-color;
        font-size:14px;
      }
    }
    .replay{
      position:absolute;
      right:20px;
      font-size:14px;
      color:@mainColor;
      bottom:5px;
      cursor: pointer;
    }
    >div{
      margin-left:74px;
      padding: 10px 15px;
      line-height: 25px;
      margin-top: -2px;
      border-radius: 3px;
      position: relative;
      background: #fbfdfb;
      border: 1px #eee solid;
      font-size: 15px;
    }
    >div:before{
      content: '';
      display: inline-block;
      border-top: 9px solid transparent;
      border-bottom: 9px solid transparent;
      border-right: 9px solid #eee;
      position: absolute;
      top: 15px;
      left: -9px;
    }
    >div:after{
      content: '';
      display: inline-block;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-right: 7px solid #fbfdfb;
      position: absolute;
      top: 17px;
      left: -7px;
    }
  }

  .commentList{
    >p:nth-child(1){
      color:@mainColor;
      padding-left:20px;
      padding-bottom:10px;
      margin-bottom:10px;
      border-bottom:1px solid @mainColor;
    }
  }
  .reply{
    .top{
      padding-top:10px;
    }
    .replyBtn{
      font-size:14px;
    }
  }
  .top{
    height:30px;
    >span:nth-child(1){
      color:@mainColor;
      >img{
        width:30px;
        height:30px;
        border-radius:50%;
        vertical-align: middle;
        margin-right:15px;
        border:1px solid @borderColor;
      }
    }
    >span:nth-child(2){
      color:@gray-color;
      font-size:14px;
    }
  }
  .content{
    padding:5px 0px;
    margin-top:10px;
    font-size:16px;
  }
  .replyBtn{
    text-align: right;
    margin-top:5px;
    >a{
      color:@mainColor;
    }
    cursor: pointer;
  }
  .reply{
     background:#f5f7fa;
     margin:10px 40px;
    padding:10px 20px;
    border-radius:5px;
    >div{
      border-bottom:1px dashed @borderColor;
      padding-bottom:10px;
    }
    >div:last-child{
      border-bottom:none;
    }
  }
  @media screen and (max-width: 1000px) {
    .reply{
      margin:10px 10px;
    }
  }

  .commentTextarea{
    display:none
  }
</style>
