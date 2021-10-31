export const state = () => ({
  all: [],
  overall: [],
  charts: [],
  countryMap: []
})
export const actions = {
  fetchAll({ commit }) {
    return this.$axios
      .get('/getData')
      .then(({ data }) => {
        commit('SET_ITEMS', {
          key: 'all',
          items: data
        })
      })
      .catch(error => Promise.reject(error))
  },
  fetchOverall({ commit }) {
    return this.$axios
      .get('/overall')
      .then(({ data }) => {
        commit('SET_ITEMS', {
          key: 'overall',
          items: data
        })
      })
      .catch(error => Promise.reject(error))
  },
  fetchCharts({ commit }) {
    return this.$axios
      .get('/charts')
      .then(({ data }) => {
        commit('SET_ITEMS', {
          key: 'charts',
          items: data
        })
      })
      .catch(error => Promise.reject(error))
  },
  fetchCountryMap({ commit }) {
    return this.$axios
      .get('/country_map')
      .then(({ data }) => {
        commit('SET_ITEMS', {
          key: 'countryMap',
          items: data
        })
      })
      .catch(error => Promise.reject(error))
  }
}
export const mutations = {
  SET_ITEMS: (state, { key, items }) => {
    state[key] = items
  }
}
