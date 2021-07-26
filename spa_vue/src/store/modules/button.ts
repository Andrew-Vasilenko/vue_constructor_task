export default {
    actions: {
        async buttonClick(ctx:any, event:any): Promise<void> {            
            let labels:any = document.getElementsByTagName('LABEL')
            let inputs:any = document.getElementsByTagName('INPUT')

            let responseObj:any = {}

            for (let i:number = 0; i < labels.length; i++){
                let label:any = labels[i].getAttribute('name')
                let input:any = inputs[i].value
                responseObj[label] = input
            }

            ctx.commit('updatePageData', responseObj)

            let buttonAction:any = event.target.getAttribute('action')
            switch(buttonAction) {
                case 'alert':
                    alert(JSON.stringify(ctx.state.pageData))
                    break
                case 'console.log':
                    console.log(JSON.stringify(ctx.state.pageData))
                    break
            }
        }
    },
    mutations: {
        updatePageData(state:any, newPageData:Object): void{
            state.pageData = newPageData
        }
    },
    state: {
        pageData: {}
    },
    getters: {
        pageData(state:any): Object{
            return state.pageData
        }
    }
}