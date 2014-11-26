// Upvalues - Closures vs. function pointers
//
// While a function pointer is, very simply put, a reference to the
// executable of a function, a closure is more complex and carries with it
// references to non local variables, called 'upvalues', needed by the function.
//
// Because they are references rather than values, it could have some unexpected effects.
// 
// JSBin: http://jsbin.com/palibu/16/edit?js,console

function iterator1() {
  var i;
  
  for( i = 0 ; i < 10 ; i++ ){
    setTimeout( function() {
       console.log(i);
    }, 3000);
  }
}

iterator1();



// Because each one of the anonymous functions forms a closure and
// carries with it a reference to i. By the time they run,
// i has the value 10 that all will display.
//
// To be able to carry the value with them, each one needs a reference to
// a different variable that doens't change.

function iterator2() {
  var i;
  
  for( i = 0 ; i < 10 ; i++ ){
    var myFunction = function(){
      var myI = i;
      setTimeout( function() {
         console.log(myI);
      }, 3000);
    };
    
    myFunction();
  }
}
iterator2();



// This solves the problem but the function is not anonymous anymore. We
// can execute a a function immediately after definition by doing this.

function iterator3() {
  var i;
  
  for( i = 0 ; i < 10 ; i++ ){
    (function(){
      var myI = i;
      setTimeout( function() {
         console.log(myI);
      }, 3000);
    })();
  }
}
iterator3();


// Have fun!