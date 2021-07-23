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

// маппим сущности из сторы
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: mapGetters(['elementsArray']),
  methods: mapActions(['fetchElements']),
  async mounted() {
    this.fetchElements();
  },
  components: {
    DisplayComponent:DisplayComponent
  },
  // methods: {
  //   buttonClick(buttonAction) {
  //       let labels = document.getElementsByTagName('LABEL')
  //       let inputs = document.getElementsByTagName('INPUT')

  //       let responseObj = {}

  //       for (let i = 0; i < labels.length; i++){
  //         let label = labels[i].getAttribute('name')
  //         let input = inputs[i].value
  //         responseObj[label] = input
  //       }

  //       switch(buttonAction) {
  //         case 'alert':
  //           alert(JSON.stringify(responseObj))
  //           break
  //         case 'console.log':
  //           console.log(JSON.stringify(responseObj))
  //           break
  //       }
  //   }
  // },
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
