// SOLUTION 1

// function findOdd(arr) {
//   const hashTable = {}
//   for(let i = 0; i < arr.length; i++) {
//       if(hashTable[arr[i]]) {
//           hashTable[arr[i]]++
//       } else {
//           hashTable[arr[i]] = 1
//       }
//   }

// let filteredByValue
// for(let key in hashTable) {
//     if(hashTable.hasOwnProperty(key)) {
//         var value = hashTable[key];
//         if(value & 2 !== 0) filteredByValue = key
//     }
// }

//   return parseInt(filteredByValue);
// }


// SOLUTION 2

// function findOdd(arr) {
//   const hashTable = {}
//   for(let i = 0; i < arr.length; i++) {
//       if(hashTable[arr[i]]) {
//           hashTable[arr[i]]++
//       } else {
//           hashTable[arr[i]] = 1
//       }
//   }

//   const filteredByValue = Object.fromEntries(Object.entries(hashTable).filter(([key, value]) => value % 2 !== 0))
//   const answer = parseInt(Object.keys(filteredByValue).toString())

//   return answer;
// }

// SOLUTION 3

const findOdd = (arr) => arr.reduce((a, b) => a ^ b);

// SOLUTION 4

function findOdd(arr) {
  var hashTable = {};
  arr.forEach(function(el){
    hashTable[el] ? hashTable[el]++ : hashTable[el] = 1;
  });
  
  for(let prop in hashTable) {2
    if(hashTable[prop] % 2 !== 0) return Number(prop);
  }
}

// SOLUTION 5

function findOdd(arr) {
  return arr.find((item) => arr.filter(el => el == item).length % 2)
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); //5
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])); // -1
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])); // 5
console.log(findOdd([10])); // 10
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1])); // 10
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10])); // 1