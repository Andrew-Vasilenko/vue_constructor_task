interface stateObject {
    pageData: Object
}

export default {
    actions: {
        async buttonClick(ctx:Object|any, event:Object|any): Promise<void> {            
            const labels:HTMLCollectionOf<Element> = document.getElementsByTagName('LABEL')
            const inputs:HTMLCollectionOf<Element>|any = document.getElementsByTagName('INPUT')

            const responseObj:Object|any = {}

            for (let i:number = 0; i < labels.length; i++){
                const label:string|any = labels[i].getAttribute('name')
                const input:string|any = inputs[i].value
                responseObj[label] = input
            }

            ctx.commit('updatePageData', responseObj)

            const buttonAction:string = event.target.getAttribute('action')
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
        updatePageData(state:stateObject, newPageData:Object): void{
            state.pageData = newPageData
        }
    },
    state: {
        pageData: {}
    },
    getters: {
        pageData(state:stateObject): Object{
            return state.pageData
        }
    }
}