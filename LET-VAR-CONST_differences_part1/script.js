//VAR

//It is possible to define VAR variables.
var number = 100;
console.log(number);
//It is possible to update VAR variables.
number = 200;
console.log(number);
number = "Updating a VAR variable.";
console.log(number);
number = 200.1;
console.log(number);
//It is possible to redefine VAR variables.
var number = "Redefining a VAR variable.";
console.log(number);
//Notes: it is unnecessary to redefine a VAR variable on ES6 because
//we got the same result just by Updating it, but somehow we could
//have better control of the variable when it changes from one type
//of data to another.

//LET

//It is possible to define LET variables
let amount = 300;
console.log(amount);
//It is possible to update LET variables
amount = 400;
console.log(amount);
amount = "Updating a LET variable.";
console.log(amount);
amount = 400.1;
console.log(amount);
//It is not possible to redefine LET variables, it returns an error.
//But as the example shows it is possible to update a LET variable
//from one type of data to another without problem, but of course we
//do not have the control of that change.

//CONST

//It is possible to define CONST variables
const TOTAL = 500;
console.log(TOTAL);
//It is not possible to update or redefine a CONST variable because
//as it names says, it is expected to be constant over the time, so
//its value stays the same. The name of a CONST variable by convention
//it is written in uppercase.