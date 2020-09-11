//  Solution 1
 
function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false;
}
 

//  Solution 2
 
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}
 

//  Solution 3

 
function isDivisible(n, x, y) {
    return !(n % x || n % y)
}
 

//  Solution 4

function isDivisible(n, ...dividers) {
    return dividers.every(divider => !(n % divider))
}
 

//  Solution 5

function isDivisible(n, x, y) {
    return Number.isInteger(n / x) && Number.isInteger(n / y)
}
 

console.log(isDivisible(12, 3 , 5)); // false
console.log(isDivisible(12, 3 , 4)); // true