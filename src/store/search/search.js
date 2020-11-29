import axios from "axios"

const accKey = "YRcBdiRoYkul7dxtgFW2ljg4MuJUH-w-BheezIE5Qvo"
const state = {
  searching: null,
  results: null,
  random: null
}
const mutations = {
  UPDATE_SEARCHING(state, payload) {
    state.searching = payload;
  },
  UPDATE_RESULTS(state, payload) {
    state.results = payload;
  },
  UPDATE_RANDOM(state, payload) {
    state.random = payload;
  },
}
const actions = {
  async getRandom({commit}) {
    commit("UPDATE_SEARCHING", true)
    try {
      const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${accKey}&count=9`)
      commit("UPDATE_RANDOM", response.data)
    } catch (e) {
      console.log(e)
    }
    commit("UPDATE_SEARCHING", false)
  }
}
const getters = {
  searching: state => state.searching,
  results: state => state.results,
  random: state => state.random,
}

const searchModule = {
  state,
  mutations,
  actions,
  getters
};

export default searchModule