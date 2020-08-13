// Solution 1
export function positiveSum(arr: number[]): number {
    const reducer = (accumulator: number, current: number) => accumulator + (current > 0 ? current : 0)
    return arr.reduce(reducer, 0);
}

// Solution 1.1
export const positiveSum = (arr: number[]) => arr.reduce((accumulator: number, current: number) => current > 0 ? accumulator + current : accumulator, 0)

// Solution 1.2
export const positiveSum = (arr: number[]) => arr.filter(num => num > 0).reduce((accumulator: number, current: number) => accumulator + current, 0)

// Soltion 1.3
export const positiveSum = (arr: number[]) => arr.reduce((accumulator: number, current: number) => accumulator + Math.max(current, 0), 0)

// Solution 2
export function positiveSum(arr: number[]): number {
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            sum += arr[i]
        }
    }

    return sum
}


console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([-1, -2, -3, -4, -5]));