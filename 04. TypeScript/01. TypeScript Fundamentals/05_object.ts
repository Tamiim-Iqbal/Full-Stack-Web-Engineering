const person = {
    name: 'John Doe',
    id : 15,
    isPassed : true
}
person.id = 20;
console.log(person.id);          // 20

// TypeScript
const student : { name: string, id: number, isPassed: boolean } = {
    name : 'Tamim',
    id : 10,
    isPassed : true
}
console.log(student.name);      // Tamim