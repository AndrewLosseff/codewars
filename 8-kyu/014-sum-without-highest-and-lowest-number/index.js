// Solution 1
function sumArray(array) {
   if(array && array.length > 1) {
        const sortedArray = array.sort((a,b) => a - b).slice(1, -1)
        return sortedArray.reduce((acc, cur) => acc + cur , 0)
    }

    return 0
}

// Solution 2
function sumArray(array) {
    return Array.isArray(array) && array.length > 1
    ? array.reduce((acc,cur) => acc + cur, 0) - Math.min(...array) - Math.max(...array)
    : 0
}

console.log(sumArray([ 6, 2, 1, 8, 10 ]))
console.log(sumArray([]))