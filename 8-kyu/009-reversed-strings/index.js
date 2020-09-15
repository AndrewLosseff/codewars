// Loop
function solution(str) {
    let newStr = ""
    for(let i = str.length - 1; i >= 0; i--) {
        newStr +=str[i]
    }
    return newStr
}

function solution(str) {
    let answer = []
    for(let i = 0; i < str.length; i++) {
        answer.unshift(str[i])
    }
    return answer.join('')
}

// Reverse join
function solution(str){
  return str.split('').reverse().join('');  
}

function solution(str){
  return [...str].reverse().join("")
}

// Recursion
function solution(str){
    return str.length > 0 ? solution(str.substring(1)) + str.charAt(0) : '';
}

// Reduce
function solution(str) {
    return str.split("").reduceRight((acc, cur) => acc + cur)
}

// Map
function solution(str) {
    return [...str].map((character, index, arr) => arr[arr.length-index-1]).join("")
}

console.log(solution("world"))