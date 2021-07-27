<template>
  <button
        v-bind:action = "button.action"
        v-on:click = "buttonClick"
        v-bind:name = "button.name"
    >{{ button.title }}</button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapActions } from 'vuex';

@Options({
  name: 'Button',
  methods: mapActions(['buttonClick']),
  props: ['button']
})
export default class Button extends Vue {}
</script>
