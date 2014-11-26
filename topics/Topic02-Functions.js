// Functions in Javascript
// 
// Javascript implements the concept of 'first class functions'. What 
// this means is that functions are treated as 'first class citizens', which
// in turn is to say that functions can be treated as data.
//
// JSBin: http://jsbin.com/jocobo/9/edit

// In Javascript, you have function declarations...

function add( a , b ){
  return a + b;
}

console.log( '--Addition--' );
console.log( add(1 , 2) );
console.log( add(4 , 8) );


// ...but you also have function expressions

var multiply = function( a , b){
  return a * b;
};

console.log( '--Multiplication--' );
console.log( multiply(1 , 2) );
console.log( multiply(4 , 8) );


// In a function expression, an anonymous function is created
// and assigned to a variable. Just like you would do with a
// value or an expression.Anonymous functions are also called,
// in more abstract terms, 'Lambda Expressions'

// A function declaration and a function expression is almost
// identical in terms of use, but there are differences at
// runtime on when they are loaded. More on that soon...