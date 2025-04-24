// src/stores/count.js
import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
  state: () => ({
    num: 10
  }),
  getters: {
    doubleNum: (state) => state.num * 2
  },
  actions: {
    increment() {
      this.num++
    }
  }
})
