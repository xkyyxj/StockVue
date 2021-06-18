function calculateMA(dayCount, baseInfos) {
    let result = [];
    for (let i = 0, len = baseInfos.values.length; i < len; i++) {
        if (i < dayCount) {
            result.push('-');
            continue;
        }
        let sum = 0;
        for (let j = 0; j < dayCount; j++) {
            sum += baseInfos.values[i - j][1];
        }
        result.push(+(sum / dayCount).toFixed(3));
    }
    return result;
}

export {
    calculateMA
}