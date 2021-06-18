<template>
    <div>hahahahha</div>
    <slot name="ha" :test="value1"></slot>
</template>

<script>
export default {
    name: "Comp",
    data() {
        return {
            value1: 'C艹'
        }
    }
}
</script>

<style scoped>

</style>