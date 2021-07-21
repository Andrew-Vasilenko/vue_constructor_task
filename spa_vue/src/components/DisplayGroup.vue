<template>
    <div>
        <!-- <br>
        {{ element }}
        <br> -->
        <Button
            v-if = "element.type === 'Button'"
            v-bind:button = "element"

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

export default ({
    props: ['element'],
    components: {
        Button:Button,
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