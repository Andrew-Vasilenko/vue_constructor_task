<template>
  <label v-bind:name = "label.name">{{ label.title }}</label>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'Label',
  props: ['label']
})
export default class Label extends Vue {}
</script>