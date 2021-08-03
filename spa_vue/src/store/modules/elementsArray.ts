interface stateObject {
    elementsArray: Object[]
}

export default {
    actions: {
        async fetchElements(ctx:Object|any): Promise<void> {

            let ws = new WebSocket("ws://localhost:3000");

            ws.onopen = function(event) {
                console.log("WS connection established")
                ws.send("i_need_data");
            }

            ws.onmessage = function(event) {
                const elementsArray = JSON.parse(event.data) 
                ctx.commit('updateElementsArray', elementsArray)
                ws.close(1000, "you've done your job")
                console.log("WS connection closed")
            }
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