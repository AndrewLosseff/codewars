// 1 number * number
// 2 Math.pow(number, 2)
// 3 number **2

// Loop
function squareSum(numbers) {
    let sum = 0
    for( let i = 0; i < numbers.length; i++) {
        sum += numbers[i] **2
    }
    return sum
}


// Reducer
function squareSum(numbers) {
    const multiply = number => number * number
    const reducer = (acc, cur) => acc + cur
    return Array.from(numbers, multiply).reduce(reducer, 0)
}

// Reducer

function squareSum(numbers) {
    return numbers.map(multiply).reduce(reducer, 0)
}
function multiply(number) {
    return Math.pow(number, 2)
}
function reducer(acc, cur) {
    return acc + cur
}

// Reducer

function squareSum(numbers) {
    return numbers.reduce( (acc, cur) => acc + (cur **2), 0)
}


//ForEach
function squareSum(numbers) {
    let sum = 0
    numbers.forEach( number => {
        sum += (number * number)
    })
    return sum
}


console.log(squareSum([0, 3, 4, 5]))
console.log(squareSum([]))