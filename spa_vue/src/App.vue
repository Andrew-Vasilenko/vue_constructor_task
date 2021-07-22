<template>
  <form v-on:submit.prevent>
    <DisplayComponent
      v-for = "element in elementsArray"
      v-bind:element = "element"
      v-bind:key = "element.type"

      v-on:buttonClick = "buttonClick"
    />
  </form>
</template>

<script>
import DisplayComponent from '@/components/DisplayComponent'

export default {
  name: 'App',
  data() {
    return {
      elementsArray: []
    }
  },
  mounted() {
    fetch("http://localhost:3000/getData")
      .then(response => response.json())
      .then(json => {
        this.elementsArray = json
      })
  },
  components: {
    DisplayComponent:DisplayComponent
  },
  methods: {
    buttonClick(buttonAction) {
        // console.log(buttonAction)
        let labels = document.getElementsByTagName('LABEL')
        let inputs = document.getElementsByTagName('INPUT')

        let responseObj = {
          labels: [],
          inputs: []
        }

        for (let i = 0; i < labels.length; i++){
          let label = labels[i].textContent
          let input = inputs[i].value
          responseObj.labels.push(label)
          responseObj.inputs.push(input)
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
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
