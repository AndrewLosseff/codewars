// Solution 1

export function isDivisible(n:number, x:number, y:number):boolean {
    return (n % x === 0 && n % y === 0) ? true : false;
}

// Solution 2

export function isDivisible(n:number, x:number, y:number):boolean {
  return n % x === 0 && n % y === 0
}


// Solution 3

export function isDivisible(n:number, x:number, y:number):boolean {
    return !(n % x || n % y)
}
 

// Solution 4

export function isDivisible(n: number, ...dividers: number[]): boolean {
    return dividers.every(divider => !(n % divider))
}
 

// Solution 5
  
export function isDivisible(n:number, x:number, y:number):boolean {
    return Number.isInteger(n / x) && Number.isInteger(n / y)
}
 

console.log(isDivisible(12, 3, 5)); // false
console.log(isDivisible(12, 3, 4)); // true