//type
type Book = {
    name : string
}
// type Book = {       // Error (Invalid)
//     price : number
// }

// interface
interface Magazine {
    name : string
}
interface Magazine {     // Valid
    price : number
}

const gift : Magazine = {
    name : 'Daily Magazine',
    price : 1000
}

console.log(gift);