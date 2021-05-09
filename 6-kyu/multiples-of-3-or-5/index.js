//loop
function solution(number){
    let counter = 0
    for(let i = 3; i < number; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            counter += i
        }
    }
    return counter
}

// map + reduce
function solution(number) {
    return number < 3 ? 0 : Array.from({length: number}, (_,i) => i++).map(i => i % 3 === 0 || i % 5 === 0 ? i : 0 ).reduce((acc, cur) => acc + cur, 0)
}

// filter + reduce
function solution(number) {
    return number < 3 ? 0 : [...Array(number).keys()].filter(i => i % 3 === 0 || i % 5 === 0).reduce((acc, cur) => acc + cur, 0)
   
}

// reduce
function solution(number) {
    return number < 3 ? 0 : [...Array(number)].reduce((acc, _, idx) => acc + idx * (!(idx % 3) || !(idx % 5)), 0)
}

console.log(solution(10)) // 23