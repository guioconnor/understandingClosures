// Closures
//
// A 'Closure', also known as a 'Lexical Closure' or 'Function Closure' is
// a function that carries its lexical context with it.
//
// (Closures are not specific to JS, their history is far longer
// than that of JS itself. But we'll only talk about JS today.)
//
// Remember that in JS
//   * functions are first class citizens, they can
//     be passed around, stored in vars and returned.
//   * functions can be nested
//   * scope is lexical, so a variable can access variables
//     defined on the parent's scope
//   * code can be executed assyncronously
// 
// JSBin: http://jsbin.com/xiwipe/3/edit?js,console

// Schedule a function for later execution

function setTimer() {
  var number = 42;
  
  setTimeout( function() {
    number = 52;
  }, 10000 );

  setTimeout( function() {
    console.log(number);
  }, 20000 );
}

setTimer();

// Notice the setTimer() function finished execution almost immediately
// and the anonymous function was scheduled to run 20 seconds after that.
// By the time the function is run, setTimer()'s execution will be finsihed
// and its scope would have been destroyed.
//
// Or is it?