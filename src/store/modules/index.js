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
  GET_INDEXWEBTEC: (state, indexArticleList) => {
    state.indexArticleList[0] = indexArticleList
  },
  GET_BACKTEC: (state, backtec) => {
    state.indexArticleList[1] = backtec
  },
  GET_GOODARTICLE: (state, goodarticle) => {
    state.indexArticleList[2] = goodarticle
  }
}

const actions = {
  async getIndexArticleList ({ state, commit }) {
    await Promise.all([
      api.getResContentList('webtec', 0, 5).then((response) => {
        commit('GET_INDEXWEBTEC', response.data.content)
      }).catch((error) => {
        console.log(error)
      }),
      api.getResContentList('backtec', 0, 5).then((response) => {
        commit('GET_BACKTEC', response.data.content)
      }).catch((error) => {
        console.log(error)
      }),
      api.getResContentList('goodarticles', 0, 5).then((response) => {
        commit('GET_GOODARTICLE', response.data.content)
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
