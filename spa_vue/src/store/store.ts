import { createStore } from 'vuex'

// регистрация модулей
import elementsArray from './modules/elementsArray'
import displayComponent from './modules/displayComponent'
import button from './modules/button'

// Create a new store instance.
export default createStore({
  modules: {
    elementsArray:elementsArray,
    displayComponent:displayComponent,
    button:button
  }
})