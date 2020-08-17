// Solution 1.1
export const removeChar = (str: string) : string => {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (i !== 0 && i !== str.length - 1) {
            newStr += str[i]
        }
    }
    return newStr
}

// Solution 1.2
export const removeChar = (str: string): string => {
    let newStr = ''
    for (let i = 1; i < str.length - 1; i++) {
        newStr += str[i]
    }
    return newStr
}

// Solution 2.1
export const removeChar = (str: string): string => {
    return str.slice(1, str.length - 1)
}

// Solution 2.2
export const removeChar = (str: string): string => str.slice(1, - 1)

// Solution 3.1
export const removeChar = (str: string): string =>  str.substring(1, str.length - 1)

// Solution 4.1
export const removeChar = (str: string): string => {
    const newStr: string[] = str.split('')
    newStr.shift()
    newStr.pop()
    return newStr.join('')
}

// Solution 4.1
export const removeChar = (str: string): string => {
    const newStr: string[] = [...str];
    newStr.shift()
    newStr.pop()
    return newStr.join('')
}

// Solution 5.1
export const removeChar = (str: string): string =>  str.replace(/^.|.$/g, '');


console.log(removeChar('eloquent'));
console.log(removeChar('country'));
console.log(removeChar('person'));
console.log(removeChar('place'));