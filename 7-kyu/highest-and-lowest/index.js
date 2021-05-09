function highAndLow(numbers) {
    const arr = numbers.split(" ")
    let maxNum = arr[0]
    let minNum = arr[0]

    for(let num of arr) {
        if(Number(num) > maxNum) {
            maxNum = num
        }

        if(Number(num) < minNum) {
            minNum = num
        }
    }

    return maxNum + " " + minNum
}

function highAndLow(numbers){
    const arr = numbers.split(" ").map(item => Number(item)).sort((a,b) => b - a)
    return String(arr[0] + " " + String(arr[arr.length - 1]))
}

function highAndLow(numbers){
    const arr = numbers.split(" ").map(Number).sort((a,b) => b - a)
    return arr[0] + " " + arr[arr.length - 1]
}

function highAndLow(numbers){
    const arr = numbers.split(" ").map(Number)
    return `${Math.max(...arr)} ${Math.min(...arr)}`
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")) // "542 -214"