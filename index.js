const largestSubarraySum = (array) => {
    let result = []
    let tempResult = []
    let max = 0
    let tempMax = 0
    array.forEach(num => {
        tempResult.push(num)
        tempMax += num
        if(tempMax < 0) {
            tempMax = 0
            tempResult = []
        } else if(tempMax > max) {
            result = tempMax
            max = tempMax
        }
    });
    return result
}