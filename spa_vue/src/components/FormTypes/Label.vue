<template>
  <label v-bind:name = "label.name">{{ label.title }}</label>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'Label'
})
export default class Label extends Vue {
    @Prop({required: true, type: Object}) label: Object|undefined
}
</script>