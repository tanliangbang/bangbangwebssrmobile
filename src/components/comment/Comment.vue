<template>
  <div class="comment">
      <div class="comtent-title">
            <i class="iconfont icon-user"></i>发表我的评论
      </div>
      <div class="form">
        <textarea v-model="content"  placeholder="回复:"></textarea>
        <div class="sele">
          <span class="promit" v-if="showError">请输入内容</span>
          <span class="youke">游客评论(不需要登入)<input v-model="noLogin" type="checkbox"></span>
        </div>
        <div>
          <button v-on:click="commitComment">确&nbsp;&nbsp;&nbsp;&nbsp;定</button>
        </div>
      </div>

  </div>
</template>

<script>
import * as api from '../../service/getData'
export default {
  name: 'Comment',
  props: ['topicId', 'type', 'toUserId', 'replyId'],
  data () {
    return {
      content: '',
      noLogin: false,
      showError: false
    }
  },
  methods: {
    async commitComment () {
      if (!this.noLogin && this.$store.state.common.userInfo === null) {
        this.$loginOrRegist.showLogin()
        return false
      }
      if (this.content === '') {
        this.showError = true
        return false
      } else {
        await api.comment(this.topicId, this.toUserId, this.replyId, this.type, this.content, this.noLogin)
        this.$prompt.success('评论成功')
        this.content = ''
        this.showError = false
        this.$emit('commentSuccess', this)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../style/common";
  .comment{
    width:100%;
    .form{
      padding:10px 20px;
      >div{
        text-align: right;
      }
      .sele{
        font-size:12px;
        margin-bottom:10px;
        .promit{
         padding-left:10px;
         color:red;
          float:left;
        }
        .youke{
          input{
            vertical-align: middle;
          }
        }
      }
    }
    .comtent-title{
      padding: 12px 20px;
      background-color: #f7f7f7;
      border-left:4px solid @mainColor;
      i{
        margin-right:10px;
        font-size:30px;
        color:#999;
        vertical-align: middle;
      }
    }
    textarea{
      width:100%;
      height:80px;
      font-size:16px;
      border:1px solid @borderColor;
      color:@gray-color;
      border-radius: 5px;
      padding:10px;
    }
    button{
      width:80px;
      height:35px;
      background: @mainColor;
      color:#fff;
      border:none;
      margin-top:5px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
</style>
