let x;
console.log(x);      // undefined (value দেওয়া হয়নি)

let y = null;
console.log(y);      // null (ইচ্ছাকৃতভাবে empty)

function greet(name) {
     console.log(name);
}
greet();             // undefined (argument পাঠানো হয়নি)

const obj = { age: 25 };
console.log(obj.city);  // undefined (property নেই)



// Falsy values — এই ৬টার একটাও if এর ভেতরে ঢুকবে না
if (false) {
    console.log("false");
} 
else if(5>6){
} 
else if(100>200){
}
else{
}

if (0) {
    console.log(0);
} 
else{
    console.log("0 is a falsy value");
}

if ("") {
    console.log("");
}
if (null) {
    console.log(null);
}
if (undefined) {
    console.log(undefined);
}
if (NaN) {
    console.log("Not a Number");
}

// Truthy examples — এগুলো সবসময় চলবে
if ("hello") console.log("truthy");
if ([]) console.log("empty array is a truthy"); // empty array-ও truthy!
if ({}) console.log("truthy"); // empty object-ও truthy!