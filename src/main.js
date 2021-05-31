import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Vuex from 'vuex'
import { createRouter, createWebHashHistory } from "vue-router";
import stockCreateStore from './store'

let store = stockCreateStore()

// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [

]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

createApp(App).use(Vuex).use(Antd).use(store).use(router).mount('#app')
