"use strict";
// interface Response1{
//     //data : any;
//    // data : string | number | boolean | object | null;
// }
const transactionResponse = {
    data: "Transaction Successful",
    status: 200
};
const transactionStatus = {
    data: true,
    status: 200
};
const transactionAmount = {
    data: 1000,
    status: 200
};
// Array
function getLength(array) {
    return array.length;
}
const result = getLength(['', '', '3']);
const result2 = getLength([1, 2, 3, 4, 5]);
console.log(result);
console.log(result2);
