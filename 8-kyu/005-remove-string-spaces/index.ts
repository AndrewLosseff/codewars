// // Regular expression
// function noSpace(x:string):string {
//     return x.replace(/ /g, '')
// }

// // Loop
// function noSpace(x:string):string {
//     let newStr = ''
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] !== " ") {
//             newStr += x[i]
//         }
//     }
//     return newStr
// }

// // Split and join
// function noSpace(x:string):string {
//     return x.split(" ").join('')
// }

// // Filter
// function noSpace(x:string):string {
//     return x.split("").filter(i => i !== ' ').join('')
// }

// // Reducer
// function noSpace(x:string):string {
//     return x.split(" ").reduce((a, c) => a + c)
// }


console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));