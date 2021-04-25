import { fetchCategoryTreeData, fetchMainTableData } from '../../network'

const state = () => ({
    tableData: {},
    leftTreeData: []
})

const actions = {
    pullTreeData: ({ commit }) => {
        fetchCategoryTreeData((data) => {
            commit('setTreeData', data)
        }, () => {
            // 错误处理程序
        })
    },

    pullMainTableData: ({ commit }, tableId) => {
        fetchMainTableData(tableId, (data) => {
            commit('setMainTableData', data)
        }, () => {
            // 错误处理程序
        })
    }
}

const mutations = {
    setTreeData(state, treeData) {
        state.leftTreeData = treeData
    },

    setMainTableData(state, tableData) {
        state.tableData = tableData
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}