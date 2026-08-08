// Spread and rest operator

let numbers = [10, 20, 30, 40, 50, 2000];

// console.log(...numbers);
// console.log(10, 20, 30, 40, 50);

let maxNumber = Math.min(...numbers);

// console.log(maxNumber);
let numbers2 = [...numbers, 5000, 24, 5];

numbers.push(2400);

// console.log(numbers2);

let students = {
  name: "Utsho",
  age: 26,
};

let students2 = { ...students, gpa: "5.00" };

students.something = "test";

// console.log(students2);

// Rest operator

function sum(a, b, c, ...restNumbers) {
  console.log(restNumbers, "restNumbers");
  let sum = 0;
  for(let number of restNumbers){
    sum+=number;
  }
  return a + b + c + sum;
}

console.log(sum(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));