<template>
    <button
        v-bind:action = "button.action"
        v-on:click = "buttonClick"
        v-bind:name = "button.name"
    >{{ button.title }}</button>
</template>

<script>
// маппим сущности из сторы
import { mapActions } from 'vuex'


export default ({
    methods: mapActions(['buttonClick']),
    props: ['button']
})
/* на кнопку просто вешается экшн,
при нажатии на кнопку этот экшн эмитается */
</script>
