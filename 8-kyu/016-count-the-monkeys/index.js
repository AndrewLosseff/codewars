function monkeyCount(n) {
  return [...Array(n).keys()].map(i => i + 1)
}

function monkeyCount(n) {
    return [...Array(n+1).keys()].slice(1);
}


function monkeyCount(n) {
 var monkeys = [];
 for(var i=1; i<n+1; i++){
   monkeys.push(i);
 }
 return monkeys;
}

function monkeyCount(n) {
  return Array.from(Array(n), (_,i)=>i+1)
}

function monkeyCount(n) {
  return Array.from({length:n}, (_,i)=>i+1)
}



console.log((monkeyCount(5)))