import axios from "axios"

const accKey = "YRcBdiRoYkul7dxtgFW2ljg4MuJUH-w-BheezIE5Qvo"
const state = {
  searching: null,
  searchTerm: "Fun",
  results: null,
  random: null
}
const mutations = {
  UPDATE_SEARCHING(state, payload) {
    state.searching = payload;
  },
  UPDATE_SEARCH_TERM(state, payload) {
    state.searchTerm = payload;
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
      commit("UPDATE_RESULTS", response.data)
    } catch (e) {
      console.log(e)
    }
    commit("UPDATE_SEARCHING", false)
  },
  async makeNewSearch({commit}, searchValue) {
    commit("UPDATE_SEARCHING", true)
    commit("UPDATE_SEARCH_TERM", searchValue)
    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos?client_id=${accKey}&query=${searchValue}&per_page=9`)
      commit("UPDATE_RESULTS", response.data.results)
      console.log(response.data.results)
    } catch (e) {
      console.log(e)
    }
    commit("UPDATE_SEARCHING", false)
  }
}
const getters = {
  searching: state => state.searching,
  searchTerm: state => state.searchTerm,
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