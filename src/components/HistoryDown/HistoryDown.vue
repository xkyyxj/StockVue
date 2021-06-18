<template>
    <div class="history-down">
        <KLineMap/>
        <MainTable :rowDoubleClicked="tableRowDblSelected"></MainTable>
    </div>
</template>
<script>
import MainTable from '../CommonComponents/MainTable'
// import { onMounted } from 'vue'
import KLineMap from "@/components/CommonComponents/KLineMap";
import {mapActions} from "vuex";
export default {
    components: {
        MainTable, KLineMap
    },
    setup() {

    },
    props: ['color', 'title'],
    methods: {
        itemClicked() {
            console.log("clicked")
        },
        tableRowDblSelected(record, index) {
            this['tableAndMap/pullStockBaseInfo'](record.tsCode)
            console.log(record.tsCode)
            console.log(record)
            console.log(index)
        },
        ...mapActions([
            'tableAndMap/pullStockBaseInfo'
        ])
    },
    mounted() {
        console.log("not running ???")
        this.$store.dispatch('mainPage/pullMainTableData', '6')
    }
}
</script>
<style>
.history-down {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

#charts {
    width: 100%;
    height: fit-content;
}

.font-style {
    font-weight: bold;
}
</style>