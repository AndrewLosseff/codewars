const array1 = [
    true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true
]

// Loop
function countSheeps(arrayOfSheep) {
    let counter = 0
    for(let i = 0; i < arrayOfSheep.length; i++) {
        if(arrayOfSheep[i]) counter += 1
    }
    return counter
}

function countSheeps(arrayOfSheep) {
    let counter = 0
    arrayOfSheep.forEach(sheep => {
        if(sheep) counter++
    })
    return counter
}

// Filter
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(item => item === true).length
}

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length
}

// Reducer
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((acc, cur) => acc + cur, 0)
}

console.log(countSheeps(array1));