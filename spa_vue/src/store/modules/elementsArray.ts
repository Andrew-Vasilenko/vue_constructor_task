export default {
    actions: {
        async fetchElements(ctx:any): Promise<void> {
            let res = await fetch("http://localhost:3000/getData")
            let elementsArray = await res.json()
            
            ctx.commit('updateElementsArray', elementsArray)
        }
    },
    mutations: {
        updateElementsArray(state:any, elementsArray: any): void {
            state.elementsArray = elementsArray
        }
    },
    state: {
        elementsArray: []
    },
    getters: {
        elementsArray(state:any): Object[] {
            return state.elementsArray
        }
    }
}