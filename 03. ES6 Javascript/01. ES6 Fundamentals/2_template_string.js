let name = "Tamim";
let price = 500;
let quantity = 5;

let message = "Hello " + name + ". Your bill is " + price
let text = `Hello, ${name}. Your bill is ${price * quantity}.`

console.log(message);
console.log(text);

let amount = 2500;

function admissionConfirmationMail(name, amount) {
  let message = `Hello, ${name || "student"},
              Your payment is successful.
              Your paid amount is ${amount}`;
  return message;
}

console.log(admissionConfirmationMail("Tamim", 3000));
console.log(admissionConfirmationMail(undefined, 5000));