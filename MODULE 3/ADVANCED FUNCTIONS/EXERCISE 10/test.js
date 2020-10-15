const f = (function () { // function f() {
    let counter = 0;
    return function () { //
    console.log(++counter);
    };
   })();
   f();
   f();
   f();
   f();
   f();
   f();
   f();
   