import axios from 'axios'
/**
 * 获取主表的结构数据，然后刷新界面
 * @param {*} resolve 
 * @param {*} reject 
 */
 function fetchMainTableData(tableId, resolve, reject) {
     // 请求表格元数据
    axios.get("http://localhost:9091/queryTableData/tableMeta/" + tableId).then((resp) => {
        let finalData = {}
        finalData.tableMeta = resp.data
        let tableName = resp.data.tableName
        // 请求列表数据
        let requestUrl = "http://localhost:9091/queryTableData/tableData/" + tableName
        axios.post(requestUrl, {
            in_date: '20201123'
        }).then(resp => {
            finalData.tableData = resp.data
            resolve(finalData)
        })
    }).catch(resp => {
        reject(resp)
    })
}

export {
    fetchMainTableData
}