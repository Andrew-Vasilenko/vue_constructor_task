<template>
    <label v-bind:name = "label.name">{{ label.title }}</label>
</template>

<script>
export default {
    props: ['label']
}
</script>
