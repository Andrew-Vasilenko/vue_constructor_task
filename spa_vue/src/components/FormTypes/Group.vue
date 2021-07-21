<template>
    <div class="groupDiv">
        <h3 v-on:click = "toggleGroupVisibility">{{ groupName }}</h3>
        <div v-if = "isVisible">
            <DisplayGroup
            
                v-for = "element in groupElementsArray"
                v-bind:element = "element"
                v-bind:key = "element.type"

                v-on:buttonClick = "buttonClick"
            />
        </div>
        
    </div>
</template>

<script>
import DisplayGroup from '@/components/DisplayGroup'

export default {
    data () {
        return {
            isVisible: false
        }
    },
    props: [
        'groupName',
        'groupElementsArray'
    ],
    components: {
        DisplayGroup:DisplayGroup
    },
    methods: {
        toggleGroupVisibility() {
            this.isVisible = !this.isVisible
        },
        buttonClick(buttonAction) {
            this.$emit('buttonClick', buttonAction)
        }
    }
}
</script>

<style scoped>
    .groupDiv {
        border: 1px solid black;
    }
</style>