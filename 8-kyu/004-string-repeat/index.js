// Solution 1.1
function repeatStr (n, s) {
    let newString = ''
    while(n > 0) {
        newString += s
        n--
    }
    return newString
}

// Solution 1.2

function repeatStr (n, s) {
    let newString = ''
    while(n-- > 0) newString += s
    return newString
}

// Solution 1.3
function repeatStr (n, s) {
    let newString = ''
    for(let i = 0; i < n; i++) {
        newString += s
    }
    return newString
}

// Solution 1.4
function repeatStr (n, s) {
    let newString = []
    for(let i = 0; i < n; i++) {
        newString.push(s)
    }
    return newString.join('')
}

// Solution 2.1
const repeatStr = (n, s) => s.repeat(n)

// Solution 2.2
const repeatStr = (n, s) => s["repeat"](n)

// Solution 3.1
function repeatStr (n, s) {
  return n > 1 ? s + repeatStr(--n, s) : s;
}

// Solution 4.1
const repeatStr = (n, s) => { 
    return Array.apply(null, Array(n)).map((i) => s).join('')
}

// Solution 4.2
function repeatStr (n, s) {
  return new Array(n).fill(s).join('');
}

// Solution 4.3
function repeatStr (n, s) {
  return Array(n+1).join(s);
}

// Solution 5.1

function repeatStr (n, s) {
    return Array.from(Array(n)).reduce(acc => acc + s, '')
}


console.log(repeatStr(6, "I")); // "IIIIII"
console.log(repeatStr(5, "Hello")); // "HelloHelloHelloHelloHello"