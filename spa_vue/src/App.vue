<template>
  <form v-on:submit.prevent>
    <DisplayComponent
      v-for = "element in elementsArray"
      v-bind:element = "element"
      v-bind:key = "element.type"
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