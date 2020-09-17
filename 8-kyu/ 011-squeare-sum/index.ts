// 1 number * number
// 2 Math.pow(number, 2)
// 3 number **2


// Loop
export function squareSum(numbers: number[]): number {
    let sum = 0
    for(const num of numbers) {
        sum += num * num
    }
    return sum
}


// Reducer
export function squareSum(numbers: number[]): number {
    const multiply = (num: number) => Math.pow(num, 2)
    const reducer = (acc: number, cur: number) => acc + cur
    return Array.from(numbers, multiply).reduce(reducer, 0)
}

export function squareSum(numbers: number[]): number {
    return numbers.map(multiply).reduce(reducer ,0)
}
function multiply(num: number): number{
    return num **2
}
function reducer(acc: number, cur: number): number {
    return acc + cur
}

export function squareSum(numbers: number[]): number {
    return numbers.reduce((acc: number, cur: number) => acc + (cur **2), 0)
}

//ForEach
export function squareSum(numbers: number[]): number  {
    let sum: number = 0
    numbers.forEach( (num) => {
        sum += Math.pow(num, 2)
    })
    return sum
}

console.log(squareSum([0, 3, 4, 5]))
console.log(squareSum([]))