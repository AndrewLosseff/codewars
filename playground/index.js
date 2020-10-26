// Loop
// function dirReduc(arr){
//     const result = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === "NORTH" && arr[i + 1] === "SOUTH" || arr[i] === "SOUTH" && arr[i + 1] === "NORTH" || arr[i] === "EAST" && arr[i + 1] === "WEST" || arr[i] === "WEST" && arr[i + 1] === "EAST"){
//             i++
//         } else {
//             if(result[result.length - 1] === "NORTH" && arr[i] === "SOUTH" || result[result.length - 1] === "SOUTH" && arr[i] === "NORTH" || result[result.length - 1] === "EAST" && arr[i] === "WEST" || result[result.length - 1] === "WEST" && arr[i] === "EAST"){
//                 result.pop()
//             } else {
//                 result.push(arr[i])
//             }
//         }
//     }
//     return result
// }

// ForEach
// function dirReduc(arr){
//     const opposites = {'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'}
//     const result = []
//     arr.forEach(item => {
//         if(result.length){
//             const prevItem = result.pop()
//             if(prevItem !== opposites[item]) {
//                 result.push(prevItem)
//                 result.push(item)
//             }
//         } else {
//             result.push(item)
//         }
//     })
//     return result
// }

// RegEx
// function dirReduc(arr){
//    let str = arr.join("")
//    let pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/g
//    while(pattern.test(str)){
//     str = str.replace(pattern, '')
//    }

//    return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || []
// }

// Reduce
function dirReduc(arr){
  const opposites = {'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'}
  return arr.reduce((acc, cur) => (opposites[acc.slice(-1)] === cur ? acc.pop() : acc.push(cur), acc), [])
}

console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])) // []
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])) // [ 'NORTH', 'WEST', 'SOUTH', 'EAST' ]
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])) // [ 'WEST' ]
console.log(dirReduc([ 'EAST', 'EAST', 'WEST', 'NORTH', 'WEST', 'EAST', 'EAST', 'SOUTH', 'NORTH', 'WEST' ])) // [ 'EAST', 'NORTH' ]
console.log(dirReduc([ 'NORTH', 'EAST', 'NORTH', 'EAST', 'WEST', 'WEST', 'EAST', 'EAST', 'WEST', 'SOUTH' ])) // [ 'NORTH', 'EAST' ]
