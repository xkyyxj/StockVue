import { createStore } from 'vuex'
import mainPage from './modules/mainPage.js'
import tableAndMap from "@/store/modules/tableAndMap";

export default function stockCreateStore() {
    return createStore({
        modules: {
            mainPage,
            tableAndMap
        }
    })
}