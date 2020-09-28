// function points(games) {
//     let answer = 0
//     for(const score of games) {
//         const arr =score.split(":")
//         if(Number(arr[0]) > Number(arr[1])) {
//             answer += 3
//         } else if (Number(arr[0]) === Number(arr[1])) {
//             answer += 1
//         }
//     }
//     return answer
// }

// function points(games) {
//     return games.reduce((acc, cur) => acc + (cur[0] > cur[2] ? 3 : cur[0] == cur[2] ? 1 : 0), 0)
// }

// function points(games) {
//     return games.reduce((acc, [x, _, y]) => acc + (x > y ? 3 : x == y), 0)
// }

function points(games) {
    return games
            .map(str => str.split(":").map(Number))
            .map(([x,y]) => x > y ? 3 : x == y ? 1 : 0)
            .reduce((acc, cur) => acc + cur, 0)
}

console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'])); // 30