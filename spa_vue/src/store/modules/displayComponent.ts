export default {
    actions: {
        async toggleVisibility(ctx:any): Promise<void> {
            let newVisibilityStatus:boolean = !ctx.state.visibilityStatus
            ctx.commit('updateVisibilityStatus', newVisibilityStatus)
        }
    },
    mutations: {
        updateVisibilityStatus(state:any, newVisibilityStatus:boolean): void{
            state.visibilityStatus = newVisibilityStatus
        }
    },
    state: {
        visibilityStatus: false
    },
    getters: {
        visibilityStatus(state:any): boolean{
            return state.visibilityStatus
        }
    }
}