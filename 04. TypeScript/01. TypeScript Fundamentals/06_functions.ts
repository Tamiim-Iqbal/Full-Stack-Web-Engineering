// function add(num1, num2){
//     const total = num1 + num2;
//     return total;
// }

// TypeScript
function sum(val1: number, val2: number) : number {
    const total = val1 + val2;
    return total;
}
const result: number = sum(5, 10);


const getLargerName = (name1: string, name2: string): string => {
    if(name1.length > name2.length) return name1;
    return name2;
}
const biggerName = getLargerName('Alice', 'Bob');
