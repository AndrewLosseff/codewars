// 1  Math.min
function findSmallestInt(args) {
    return Math.min(...args)
}

const findSmallestInt = args => Math.min(...args)

// 2 Sort
function findSmallestInt(args) {
     args.sort((a, b) => a - b)
     return args[0]
}

function findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0]
}

function findSmallestInt(args) {
    return args.sort((a,b) => a - b).shift();    
  }

// 3 Reducer
function findSmallestInt(args) {
    return args.reduce((acc, cur) => acc < cur ? acc : cur)
}

// 4 Loop
function findSmallestInt(args) {
    let smallest = args[0]

    for(let i = 0; i < args.length; i++){
        if(args[i] < smallest) smallest = args[i]
    }

    return smallest
}

function findSmallestInt(args) {
    let smallest = args[0]

    args.forEach(i => {
        if(i < smallest) smallest = i
    })

    return smallest
}

function findSmallestInt(args) {
    let smallest = args[0]
    
    args.forEach(i => (i < smallest) && (smallest = i))

    return smallest
}


console.log(findSmallestInt([78, 56, 232, 12, 8]));
console.log(findSmallestInt([34, -345, -1, 100]));
