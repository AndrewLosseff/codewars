const array1 = [
    true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
]

// Loop 
export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
    let counter: number = 0
    for(let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) counter += 1
    }
    return counter
}
export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
    let counter: number = 0
    arrayOfSheep.forEach(item => {
        if(item) counter++
    })
    return counter
}

// Filter
export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
    return arrayOfSheep.filter(item => item === true).length
}

export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
    return arrayOfSheep.filter(Boolean).length
}

// Reducer
export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
    return arrayOfSheep.reduce((acc, cur) => acc + (cur === true ? 1 : 0), 0)
}

console.log(countSheeps(array1));
