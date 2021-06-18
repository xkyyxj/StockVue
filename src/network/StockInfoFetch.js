import {currTimeStr, currTimeYearBefore} from "@/utils";
import axios from "axios";

function fetchStockBaseInfo(callback, errCallback, tsCode, beginDate, endDate) {
    if(!tsCode) {
        return;
    }
    if(!beginDate) {
        // FIXME -- 此处写死了，后续可以通过界面来录入
        beginDate = currTimeYearBefore(3);
    }
    if(!endDate) {
        endDate = currTimeStr();
    }

    axios({
        method: 'post',
        url: 'http://localhost:9091/stockInfo/baseInfo',
        headers:{
            'Content-type': 'application/json'
        },
        data: {
            ts_code: tsCode,
            begin_date: beginDate,
            end_date: endDate
        }
    }).then((resp) => {
        callback(resp.data)
    })
}

export {
    fetchStockBaseInfo
}