import { createStore } from 'vuex'
import axios from 'axios'
import Promise from 'core-js/features/promise'

const mainurl = 'https://fakerestapi.azurewebsites.net'

export default createStore({
  state: {
    activities: [],
    authors: [],
    books: [],
    coverPhotos: [],
    users: []
  },
  getters: {
  },
  mutations: {
    SAVE_ACTIVITIES(state, activities) {
      state.activities = activities;
    },
    SAVE_AUTHOR(state, authors) {
        state.authors = authors
    },
    SAVE_BOOK(state, books) {
        state.books = books;
    },
    SAVE_COVERPHOTOS(state, coverPhotos) {
        state.coverPhotos = coverPhotos
    },
    SAVE_USERS(state, users){
      state.users = users
    }
  },
  actions: {
    loadActivities({commit}){
      return new Promise((resolve) => {
        axios({ url: `${mainurl}/api/v1/Activities`, method: 'GET' })
          .then((resp) => {
            commit("SAVE_ACTIVITIES", resp)
            resolve(resp)
          })
      })
    },
    loadAuthors({commit}){
      return new Promise((resolve) => {
        axios({ url: `${mainurl}/api/v1/Authors`, method: 'GET' })
          .then((resp) => {
            commit("SAVE_AUTHOR", resp)
            resolve(resp)
          })
      })
    },
    loadBooks({commit}){
      return new Promise((resolve) => {
        axios({ url: `${mainurl}/api/v1/Books`, method: 'GET' })
          .then((resp) => {
            commit("SAVE_BOOK", resp)
            resolve(resp)
          })
      })
    },
    BookItem({commit}, {id}){
      return new Promise((resolve) => {
        axios({ url: `${mainurl}/api/v1/Books/${id}`, method: 'GET' })
          .then((resp) => {
            commit("SAVE_BOOK", resp)
            resolve(resp)
          })
      })
    },
    loadCoverPhoto({commit}){
      return new Promise((resolve) => {
        axios({ url: `${mainurl}/api/v1/CoverPhotos`, method: 'GET' })
          .then((resp) => {
            commit("SAVE_COVERPHOTOS", resp)
            resolve(resp)
          })
      })
    },
    loadUsers({commit}){
      return new Promise((resolve) => {
        axios({ url: `${mainurl}/api/v1/Users`, method: 'GET' })
          .then((resp) => {
            commit("SAVE_USERS", resp)
            resolve(resp)
          })
      })
    },
  },
  modules: {
  }
})
