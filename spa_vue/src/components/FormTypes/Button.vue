<template>
    <button
        v-bind:name = "button.name"
    >{{ button.title }}</button>
</template>

<script>
export default ({
    props: ['button'],
    methods: {

    }
})
</script>
