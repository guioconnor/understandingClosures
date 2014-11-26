// Type in Javascript
// 
// Javascript is a dynamically typed language.
//
// What this means is that the same variable can
// contain values of different types.
// Some people would say Javascript is 'untyped'.
// However values do have type, but
// variables are not bound to a particular type.
//
// JSBin - http://jsbin.com/dukuqu/8/edit?js,console

// Let's declare a variable

console.log( myVar );

var myVar;

console.log( myVar );

// Let's assing it a number
myVar = 42;
console.log( myVar );
console.log( typeof myVar );
console.log( '--------------' );

// Let's assign the same variable a string
myVar = 'Hello';
console.log(myVar);
console.log( typeof myVar );
console.log( '--------------' );

// We can assing it arrays too.
// (Elements of the array can be of different types too, of course)
myVar = [42, 'hello'];
console.log(myVar);
console.log( typeof myVar );
console.log( '--------------' );

// You can assign any value to a variable: booleans, objects, etc.
myVar = true;
console.log(myVar);
console.log( typeof myVar );
console.log( '--------------' );
