<template>
  <div class="analyze-item" :style="{backgroundColor: color}">
    <span class="font-style">{{title}}</span>
  </div>
</template>
<script>
  export default {
    props: ['color', 'title'],
    methods: {
      itemClicked() {
        console.log("clicked")
      }
    }
  }
</script>
<style>
  .analyze-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    padding: 5px;
  }

  .font-style {
    font-weight: bold;
  }
</style>