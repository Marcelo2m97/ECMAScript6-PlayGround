//VAR LET and CONST scopes

//Global Scope

//Declaring variables on the global scope
var var_variable1 = "var1";
let let_variable1 = "let1";
const const_variable1 = "const1";

//Printing on console variables
console.log(var_variable1);
console.log(let_variable1);
console.log(const_variable1);

localScope();

function localScope() {
    //Local Scope

    //Printing on console variables
    console.log(var_variable1);
    console.log(let_variable1);
    console.log(const_variable1);
    //Values are the same from Global Scope

    //Updating variables
    var_variable1 = "var1.1";
    let_variable1 = "let1.1";
    //CONST variables cannot be updated

    //Printing on console variables with their new values
    console.log(var_variable1);
    console.log(let_variable1);
    console.log(const_variable1);

    //Declaring new variables on the local scope
    var var_variable2 = "var2";
    let let_variable2 = "let2";
    const const_variable2 = "const2";

    //Printing on console variables
    console.log(var_variable2);
    console.log(let_variable2);
    console.log(const_variable2);
}
//There's no way to do the following:
//console.log(var_variable2);
//console.log(let_variable2);
//console.log(const_variable2);
//Because all of them where declared on scope1(), so that means they just exist
//there. This does not apply to variables declared on Global scope.
console.log(var_variable1);
console.log(let_variable1);
console.log(const_variable1);
//The values, as they are global, they end with the value the were assigned in
//the local scope.

//NOTE: it is better practice to use "let" instead of "var"