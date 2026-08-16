"use strict";
const mark = {
    name: "Mark",
    id: 100,
    department: "Sales",
    salary: 100000
};
const bill = {
    name: "Bill",
    id: 101,
    department: "Marketing",
    salary: 50000
};
const team = [mark, bill, {
        name: "Alice",
        id: 103,
        department: "HR"
    }];
function printEmployeeDetails(employee) {
    console.log(`Name : ${employee.name}`);
    console.log(`Id : ${employee.id}`);
    console.log(`Department : ${employee.department}`);
}
printEmployeeDetails({ name: 'Elon', department: 'SpaceX', id: 1005 });
printEmployeeDetails(bill);
