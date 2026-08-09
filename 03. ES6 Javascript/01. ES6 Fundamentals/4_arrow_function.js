function sayGreet(name){
    return `Hello ${name}, Good morning!`;
}
console.log(sayGreet("Tamim"));        // Hello Tamim, Good morning!

// Arrow function

const sayGreet2 = (name) => {
    return `Hello ${name}, Good night!`;
}
console.log(sayGreet2("Iqbal"));       // Hello Iqbal, Good night!

const sayHi = () => "Hi, How are you?";
console.log(sayHi());                  // Hi, How are you?