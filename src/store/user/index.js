const state = {
  userInfo: null,
};

const mutations = {

  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo
  }
};


const getters = {
  userInfo:state => state.userInfo
};


const actions = {
  getUserInfo({commit}, info) {
      commit('SET_USER_INFO', info)
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}


