<template>
  <div>
        <input type="text"
            v-bind:value = "input.title"
            v-bind:name = "input.name"
        >
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'Input',
  props: ['input']
})
export default class Input extends Vue {}
</script>