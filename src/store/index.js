import { createStore } from 'vuex'
import mainPage from './modules/mainPage.js'

export default function stockCreateStore() {
    return createStore({
        modules: {
            mainPage
        }
    })
}