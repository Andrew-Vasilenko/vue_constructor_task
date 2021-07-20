<template>

</template>

<script>

export default {
  name: 'App',
  mounted() {
    fetch("http://localhost:3000/getData")
      .then(response => response.json())
      .then(json => console.log(json))
  },
  components: {
    
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
