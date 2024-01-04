import payload from '../static/data/finalPayload.json'
export const state = () => ({
  all: []
})
export const actions = {
  fetchAll({ commit }) {
    // read JSON file
    const data = payload
    commit('SET_ITEMS', {
      key: 'all',
      items: data
    })
    // return this.$axios
    //   .get('/getData')
    //   .then(({ data }) => {
    //     commit('SET_ITEMS', {
    //       key: 'all',
    //       items: data
    //     })
    //   })
    //   .catch(error => Promise.reject(error))
  }
}
export const mutations = {
  SET_ITEMS: (state, { key, items }) => {
    state[key] = items
  }
}
