// Solution 1.1
export function repeatStr(n: number, s: String): String  {
    let newString: String = ''
    while (n > 0) {
        newString = `${newString}${s}`
        n--
    }
    return newString
}

// Solution 1.1 +
export function repeatStr(n: number, s: String): String {
    let newString: String = ''
    while (n-- > 0) newString = `${newString}${s}`
    return newString
}

// Solution 1.2
export function repeatStr(n: number, s: String): String  {
    let newString: String = ''
    for (let i = 0; i < n; i++) {
        newString = `${newString}${s}`
    }
    return newString
}

// Solution 1.3
export function repeatStr(n: number, s: String): String  {
    let newString: String[]  = []
    for (let i = 0; i < n; i++) {
        newString.push(s)
    }
    return newString.join('')
}


// Solution 2.1
export const repeatStr = (n: number, s: String): String => s.repeat(n)


// Solution 2.2
export const repeatStr = (n: number, s: String): String => s["repeat"](n);


// Solution 3.1
export function repeatStr(n: number, s: string): string {
    return Array.apply(null, Array(n)).map((i) => s).join('')
}


console.log(repeatStr(6, "I")); // "IIIIII"
console.log(repeatStr(5, "Hello")); // "HelloHelloHelloHelloHello"