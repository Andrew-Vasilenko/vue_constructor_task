<template>
    <div>
        <Button
            v-if = "element.type === 'Button'"
            v-bind:button = "element"

            v-on:buttonClick = "buttonClick"
        />

        <div class="groupDiv" v-if = "element.type === 'Group'">
            <h3 v-if = "element.type === 'Group'"
                v-on:click = "toggleGroupVisibility"
            >{{ element.title }}</h3>
            <div v-if="isVisible">
                <DisplayComponent 
                    v-for = "child in element.childs"
                    v-bind:element = "child"
                    v-bind:key = "child.type"

                    v-bind:groupTitle = "groupTitle"
                    v-bind:groupName = "groupName"
                    v-bind:groupChilds = "groupChilds"

                    v-on:buttonClick = "buttonClick"            
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

<script>
import Button from '@/components/FormTypes/Button'
import Label from '@/components/FormTypes/Label'
import Input from '@/components/FormTypes/Input'

export default {
    data () {
        return {
            isVisible: false
        }
    },
    props: [
        'element',
        'groupTitle',
        'groupName',
        'groupChilds'
    ],
    components: {
        Button:Button,
        Label:Label,
        Input:Input
    },
    methods: {
        buttonClick(buttonAction) {
            this.$emit('buttonClick', buttonAction)
        },
        toggleGroupVisibility() {
            this.isVisible = !this.isVisible
        }
    }
}
</script>

<style scoped>
    .groupDiv {
        border: 1px solid black;
    }
</style>

