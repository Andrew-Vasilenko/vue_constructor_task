<template>
    <div>
        <!-- <br>
        {{ element }}
        <br> -->
        <Button
            v-if = "element.type === 'Button'"
            v-bind:button = "element"
        />
        <Group
            v-if = "element.type === 'Group'"
            v-bind:customGroup = "element"
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
import Group from '@/components/FormTypes/Group'
import Label from '@/components/FormTypes/Label'
import Input from '@/components/FormTypes/Input'

export default ({
    props: ['element'],
    components: {
        Button:Button,
        Group:Group,
        Label:Label,
        Input:Input
    }
})
</script>
