function sortItOut(array){
    const odd = []
    const even = []

    array.forEach(number => {
        if(Number.isInteger(number)){
            number % 2 === 0 ? even.push(number) : odd.push(number)
        } else {
            let temp = (number * 10).toString()
            temp.slice(0, temp.length - 1) % 2 === 0 && temp.slice(-1) % 2 === 0 ? even.push(number) : odd.push(number)
        }
    })

    return [...odd.sort((a,b) => a - b), ...even.sort((a,b) => b - a)]
}


// console.log(sortItOut([11,22,33,44,55,55,90.4,4,78])); // ([11,33,55,55,90.4,78,44,22,4])
console.log(sortItOut([1.1, 2.2, 3.3, 4.4, 5.5, 6.6])); // ([[1.1, 3.3, 5.5, 6.6, 4.4, 2.2]])
// console.log(sortItOut([26,243,52,2,432414,1,11,46,32])); // ([1,11,243,432414,52,46,32,26,2])
// console.log(sortItOut([19,65,88,112,60,14,33,49,88])); // ([19,33,49,65,112,88,88,60,14])
// console.log(sortItOut([])) // ([])
// console.log(sortItOut([68,25,99,50,10,67,2,5,8,34,67])); // ([5,25,67,67,99,68,50,34,10,8,2])