// for loop # 1
function solution(number) {
  
  const tempArr = []
  let sum = 0

  for(let i = 0; i < number; i++) {
    tempArr.push(i)
  }

  for(let i = 0; i < tempArr.length; i++) {
    if(tempArr[i] % 3 === 0 || tempArr[i] % 5 === 0) {
        sum += tempArr[i]
    }
  }

  return sum

}

// for loop # 2
function solution(number){
    let sum = 0
    for(let i = 3; i < number; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    }
    return sum
}

// map
function solution(number) {

    const newArr = [...Array(number).keys()]
    let sum = 0

    function result(num) {
        if(num % 3 === 0 || num % 5 === 0) {
            sum += num
        }
    }
    
    newArr.map(num => result(num))
    
    return sum
}

// filter + reduce
function solution(number) {

    const newArr = [...Array(number).keys()]
    
    const filteredArr = newArr.filter(num => num % 3 === 0 || num % 5 === 0)
    
    const sum = filteredArr.reduce((acc, cur) => acc + cur, 0)
    
    return sum
}


// reduce
function solution(number) {

    const newArr = [...Array(number).keys()]
    
    const sum = newArr.reduce((acc, _, idx) => acc + (!(idx % 3) || !(idx % 5) ? idx : 0), 0)
    
    return sum
}

console.log(solution(10)) // 23