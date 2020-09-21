// toString() and parseInt()
// String() and Number()
// unary + operator
// multiply by 1

// loop
export const digitize = (n: number): number[] => {
    const answer = []
    const str = n.toString()
    for(const num of str){
        answer.unshift(parseInt(num))
    }
    return answer
};

// Array.from
export const digitize = (n: number): number[] => {
    const str: string = String(n)
    const convert = (el: string) => Number(el)
    return Array.from([...str].reverse(), convert)  
}

export const digitize = (n: number): number[] => {
    return Array.from(String(n), Number).reverse()
}

// Map
export const digitize = (n: number): number[] => {
    return [...n.toString()].map(Number).reverse();
}


console.log(digitize(348597));