import * as api from '../../service/getData'
const state = {
  articleList: {},
  recommendList: {}
}

const getters = {
  getArticleList: state => {
    return state.articleList
  },
  getRecommendList: state => {
    return state.recommendList
  }
}

const mutations = {
  GET_ARTICLE_LIST: (state, data) => {
    state.articleList = data
  },
  GET_RECOMMEND_LIST: (state, data) => {
    state.recommendList = data
  }
}

const actions = {
  getArticleList({ state, commit }, param) {
    param.start = (param.currpage - 1) * param.pageSize
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
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
