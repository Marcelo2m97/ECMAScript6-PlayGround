//No parameters
//Normal function
function sayHi() {
    console.log("Hello");
}

//Arrow function
let greet = () => console.log("Hello");

//With parameters
//One parameter
//Normal function
function sayHiToSomeone(name) {
    console.log(`Hello, ${name}`);
}

//Or
const sayHiToSomeoneElse = function(name) {
    console.log(`Hello, ${name}`);
}

//Arrow function
let greetingAgain = (name) => console.log(`Hello, ${name}`);


//Two parameters
let multiplyTwoNumbers = (firstNumber, secondNumber) => firstNumber * secondNumber;
let result = multiplyTwoNumbers(2,2);
console.log(result);

//Arrow function with more than one line
let operate = (firstNumber, secondNumber, thirdNumber) => {
    let total = firstNumber * secondNumber;
    total /= thirdNumber;
    return total;
}

let operation = operate(2,2,2);
console.log(operation);

//JS Object as parameter
const object = () => ({name: "Marcelo", age: 22});
const person = object();
console.log(person);

//Arrow function as parameter
const numbers = [1,2,3,4,5,6];
const numbersGreaterThan2 = numbers.filter(greaterThan => greaterThan > 2);
console.log(numbersGreaterThan2);

//Arrow functions on listeners
document
    .getElementById("button")
    .addEventListener("click", () => console.log("You clicked."));