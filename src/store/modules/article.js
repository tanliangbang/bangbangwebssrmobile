import * as api from '../../service/getData'

const state = {
  articleList: {}
}

const getters = {
  getArticleList: state => {
    return state.articleList
  }
}

const mutations = {
  GET_ARTICLE_LIST: (state, data) => {
    state.articleList = data
  }
}

const actions = {
  getArticleList({ state, commit }, param) {
    let start = (param.currpage - 1) * param.pageSize
    return api.getArticleList(start, param.pageSize).then((response) => {
      commit('GET_ARTICLE_LIST', response.data)
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
