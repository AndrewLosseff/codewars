export function even_or_odd(n: number): String {
if (n % 2 === 0) {
    return 'Even'
  } else {
      return 'Odd'
    }
}


export const even_or_odd = (n: number): String => (n % 2 === 0) ? 'Even' : 'Odd'

export function even_or_odd(n: number): String {
  return ['Even', 'Odd'][n % 2];
}

console.log(even_or_odd(100))

