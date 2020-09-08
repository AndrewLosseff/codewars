// Loop
export function solution(str: string): string {
    let answer: string = ""
    for(let i = str.length - 1; i >= 0; i--) {
        answer += str[i]
    }
    return answer; 
}

export function solution(str: string): string {
    let answer: string[] = []
    for(let i = 0; i < str.length; i++) {
        const char = str[i]
        answer.unshift(char)
    }
    console.log(answer)
    return answer.join('')
}

// Reverse join
export function solution(str: string): string {
    return str.split("").reverse().join("")
}

// Recurtion
export function solution(str: string): string {
    return str.length > 0 ? solution(str.substring(1)) + str.charAt(0) : '';
}

// Reduce
export function solution(str: string): string {
    return str.split("").reduceRight((acc, cur) => acc + cur)
}

// Map
export function solution(str: string): string {
    return str.split("").map((char, index, arr) => arr[arr.length - index - 1]).join("")
}


console.log(solution("world"))