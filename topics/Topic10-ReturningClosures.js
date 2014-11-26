// Returning closures
//
// Ah, do you remember you can return functions from higher order functions?
// Well, they are closures.
// 
// JSBin: http://jsbin.com/seyemi/15/edit?js,console

function generateGreeting( greeting ) {
  var greeter = function(name) {
    return greeting + ', ' + name;
  };

  return greeter;  
}

var morning    = generateGreeting('Good morning');
var afternoon  = generateGreeting('Good afternoon');
var evening    = generateGreeting('Good evening');
var night      = generateGreeting('Good night');

console.log( morning('Jamie') );
console.log( afternoon('Martin') );
console.log( evening('Jean') );
console.log( night('Sonal') );



// That's all folks!

var bye = generateGreeting('Bye bye');
console.log( bye('everyone') );
