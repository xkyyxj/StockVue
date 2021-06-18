<template>
    <div class="main-page">
        <MainPage/>
    </div>
</template>

<script>
import MainPage from './components/MainPage/MainPage.vue'
// import Comp from "@/Comp";

export default {
    name: 'App',
    data() {
      return {
          num: 10
      }
    },
    components: {
        MainPage,
    }
}
</script>

<style lang="less">
.main-page {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 5px;
    width: 100%;
    height: 100%;
}

.canvas-table {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}
</style>
