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
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'Input'
})
export default class Input extends Vue {
    @Prop({required: true, type: Object}) input: Object|undefined
}
</script>