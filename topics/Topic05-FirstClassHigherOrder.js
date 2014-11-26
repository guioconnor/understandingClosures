// First class functions, higher order functions and all that jazz
//
// Because functions in JS are first class functions, they can be treated as data,
// can be assigned to variables, stored in arrays, placed in objects, and they can
// be passed around.
// 
// JSBin: http://jsbin.com/moqetu/9/edit?js,console

var a = function( n , m ) {
  return n + m;
};

var b = a;

console.log( a( 5 , 2 ) );
console.log( b( 5 , 2 ) );
console.log( typeof a );

console.log('---------------');



// They can also be passed as parameters to a function
var execute = function( operation , n , m ) {
  var result = operation( n , m );

  return result;
};

var add = function( n , m ) {
  return n + m;
};

var multiply = function ( n , m ) {
  return n * m;
};

console.log( execute( add , 2 , 3 ) );
console.log( execute( multiply , 2 , 3 ) );

console.log('---------------');

// They can also be returned!
// Functions that receive or return functions are called Higher order functions.