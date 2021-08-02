interface stateObject {
    elementsArray: Object[]
}

export default {
    actions: {
        async fetchElements(ctx:Object|any): Promise<void> {
            const res = await fetch("http://localhost:3000/getData")
            const elementsArray = await res.json()
            
            ctx.commit('updateElementsArray', elementsArray)
        }
    },
    mutations: {
        updateElementsArray(state:stateObject, newElementsArray: Object[]): void {
            state.elementsArray = newElementsArray
        }
    },
    state: {
        elementsArray: []
    },
    getters: {
        elementsArray(state:stateObject): Object[] {
            return state.elementsArray
        }
    }
}