<template>
  <div class="main-page">
    <CategoryTree/>
    <div class="canvas-table">
        <canvas id="canvas"/>
        <MainTable/>
    </div>
  </div>
</template>

<script>
import CategoryTree from './components/CategoryTree.vue'
import MainTable from './components/MainTable.vue'

export default {
  name: 'App',
  components: {
    MainTable,
    CategoryTree
  }
}
</script>

<style lang="less">
.main-page {
    display: flex;
    flex-direction: row;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}

.canvas-table {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}
</style>
