<template>
  <a-tree :tree-data="treeData" default-expand-all @select="onSelect" >
  </a-tree>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: mapState({
        treeData: state => state.mainPage.leftTreeData
    }),
    methods: {
        onSelect(selectedKeys, info) {
            this.$store.dispatch('mainPage/pullMainTableData', selectedKeys[0])
            console.log('selected', selectedKeys, info);
        },
        onCheck(checkedKeys, info) {
            console.log('onCheck', checkedKeys, info);
        },
        ...mapActions([
            'mainPage/pullTreeData',
            'mainPage/pullMainTableData'
        ])
    },
    created () {
        this.$store.dispatch('mainPage/pullTreeData')
    },
};
</script>
