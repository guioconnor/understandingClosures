// Scope in Javascript
//
// Scope refers to where a variable or funcion is available to be used.
// In Javascript the scope of a variable is the function where it's declared.
// (There is no block scope in JS!)
// 
// JSBin: http://jsbin.com/nogoze/7/edit?js,console

// Declare a variable in the global scope
var myVar1 = 1;



// The variable is available for functions defined within that scope
function myFunction1() {
  console.log('inside: ' + myVar1);
}

myFunction1();
console.log('---------------');



// A variable declared in a function is not available outside, though.
function myFunction2() {
  var myVar1 = 2;
  console.log('inside: ' + myVar1);
}

myFunction2();

console.log('outside: ' + typeof myVar1);
console.log('---------------');
