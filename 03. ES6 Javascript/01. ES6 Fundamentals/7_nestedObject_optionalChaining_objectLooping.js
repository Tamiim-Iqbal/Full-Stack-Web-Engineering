const user = {
  name: "Tamim",
  age: 26,
  "my address": "something",
  something: [20, 30, 40, 500],
  company: {
    name: "Programming Hero",
    address: {
        location: "Mirpur DOHS",
    }
  },
};
const user2 = {
  name: "Iqbal",
  age: 45,
  "my address": "something",
  something: [20, 30, 40, 500],
};

//access property: Dot notation and bracket notation
console.log(user.age, user.something, user.company); 

const key = "company";
console.log(user[key]);
console.log(user["my address"]);

// optional chaining
console.log(user2?.company?.name, user2?.company?.address?.location);

// Object : for in loop
// for (let key in user){
//     console.log(key, user[key]);
// }

const keys = Object.keys(user)
const values = Object.values(user)
const entries = Object.entries(user)

for(let key of keys){
    console.log(key, user[key]);
}
for(let elem of entries){
    const [key, value] = elem
    console.log(key, value);
}