export default {
    actions: {
        async toggleVisibility(ctx) {
            let newVisibilityStatus = !ctx.state.visibilityStatus
            ctx.commit('updateVisibilityStatus', newVisibilityStatus)
        }
    },
    mutations: {
        updateVisibilityStatus(state, newVisibilityStatus){
            state.visibilityStatus = newVisibilityStatus
        }
    },
    state: {
        visibilityStatus: false
    },
    getters: {
        visibilityStatus(state){
            return state.visibilityStatus
        }
    }
}