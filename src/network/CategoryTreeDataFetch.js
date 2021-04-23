import axios from 'axios'
const wasm = import('../wasm/pkg')
// import wasm from '../wasm/pkg'

// (async () => {
//     let moduleVal = await wasm
//     let value = [{
//         high: 12
//     }]
//     moduleVal.pass_value(value)
// })()

/**
 * 获取左树的结构数据，然后刷新界面
 * @param {*} resolve 
 * @param {*} reject 
 */
function fetchCategoryTreeData(resolve, reject) {
    console.log("before insert")
    axios.get("http://localhost:9091/queryConfig/categoryConfig").then((resp) => {
        let treeData = constructTreeLevel(resp.data)
        resolve(treeData)
        wasm.then((value) => {
            let value2 = [{
                high: 123
            }]
            console.log(value.pass_value(value2))
            console.log(value)
        })
    }).catch(resp => {
        console.log(resp)
        reject(resp)
    })
}

function constructTreeLevel(data) {
    if(!data || data.length === 0) {
        return;
    }

    let treeCategoryData = []

    for(let i = data.length - 1;i >= 0;i--) {
        if(!data[i].pkParent) {
            let tempItem = {
                title: data[i].categoryName,
                key: data[i].pkCategory,
                children: []
            }
            treeCategoryData.push(tempItem)
            constructTreeDep(tempItem, data)
        }
    }
    return treeCategoryData
}

function constructTreeDep(dataItem, data) {
    for(let i = data.length - 1;i >= 0;i--) {
        if(data[i].pkParent == dataItem.key) {
            let tempItem = {
                title: data[i].categoryName,
                key: data[i].pkCategory,
                children: []
            }
            dataItem.children.push(tempItem)
            constructTreeDep(tempItem, data)
        }
    }
}

export {
    fetchCategoryTreeData
}