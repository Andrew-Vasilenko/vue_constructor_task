<template>
    <button
        v-bind:action = "button.action"
        v-on:click = "Click"
        v-bind:name = "button.name"
    >{{ button.title }}</button>
</template>

<script>
export default ({
    props: ['button'],
    methods: {
        Click(event) {
            let buttonAction = event.target.getAttribute('action')
            this.$emit('buttonClick', buttonAction)
        }
    }
})
/* на кнопку просто вешается экшн,
при нажатии на кнопку этот экшн эмитается */
</script>
