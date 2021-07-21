<template>
    <div v-bind:name = "customGroup.name">
        <h3 v-on:click = "toggleGroupVisibility"
        >{{ customGroup.title }}</h3>
        <div>
            
        </div>
    </div>
</template>

<script>

export default ({
    data () {
        return {
            isVisible: true
        }
    },
    props: ['customGroup'],
    components: {
        
    },
    methods: {
        toggleGroupVisibility() {
            this.isVisible = !this.isVisible
        }
    }
})
</script>

<style scoped>
    div {
        border: 1px solid black;
    }
</style>