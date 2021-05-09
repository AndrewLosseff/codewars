function getCount(str) {
  let vowelsCount = 0
  const vowels = ["a", "e", "i", "o", "u"]
  for(let char of str) {
      if(vowels.includes(char)) {
          vowelsCount++
      }
  }
  
  return vowelsCount;
}

function getCount(str) {
    return str.match(/[aeiou]/gi).length
}

console.log(getCount("abracadabra"))