const even_or_odd = (number) => {
   if( number % 2 === 0) {
       return 'Even'
   } else {
       return 'Odd'
   }
}

const even_or_odd = (number) => (number % 2 === 0) ? 'Even' : 'Odd'

function even_or_odd(number) {
  return ["Even", "Odd"][number % 2]
}

console.log(even_or_odd(5));
