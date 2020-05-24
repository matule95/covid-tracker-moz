const API_ENDPOINT = 'https://covidreportmz-api.herokuapp.com/stats'
export const state = () => ({
  all: [],
  dailyInformation: [],
  weeklyInformation: []
})
export const actions = {
  fetchItems({ commit }) {
    return this.$axios
      .get(API_ENDPOINT)
      .then(({ data: { data } }) => {
        commit('SET_ITEMS', {
          key: 'all',
          items: data
        })
        return Promise.resolve(data)
      })
      .catch(error => {
        commit('SET_ITEMS', [])
        return Promise.reject(error)
      })
  },
  fetchDailyInformation({ commit }) {
    return this.$axios
      .get('https://covid-19-tracker-moz.firebaseio.com/dailyInformation.json')
      .then(({ data }) => {
        commit('SET_ITEMS', {
          key: 'dailyInformation',
          items: data
        })
        return Promise.resolve(data)
      })
      .catch(error => {
        commit('SET_ITEMS', [])
        return Promise.reject(error)
      })
  },
  fetchWeeklyInformation({ commit }) {
    return this.$axios
      .get('https://covid-19-tracker-moz.firebaseio.com/weeklyInformation.json')
      .then(({ data }) => {
        commit('SET_ITEMS', {
          key: 'weeklyInformation',
          items: data
        })
        return Promise.resolve(data)
      })
      .catch(error => {
        commit('SET_ITEMS', [])
        return Promise.reject(error)
      })
  }
}
export const mutations = {
  SET_ITEMS: (state, { key, items }) => {
    state[key] = items
  }
}
