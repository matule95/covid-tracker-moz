const API_ENDPOINT = 'https://corona.lmao.ninja/v2/countries'
export const state = () => ({
  all: []
})
export const actions = {
  fetchItems({ commit }) {
    return this.$axios
      .get(API_ENDPOINT)
      .then(({ data }) => {
        commit('SET_ITEMS', data)
        return Promise.resolve(data)
      })
      .catch(error => {
        commit('SET_ITEMS', [])
        return Promise.reject(error)
      })
  }
}
export const mutations = {
  SET_ITEMS: (state, items) => {
    state.all = items
  }
}
