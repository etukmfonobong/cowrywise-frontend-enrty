import axios from "axios"

const Axios = axios.create({
  withCredentials: false
})

const accKey = "YRcBdiRoYkul7dxtgFW2ljg4MuJUH-w-BheezIE5Qvo"
const state = {
  modalOpen: false,
  searching: null,
  searchTerm: "African",
  results: null,
  currentImg: {urls: {full: null}, user: {first_name: null, last_name: null, location: null}},
  random: null
}
const mutations = {
  UPDATE_MODAL_OPEN(state, payload) {
    state.modalOpen = payload;
  },
  UPDATE_SEARCHING(state, payload) {
    state.searching = payload;
  },
  UPDATE_SEARCH_TERM(state, payload) {
    state.searchTerm = payload;
  },
  UPDATE_RESULTS(state, payload) {
    state.results = payload;
  },
  UPDATE_CURRENT_IMG(state, payload) {
    state.currentImg = payload;
  },
  UPDATE_RANDOM(state, payload) {
    state.random = payload;
  },
}
const actions = {
  async getRandom({commit}) {
    commit("UPDATE_SEARCHING", true)
    try {
      const response = await Axios.get(`https://api.unsplash.com/search/photos?client_id=${accKey}&query=african&per_page=18`)
      commit("UPDATE_RESULTS", response.data.results)
    } catch (e) {
      console.log(e)
      commit("UPDATE_RESULTS", {errors: ["Sorry for the inconvinence, We are experiencing server issues"]})
    }
    commit("UPDATE_SEARCHING", false)
  },
  async makeNewSearch({commit}, searchValue) {
    commit("UPDATE_SEARCHING", true)
    commit("UPDATE_SEARCH_TERM", searchValue)
    let response
    try {
      response = await Axios.get(`https://api.unsplash.com/search/photos?client_id=${accKey}&query=${searchValue}&per_page=18`)
      commit("UPDATE_RESULTS", response.data.results)
    } catch (e) {
      console.log(e)
      commit("UPDATE_RESULTS", {errors: ["Sorry for the inconvinence, We are experiencing server issues"]})
    }
    commit("UPDATE_SEARCHING", false)
  },
  async toggleModal({commit}, {open, image}) {
    commit("UPDATE_CURRENT_IMG", image)
    commit("UPDATE_MODAL_OPEN", open)
  }
}
const getters = {
  modalOpen: state => state.modalOpen,
  searching: state => state.searching,
  searchTerm: state => state.searchTerm,
  results: state => state.results,
  currentImg: state => state.currentImg,
  random: state => state.random,
}

const searchModule = {
  state,
  mutations,
  actions,
  getters
};

export default searchModule