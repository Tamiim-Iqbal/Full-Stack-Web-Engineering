// Spread and rest operator

let numbers = [10, 20, 30, 40, 50, 2000];

console.log(numbers);          // [ 10, 20, 30, 40, 50, 2000 ]
console.log(...numbers);       // 10 20 30 40 50 2000


let minNumber = Math.min(...numbers);
console.log(minNumber);       // 10

let numbers2 = [...numbers, 5000, 24, 5];

let students = {
  name: "Tamim",
  age: 24,
};

let students2 = { ...students, gpa: "5.00" };

students.something = "test";
console.log(students2);       // { name: 'Tamim', age: 24, gpa: '5.00' }

// Rest operator

function sum(a, b, c, ...restNumbers) {
  console.log(restNumbers);         // [ 40, 50, 60, 70, 80, 90, 100 ]
  let sum = 0;
  for(let number of restNumbers){
    sum+=number;
  }
  return a + b + c + sum;
}

console.log(sum(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));