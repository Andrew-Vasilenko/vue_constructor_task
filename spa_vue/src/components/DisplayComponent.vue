<template>
    <div>
        <Button
            v-if = "element.type === 'Button'"
            v-bind:button = "element"

            v-on:buttonClick = "buttonClick"
        />
        <Group
            v-if = "element.type === 'Group'"
            v-bind:groupName = "element.title"
            v-bind:groupElementsArray = "element.childs"

            v-on:buttonClick = "buttonClick"
        />
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
import Group from '@/components/FormTypes/Group'

export default ({
    props: ['element'],
    components: {
        Button:Button,
        Group:Group,
        Label:Label,
        Input:Input
    },
    methods: {
        buttonClick(buttonAction) {
            this.$emit('buttonClick', buttonAction)
        }
    }
})
</script>



