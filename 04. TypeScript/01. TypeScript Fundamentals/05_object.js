"use strict";
const person = {
    name: 'John Doe',
    id: 15,
    isPassed: true
};
person.id = 20;
person.name = 1000;
console.log(person.id); // 20
console.log(person.name); // 1000
// TypeScript
const student = {
    name: 'Tamim',
    id: 10,
    isPassed: true
};
console.log(student.name); // Tamim
