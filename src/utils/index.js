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