export const state = () => ({
  message: 'Hello Vue.vuex!(モジュール)'
})

export const mutations = {
  updateMessage: function(state, payload) {
    state.message = payload
  }
}

export const actions = {
  updateMessageAction(context) {
    context.commit('updateMessage', 'Commit with payload(モジュール)')
  }
}
