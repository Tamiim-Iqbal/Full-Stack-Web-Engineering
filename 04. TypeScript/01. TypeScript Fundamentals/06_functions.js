"use strict";
// function add(num1, num2){
//     const total = num1 + num2;
//     return total;
// }
// TypeScript
function sum(val1, val2) {
    const total = val1 + val2;
    return total;
}
const result = sum(5, 10);
const getLargerName = (name1, name2) => {
    if (name1.length > name2.length)
        return name1;
    return name2;
};
const biggerName = getLargerName('Alice', 'Bob');
console.log(biggerName);
