import * as api from '../../service/getData'

const state = {
  indexArticleList: []
}

const getters = {
  getIndexArticleList: state => {
    return state.indexArticleList
  }
}

const mutations = {
  GET_NEW_AETICLE: (state, indexArticleList) => {
    state.indexArticleList[0] = indexArticleList
  },
  GET_GOOD_AETICLE: (state, backtec) => {
    state.indexArticleList[1] = backtec
  }
}

const actions = {
  async getIndexArticleList ({ state, commit }) {
    await Promise.all([
      api.getArticleList({start: 0, pageSize: 5}).then((response) => {
        commit('GET_NEW_AETICLE', response.data.content)
      }).catch((error) => {
        console.log(error)
      }),
      api.getArticleList({start: 0, pageSize: 5, good: 1}).then((response) => {
        commit('GET_GOOD_AETICLE', response.data.content)
      }).catch((error) => {
        console.log(error)
      })
    ])
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
