// Object methods: Keys, values, entries, delete, seal, freeze
const user = {
    name: "John Doe",
    age: 35,
    id: 40003
}

const keys = Object.keys(user)        // [ 'name', 'age', 'id' ]
const values = Object.values(user)    // [ 'John Doe', 35, 40003 ]
const entries = Object.entries(user)  // [ [ 'name', 'John Doe' ], [ 'age', 35 ], [ 'id', 40003 ] ]

for(let elem of keys){
    console.log(elem, user[elem]);      // name John Doe, age 35, id 40003
 }

for(let elem of entries){
    const [key, value] = elem
    console.log(key, value);        // name John Doe, age 35, id 40003
}

// delete method
delete user.id
console.log(user);      // { name: 'John Doe', age: 35 }

// seal 
const bankAccount = {
    accountNumber: "1234",
    balance: 5000
}
Object.seal(bankAccount)    // Add and delete not allowed but edit is allowed

delete bankAccount.balance              // not allowed
bankAccount.nomineeName = "Something"   // not allowed
console.log(bankAccount);             // { accountNumber: '1234', balance: 5000 }

// freeze 
const birthCertificate  = {
    name: "Tamim",
    birthDate: "01-01-2000",
    cerNumber: "423424234"
}

Object.freeze(birthCertificate)   // Add , edit and delete not allowed 

delete birthCertificate.name        // not allowed
birthCertificate.cerNumber = "123"  // not allowed
birthCertificate.new = "test"       // not allowed

console.log(birthCertificate);     // { name: 'Tamim', birthDate: '01-01-2000', cerNumber: '423424234' }
