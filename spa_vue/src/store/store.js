import { createStore } from 'vuex'

// регистрация модулей
import elementsArray from './modules/elementsArray'

// Create a new store instance.
const store = createStore({
  modules: {
    elementsArray:elementsArray
  }
})

export default store;