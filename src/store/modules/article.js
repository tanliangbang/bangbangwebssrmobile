import * as api from '../../service/getData'
const state = {
  articleList: {},
  recommendList: {},
  articleDetail: {}
}

const getters = {
  getArticleList: state => {
    return state.articleList
  },
  getRecommendList: state => {
    return state.recommendList
  },
  getArticleDetail: state => {
    return state.articleDetail
  }
}

const mutations = {
  GET_ARTICLE_LIST: (state, data) => {
    state.articleList = data
  },
  GET_RECOMMEND_LIST: (state, data) => {
    state.recommendList = data
  },
  GET_ARTICLE_DETAIL: (state, data) => {
    state.articleDetail = data
  }
}

const actions = {
  getArticleList({ state, commit }, param) {
    param.start = param.currpage ? (param.currpage - 1) * param.pageSize : undefined
    return api.getArticleList(param).then((response) => {
      commit('GET_ARTICLE_LIST', response.data)
    }).catch((error) => {
      console.log(error)
    })
  },
  getRecommendList({ state, commit }, param) {
    param.start = (param.currpage - 1) * param.pageSize
    param.recommend = 1
    return api.getArticleList(param).then((response) => {
      commit('GET_RECOMMEND_LIST', response.data)
    }).catch((error) => {
      console.log(error)
    })
  },
  getArticleDetail({ state, commit }, id) {
    return api.getArticleDetail({id: id}).then((response) => {
      commit('GET_ARTICLE_DETAIL', response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
