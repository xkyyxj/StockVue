import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Vuex from 'vuex'
import stockCreateStore from './store'

let store = stockCreateStore()
createApp(App).use(Vuex).use(Antd).use(store).mount('#app')
