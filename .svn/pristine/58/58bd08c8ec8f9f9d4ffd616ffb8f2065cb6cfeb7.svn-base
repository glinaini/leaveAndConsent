const user = {
  state: {
    user: {},
    type: '', // 获取审批的类型
    vacationId: '' // 获取审批的id
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    },
    // 获取审批的类型
    SET_TYPE: (state, type) => {
      state.type = type
    },
    SET_ID: (state, id) => {
      state.vacationId = id
    }
  },
  actions: {
    UserInfo({commit}, user) {
      commit('SET_USER', user)
    },
    VacType({commit}, type) {
      commit('SET_TYPE', type)
    },
    VacId({commit}, id) {
      commit('SET_ID', id)
    }
  }
}
export default user
