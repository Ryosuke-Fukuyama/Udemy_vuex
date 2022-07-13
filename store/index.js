import Vuex from 'vuex'

const createStore = () => {
 return new Vuex.Store({
   state: () => ({
      message: 'Hello Vue.vuex!'
   }),
  // 値を送る時
  //  mutations: {
  //   updateMessage: function(state) {
  //     state.message = 'Update!'
  //   }
  //  }
  // 値を受け取る時(第２引数を用意)
   mutations: {
    updateMessage: function(state, payload) {
      state.message = payload
    }
   },
  //  外部APIを利用する場合actionsを介する必要がある
   actions: {
    updateMessageAction(context) {
      context.commit('updateMessage', 'Commit with payload')
    }
   }
 })
}

// export default createStore
