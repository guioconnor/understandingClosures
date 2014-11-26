// Lexical scope
//
// In Javascript, scope is lexical. Simply put,
// 'Lexical Scope' means that a function
// has access to the variables defined in the
// parent scope where they are defined.
//
// That means that a nested function will
// have access to variables defined in
// the parent scope. That is, the scope
// in which the function itself is defined.
// 
// JSBin: http://jsbin.com/vewaf/3/edit?js,console

function external(multiplier) {
  var myVar = 42;
  
  function internal(multiplier) {
    return myVar * multiplier;
  }
  
  return internal(5);
}

console.log( external(2) );

console.log( external(3) );

// Notice that the internal() function does not receive parameters
// and does not declare variables but it can still access variables
// defined in the external() function.
//
// Notice also that myVar and multiplier ar local to external. They are
// not global variables.