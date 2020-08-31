// Loop
var summation = function (num) {
    let sum = 0
    for(let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}

// Gauss Formula
var summation = function (num) {
    return num * (num + 1) / 2
}

// Reducer 
var summation = function (num) {
    return Array(num).fill(0).reduce((acc, _, index) => acc + index + 1, 0)
}

// Recurtion
var summation = function (num) {
    return num ? num + summation(num - 1) : num
}

console.log(summation(1));
console.log(summation(8));