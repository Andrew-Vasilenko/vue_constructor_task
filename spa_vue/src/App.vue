<template>
  <form v-on:submit.prevent>
    <DisplayComponent
      v-for = "element in elementsArray"
      v-bind:element = "element"
      v-bind:key = "element.type"
    />
  </form>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import DisplayComponent from '@/components/DisplayComponent.vue';
import { mapGetters, mapActions } from 'vuex';

@Options({
  name: 'App',
  computed: mapGetters(['elementsArray']),
  methods: mapActions(['fetchElements']),
  async mounted() {
    this.fetchElements();
  },
  components: {
    DisplayComponent,
  },
})
export default class App extends Vue {}
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