//Template literals

const name = "Marcelo";
const lastName = "Martínez";
const age = 22;

//Old way
const phrase1 = "My full name is " + name + " " + lastName + " and I'm " + age + "years old.";
console.log(phrase1);
//New way with template literals
const phrase2 = `My full name is ${name} ${lastName} and I'm ${age} years old.`;
console.log(phrase2);