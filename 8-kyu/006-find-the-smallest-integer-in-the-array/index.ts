// 1  Math.min
export function findSmallestInt(args: number[]): number {
    return Math.min(...args)
}

// 2 Sort
export function findSmallestInt(args: number[]): number {
    return args.sort((a, b) => a - b)[0]
}

export function findSmallestInt(args: number[]): number {
    return args.sort((a, b) => a - b).shift()
}

// 3 Reducer
export function findSmallestInt(args: number[]): number {
    return args.reduce((acc, cur) => acc < cur ? acc : cur)
}

// 4 Loop
export function findSmallestInt(args: number[]): number {
    let minNumber = args[0]
    for( let i = 0; i < args.length; i++){
        if (args[i] < minNumber) minNumber = args[i]
    }

    return minNumber
}

export function findSmallestInt(args: number[]): number {
    let minNumber = args[0]
    args.forEach(num => (num < minNumber) && (minNumber = num))
    return minNumber
}

console.log(findSmallestInt([78, 56, 232, 12, 8]));
console.log(findSmallestInt([34, -345, -1, 100]));