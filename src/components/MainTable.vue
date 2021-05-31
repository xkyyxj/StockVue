<template>
  <a-table class="main-table" :columns="tableMeta" :data-source="tableData" bordered>
    <template v-for="col in cols" #[col]="{ text, record }" :key="col">
      <div>
        <a-input
          v-if="editableData[record.key]"
          v-model:value="editableData[record.key][col]"
          style="margin: -5px 0"
        />
        <template v-else>
          {{ text }}
        </template>
      </div>
    </template>
    <template #operation="{ record }">
      <div class="editable-row-operations">
        <span v-if="editableData[record.key]">
          <a @click="save(record.key)">Save</a>
          <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
            <a>Cancel</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a @click="edit(record.key)">Edit</a>
        </span>
      </div>
    </template>
  </a-table>
</template>
<script>
import { cloneDeep } from 'lodash-es';
import { mapState, mapActions } from 'vuex'
import { convertToCamelCase } from '../utils'

export default {
    data: () => {
        return {
            editableData: {}
        }
    },
    computed: mapState({
        tableMeta: state => {
            let oriTableMeta = state.mainPage.tableData.tableMeta
            if(!oriTableMeta) {
                return null
            }
            oriTableMeta = oriTableMeta.columnMeta
            let width = 100 / oriTableMeta.length
            width = width + "%"
            let columns = oriTableMeta.map(item => {
                let realColumn = {}
                realColumn.title = item.displayName
                // 列名转换成驼峰命名法，保证和返回的Meta数据相匹配
                realColumn.dataIndex = convertToCamelCase(item.columnName)
                realColumn.width = width
                realColumn.slots = {
                    customRender: item.columnName,
                }
                return realColumn
            })
            columns.push({
                title: 'operation',
                dataIndex: 'operation',
                slots: {
                    customRender: 'operation',
                },
            })
            return columns
        },
        tableData: state => {
            if(!state.mainPage.tableData.tableData) {
                return null
            }
            let processedData = state.mainPage.tableData.tableData.map((item, index) => {
                item.key = index
                return item
            })
            console.log(processedData)
            return processedData
        },
        cols: state => {
            let oriTableMeta = state.mainPage.tableData.tableMeta
            if(!oriTableMeta) {
                return null
            }
            oriTableMeta = oriTableMeta.columnMeta
            let columns = oriTableMeta.map(item => {
                return convertToCamelCase(item.columnName)
            })
            return columns
        }
    }),
    methods: {
        edit(key) {
            console.log(key)
            this.editableData[key] = cloneDeep(this.tableData.filter(item => key === item.key)[0]);
        },
        save(key) {
            Object.assign(this.tableData.filter(item => key === item.key)[0], this.editableData[key]);
            delete this.editableData[key];
        },
        cancel(key) {
            delete this.editableData[key];
        },
        ...mapActions([
            'mainPage/pullMainTableData'
        ])
    }
}
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}

.main-table {
    flex-grow: 1
}
</style>