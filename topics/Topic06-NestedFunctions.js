// Nested functions
//
// It shouldn't be a surpsise by now, that in javascript you can have
// nested functions. Functions are first class citizens, so the same
// way you can have a boolean, a number or a string you can have a function.
// 
// JSBin: http://jsbin.com/qekozu/2/edit?js,console

var greetPerson = function(name, time) {
  
  var weatherReport = 'it\'s rainy today';
  
  var getTimeString = function(time){
    if(time === 'am') {
      return 'morning';
    }
    else {
      return 'evening';
    }
  };
  
  return 'Good ' + getTimeString(time) + ', ' + name + ', ' + weatherReport + '!';
  
};

console.log( greetPerson( 'Jean', 'am' ) );
console.log( greetPerson( 'Jamie', 'evening' ) );

// Both variables in the function are local to the function and are not
// accessible from outside. They can only be used by members of
// the greetPerson() function.