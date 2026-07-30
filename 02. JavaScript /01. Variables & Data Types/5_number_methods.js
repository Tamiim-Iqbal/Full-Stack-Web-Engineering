// parseInt() → String to Integer
let age = "25";
let ageNumber = parseInt(age);

console.log(ageNumber);        // 25
console.log(typeof ageNumber); // number


// parseFloat() → String to Decimal Number
let price = "99.99";
let priceNumber = parseFloat(price);

console.log(priceNumber);        // 99.99
console.log(typeof priceNumber); // number


// toFixed() → Digits after Decimal Point
let pi = 3.14159265359;

console.log(pi.toFixed(2)); // "3.14"
console.log(pi.toFixed(4)); // "3.1416"
