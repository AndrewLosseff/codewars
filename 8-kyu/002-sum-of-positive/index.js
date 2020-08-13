// Solution 1
function positiveSum(arr) {
  const reducer = (accumulator, current) => accumulator + (current > 0 ? current : 0)
  return arr.reduce(reducer, 0)
}

// Solution 1.1
const positiveSum = arr => arr.reduce((accumulator, current) => current > 0 ? accumulator + current : accumulator, 0);

// Solution 1.2
const positiveSum = arr => arr.filter(number => number > 0).reduce((accumulator, current) => accumulator + current, 0)

// Solution 1.3
const positiveSum = arr => arr.reduce((accumulator, current) => accumulator + Math.max(current, 0), 0)

// Solution 2
function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) sum += arr[i]
    }
    return sum
}

// Solution 2.1
function positiveSum(arr) {
  let sum = 0
  arr.forEach(num => num > 0 && (sum += num))
  return sum
}

// Cases
console.log(positiveSum([1,-2,3,4,5]));
console.log(positiveSum([-1,-2,-3,-4,-5]));