<template>
  <form>
    <DisplayComponent
      v-for = "element in elementsArray"
      v-bind:element = "element"
      v-bind:key = "element.type"
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
