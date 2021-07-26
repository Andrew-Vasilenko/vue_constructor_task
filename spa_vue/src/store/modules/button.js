export default {
    actions: {
        async buttonClick(ctx, event) {            
            let labels = document.getElementsByTagName('LABEL')
            let inputs = document.getElementsByTagName('INPUT')

            let responseObj = {}

            for (let i = 0; i < labels.length; i++){
                let label = labels[i].getAttribute('name')
                let input = inputs[i].value
                responseObj[label] = input
            }

            let buttonAction = event.target.getAttribute('action')
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
    mutations: {},
    state: {},
    getters: {}
}