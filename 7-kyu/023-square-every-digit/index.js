// loop
 function squareDigits(num){
     const str = String(num)
     let result = ""
     for(let i = 0; i < str.length; i++) {
         result += str[i] * str[i]
     }
     return Number(result)
 }


// map
function squareDigits(num){
  return Number(String(num).split("").map(num => Math.pow(num, 2)).join(""))
}



console.log(squareDigits(9119)) //811181