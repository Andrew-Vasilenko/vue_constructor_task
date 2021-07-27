<template>
  <div>
        <Button
            v-if = "element.type === 'Button'"
            v-bind:button = "element"
        />

        <div class="groupDiv" v-if = "element.type === 'Group'">
            <h3 v-if = "element.type === 'Group'"
                v-on:click = "toggleVisibility"
            >{{ element.title }}</h3>
            <div v-if = "visibilityStatus">
                <DisplayComponent 
                    v-for = "child in element.childs"
                    v-bind:element = "child"
                    v-bind:key = "child.type"

                    v-bind:groupTitle = "groupTitle"
                    v-bind:groupName = "groupName"
                    v-bind:groupChilds = "groupChilds"
                />   
            </div>
        </div>        
             
        <Label
            v-if = "element.type === 'Label'"
            v-bind:label = "element"
        />
        <Input
            v-if = "element.type === 'Input'"
            v-bind:input = "element"
        />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import Button from '@/components/FormTypes/Button.vue';
import Label from '@/components/FormTypes/Label.vue';
import Input from '@/components/FormTypes/Input.vue';
import { mapGetters, mapActions } from 'vuex';

@Options({
  name: 'DisplayComponent',
  computed: mapGetters(['visibilityStatus']),
  methods: mapActions(['toggleVisibility']),
  components: {
    Button,
    Label,
    Input
  }
})
export default class DisplayComponent extends Vue {
    @Prop({required: true, type: Object}) element: Object|undefined
    @Prop({required: false, type: String, default: 'groupTitle was now specified'}) groupTitle: string|undefined
    @Prop({required: false, type: String, default: 'groupName was now specified'}) groupName: string|undefined
    @Prop({required: false, type: Array}) groupChilds: Object[]|undefined
}
</script>

<style scoped>
    .groupDiv {
        border: 1px solid black;
    }
</style>