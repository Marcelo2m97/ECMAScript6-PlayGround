//Template literals

const name = "Marcelo";
const lastName = "Martínez";
const age = 22;

//Without template literals
const phrase1 = "My full name is " + name + " " + lastName + " and I'm " + age + "years old.";
console.log(phrase1);
//With template literals
const phrase2 = `My full name is ${name} ${lastName} and I'm ${age} years old.`;
console.log(phrase2);

//Without template literals
const withOutTLDiv = document.createElement("div");
withOutTLDiv.innerHTML = "<p>" + name + "</p>" + "<p>" + lastName + "</p>";
//With template literals
const withTLDiv = document.createElement("div");
withTLDiv.innerHTML = `
    <h1>My name is: ${name}</h1>
    <h3>My lastname is: ${lastName}</h3>
    <h6>My age is: ${age}</h6>
    <p>Template literals are so cool!</p>
`;

//Adding divs on the HTML
document.body.appendChild(withOutTLDiv);
document.body.appendChild(withTLDiv);