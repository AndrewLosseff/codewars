// Solution 1.1
const removeChar = str => {
    let newStr = ''
    for(let i = 0; i < str.length; i++){
        if(i !== 0 && i !== str.length -1) {
            newStr += str[i]
        }
    }
    return newStr
}

// Solution 1.2
const removeChar = str => {
    let newStr = ''
    for(let i = 1; i < str.length - 1; i++) {
        newStr += str[i]
    }
    return newStr
}

// Solution 2.1
const removeChar = str => {
    return str.slice(1, str.length - 1)
}

// Solution 2.2
const removeChar = str => str.slice(1, - 1)

// Solution 3.1
const removeChar = str => str.substring(1, str.length -1)

// Solution 4.1
const removeChar = str => {
    const newStr = str.split('')
    newStr.shift()
    newStr.pop()
    return newStr.join('')
}

// Solution 4.2
const removeChar = str => {
    const newStr = [...str];
    newStr.shift()
    newStr.pop()
    return newStr.join('')
}

// Solution 5.1
const removeChar = (str) => str.replace(/^.|.$/g, '');

console.log(removeChar('eloquent'));
console.log(removeChar('country'));
console.log(removeChar('person'));
console.log(removeChar('place'));