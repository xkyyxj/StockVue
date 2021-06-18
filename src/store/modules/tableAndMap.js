import { fetchStockBaseInfo } from '../../network'

const state = () => ({
    stockBaseInfo: [],
    mainTableData: {}
})

const actions = {
    pullStockBaseInfo: ({ commit }, ts_code, begin_date, end_date) => {
        fetchStockBaseInfo((data) => {
            commit('setStockBaseInfo', data)
        }, () => {

        }, ts_code, begin_date, end_date)
    }
}

const mutations = {
    setStockBaseInfo(state, baseInfoData) {
        state.stockBaseInfo = baseInfoData
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}