// Variable Hoisting
//
// In Javascript variables can be declared at any point in the execution.
// However, the JS interpreter will 'hoist' the declaration and make it available
// as soon as the scope is created.
// 
// JSBin: http://jsbin.com/lisano/7/edit?js,console

var a = 1; // A global 'a' that will be available for all functions

// We know this one already
function one() {
  console.log(a); // This prints 1, as you expect  
}
one();

console.log('-----------');



// A function can declare a variable of the same name that will render
// the global version inaccessible in that scope
function two() {
  var a = 42;
  
  console.log(a); // This prints 42, as you expect.
}

two();

console.log('-----------');



// A least obvious example is this
function three() {
  console.log(a); // What will this print?

  var a = 42;
  
  console.log(a); // This prints 42, as you expect.
}

three();

// Similarly for function expressions