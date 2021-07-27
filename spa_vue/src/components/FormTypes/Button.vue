<template>
  <button
        v-bind:action = "button.action"
        v-on:click = "buttonClick"
        v-bind:name = "button.name"
    >{{ button.title }}</button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { mapActions } from 'vuex';

@Options({
  name: 'Button',
  methods: mapActions(['buttonClick'])
})
export default class Button extends Vue {
    @Prop({required: true, type: Object}) button: Object|undefined
}
</script>
