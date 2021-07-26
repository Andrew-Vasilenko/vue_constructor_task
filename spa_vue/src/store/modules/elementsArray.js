export default {
    actions: {
        async fetchElements(ctx) {
            let res = await fetch("http://localhost:3000/getData")
            let elementsArray = await res.json()
            
            ctx.commit('updateElementsArray', elementsArray)
        }
    },
    mutations: {
        updateElementsArray(state, elementsArray){
            state.elementsArray = elementsArray
        }
    },
    state: {
        elementsArray: []
    },
    getters: {
        elementsArray(state){
            return state.elementsArray
        }
    }
}