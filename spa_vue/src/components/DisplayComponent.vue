<template>
    <div>
        <br>
        <!-- {{ element }} -->
        <br>
        <Button v-if = "element.type === 'Button'"/>
        <Group v-if = "element.type === 'Group'"/>
        <Label v-if = "element.type === 'Label'"/>
        <Input v-if = "element.type === 'Input'"/>
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
