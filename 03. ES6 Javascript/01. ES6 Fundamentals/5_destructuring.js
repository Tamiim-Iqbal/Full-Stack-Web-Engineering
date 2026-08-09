// Destructuring for array
const numbers = [10, 20, 30, 40, 50]
const  [ten, twenty, , , fifty] = numbers
console.log(ten, twenty, fifty);            // 10 20 50


// Destructuring for object
const student = {
    name: "Tamim",
    age: 24, 
    marks: {
        physics: 95,
    }
}
const { name, age: studentAge, marks: {physics} } = student
console.log(studentAge, name, physics);     // 24 Tamim 95