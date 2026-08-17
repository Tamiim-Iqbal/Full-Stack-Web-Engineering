// interface Response1{
//     //data : any;
//    // data : string | number | boolean | object | null;
// }

interface Response2<T> {
    data : T,
    status : number
}

const transactionResponse : Response2<string> = {
    data : "Transaction Successful",
    status : 200
}

const transactionStatus : Response2<boolean> = {
    data : true,
    status : 200
}

const transactionAmount : Response2<number> = {
    data : 1000,
    status : 200
}

// Array | String
function getLength<item>(array : item[]) : number{
    return array.length;
}

const result = getLength<string>(['', '', '3'])
const result2 = getLength<number>([1, 2, 3, 4, 5])

console.log(result);         // 3
console.log(result2);        // 5