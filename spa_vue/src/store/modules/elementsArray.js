export default {
    actions: {
        async fetchElements(ctx) {
            let res = await fetch("http://localhost:3000/getData")
            let elementsArray = await res.json()
            
            ctx.commit('updateElementsArray', elementsArray)
        },
        async buttonClick(ctx, buttonAction) {            
            let labels = document.getElementsByTagName('LABEL')
            let inputs = document.getElementsByTagName('INPUT')

            let responseObj = {}

            for (let i = 0; i < labels.length; i++){
                let label = labels[i].getAttribute('name')
                let input = inputs[i].value
                responseObj[label] = input
            }

            switch(buttonAction) {
                case 'alert':
                    alert(JSON.stringify(responseObj))
                    break
                case 'console.log':
                    console.log(JSON.stringify(responseObj))
                    break
            }
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