import * as api from '../../service/getData'
 // initial state
// shape: [{ id, quantity }]
const state = {
  userInfo: null,
  recommend: [],
  readyRank: [],
  currWidth: null,
  isMobile: null
}

const mutations = {
  SET_USERINFO: (state, data) => {
    state.userInfo = data
  },
  SET_CURRWIDTH: (state, data) => {
    if (data > 1000) {
      state.isMobile = false
    } else {
      state.isMobile = true
    }
    state.currWidth = data
  },
  GET_RECOMMEND: (state, data) => {
    state.recommend = data
  },
  GET_READYRANK: (state, data) => {
    state.readyRank = data
  }
}

const actions = {
  setUserInfo: ({ state, commit }, userInfo) => {
    commit('SET_USERINFO', userInfo)
  },
  setCurrWidth: ({ state, commit }, currWidth) => {
    commit('SET_CURRWIDTH', currWidth)
  },
  getUserInfo: ({ state, commit }, param) => {
    return api.getUserInfo().then((response) => {
      commit('SET_USERINFO', response.data)
    }).catch((error) => {
      console.log(error)
    })
  },
  getRecommend: ({ state, commit }, param) => {
    return api.getRecommend(param.type, param.size).then((response) => {
      commit('GET_RECOMMEND', response.data)
    }).catch((error) => {
      console.log(error)
    })
  },
  getReadyRank: ({ state, commit }, param) => {
    return api.getReadyRank(param.type, param.size).then((response) => {
      commit('GET_READYRANK', response.data)
    }).catch((error) => {
      console.log(error)
    })
  }
}

const getters = {
  getUserInfo: state => {
    return state.userInfo
  },
  setCurrWidth: state => {
    return state.currWidth
  },
  getReadyRank: state => {
    return state.readyRank
  },
  getRecommend: state => {
    return state.recommend
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
