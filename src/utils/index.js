import { calculateMA } from './stockBaseInfoUtils'
export {
    calculateMA
}
export function convertToCamelCase(input) {
    let targetArray = input.split('_')
    if(targetArray.length <= 1) {
        return input
    }

    let targetStr = targetArray[0]
    for(let i = 1;i < targetArray.length;i++) {
        let tempChar = targetArray[i].charAt(0)
        tempChar = tempChar.toUpperCase()
        let tempStr = targetArray[i].replace(targetArray[i].charAt(0), tempChar)
        targetStr += tempStr
    }
    return targetStr
}

/**
 * 当前时间对应的字符串
 * @param yearNum: 年数
 * */
export function currTimeStr() {
    let myDate = new Date();
    return myDate.toLocaleString(); //获取日期与时间
}

/**
 * 当前时间N年之前的时间所对应的字符串
 * @param yearNum: 年数
 * */
export function currTimeYearBefore(yearNum) {
    let myDate = new Date();
    let year = myDate.getFullYear()
    myDate.setFullYear(year - yearNum)
    return myDate.toLocaleString();
}