interface stateObject {
    elementsArray: Object[]
}

export default {
    actions: {
        async fetchElements(ctx:Object|any): Promise<void> {

            const eventSource = new EventSource('http://localhost:3000/getData')
            eventSource.onopen = function(e) {
                console.log("Connection to the server established")
            }
            eventSource.addEventListener('elementsArray', function(e:any) {
                const elementsArray = JSON.parse(e.data)
                console.log("Data received")
                ctx.commit('updateElementsArray', elementsArray)
                eventSource.close()
                console.log("Connection with server dropped")
            })
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

// let ws = new WebSocket("ws://localhost:3000");

//             ws.onopen = function(event) {
//                 console.log("WS connection established")
//                 ws.send("i_need_data");
//             }

//             ws.onmessage = function(event) {
//                 const elementsArray = JSON.parse(event.data) 
//                 ctx.commit('updateElementsArray', elementsArray)
//                 ws.close(1000, "you've done your job")
//                 console.log("WS connection closed")
//             }
