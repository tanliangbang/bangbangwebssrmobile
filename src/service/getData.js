import config from 'config/index'
import { createAPI } from 'create-api'

const http = createAPI(config)

/**
 * 获取首页导航栏
 */
export const getNav = (type) => http.get('/api/article/getResListByType', {
  res_type: type
})

/**
 * 获取文章列表
 */

export const getArticleList = (param) => http.get('/api/article/getArticleListByType', param)

/**
 * 根据类型获取资源列表内容
 */
export const getResContentList = (name, start, size) => http.get('/api/res/getResContentList', {
  name: name,
  start: start,
  pageSize: size
})

/**
 * 根据id获取文章里列表
 */
export const getArticleDetail = (param) => http.get('/api/article/getArticleById', param)

/**
 * 获取阅读排行列表
 */
export const getReadyRank = (name, size) => http.get('/api/article/readyRank', {
  name: name,
  size: size
})

/**
 * 获取推荐排行列表
 */
export const getRecommend = (name, size) => http.get('/api/article/recommend', {
  name: name,
  size: size
})

/**
 * 根据资源类型和资源内容ID获取资源详情
 */
export const getResContentById = (id, name) => http.get('/api/article/getResContentById', {
  id: id,
  name: name
})

/**
 * 根据用户名密码登入
 */
export const login = (username, password) => http.post('/api/users/login', {
  username: username,
  password: password
})

/**
 * 用户注册
 */
export const regist = (username, password) => http.post('/api/users/register', {
  username: username,
  password: password
})

/**
 * 用户发表文章
 */
export const publishArticle = (param) => http.post('/api/article/addOrUpdateArticle', param)

/**
 * 修改用户信息
 */
export const changeUserInfo = (param) => http.post('/api/users/changeUserInfo', param)

/**
 * 获取用户信息
 */
export const getUserInfo = (param) => http.get('/api/users/getUserInfo', param)

/**
 * 用户退出
 */
export const loginOut = () => http.get('/api/users/loginOut', {

})

/**
 * 评论
 */
/**
 * 评论
 */
export const comment = (topicId, toUserId = 0, replyId = 0, type, content) => http.post('/api/comments/comment', {
  topic_id: topicId,
  to_uid: toUserId,
  reply_id: replyId,
  type: type,
  content: content
})
/**
 * 评论
 */
export const getCommentList = (topicId, type, start, size) => http.get('api/comments/commentList', {
  topic_id: topicId,
  type: type,
  start: start,
  size: size
})

/**
 * 上传图片
 */
export const uploadImg = (param, config) => http.upload('/api/upload/uploadImg', param, config)
