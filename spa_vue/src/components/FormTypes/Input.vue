<template>
    <div>
        <input type="text"
            v-bind:value = "input.title"
            v-bind:name = "input.name"
        >
    </div>
</template>

<script>
export default {
    props: ['input']
}
</script>
