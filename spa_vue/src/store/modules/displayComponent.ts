interface stateObject {
    visibilityStatus: boolean
}

export default {
    actions: {
        async toggleVisibility(ctx:Object|any): Promise<void> {
            const newVisibilityStatus:boolean = !ctx.state.visibilityStatus
            ctx.commit('updateVisibilityStatus', newVisibilityStatus)
        }
    },
    mutations: {
        updateVisibilityStatus(state:stateObject, newVisibilityStatus:boolean): void{
            state.visibilityStatus = newVisibilityStatus
        }
    },
    state: {
        visibilityStatus: false
    },
    getters: {
        visibilityStatus(state:stateObject): boolean{
            return state.visibilityStatus
        }
    }
}