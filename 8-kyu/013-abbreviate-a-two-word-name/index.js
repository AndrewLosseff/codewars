// Loop
function abbrevName(name){
    const answer = [name[0]]
    for(let i = 0; i < name.length; i++) {
        if(name[i] === " ") {
            answer.push(name[i + 1]);
        }
    }
    return answer.map(el => el.toUpperCase()).join(".")
}

Array
function abbrevName(name){
   const newArray = name.split(" ")
   return (
      (newArray[0][0] + "." + newArray[1][0]).toUpperCase()
   )
}

// Map
function abbrevName(name){
   return (
      name.split(" ")
         .map(el => el[0]
         .toUpperCase())
         .join(".")
   )
}

// Substring
function abbrevName(name){
   return (
      name
         .split(" ")
         .map(el => el.substring(0,1).toUpperCase())
         .join(".")
   )
}

// regex
function abbrevName(name){
   return (
      name
         .match(/\b(\w)/g)
         .toString()
         .toUpperCase()
         .replace(',', '.')
   )
}

console.log(abbrevName("Sam harris"));