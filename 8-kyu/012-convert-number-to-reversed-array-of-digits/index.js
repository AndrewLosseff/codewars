// toString() and parseInt()
// String() and Number()
// unary + operator
// multiply by 1

// loop
function digitize(n) {
  const answer =[]
  const str = n.toString()

  for(item of str){
    answer.unshift(parseInt(item))
  }

  return answer
}

// Array.from
function digitize(n) {
    const str = n.toString()
    const intConverter = (item) => parseInt(item)
    return Array.from([...str].reverse(), intConverter)
}

function digitize(n) {
    return Array.from(String(n), Number).reverse()
}

// Map
function digitize(n) {
    return ("" + n).split("").map(el => el * 1).reverse()
}

function digitize(n) {
    return [...String(n)].map(Number).reverse()
}

console.log(digitize(348597));