// Loop
export const summation = (num: number) => {
    let sum: number = 0
    for(let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}

// Gauss Formula
export const summation = (num: number) => num * (num + 1) / 2

// Recurtion
export const summation = (num: number) => {
    return num ? num + summation(num - 1) : num
}

console.log(summation(1));
console.log(summation(8));