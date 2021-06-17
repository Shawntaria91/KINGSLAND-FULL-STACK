let x = (function () {
    var aName = "Barry";
    return a
})();
console.log (x);

// // Variable aName is not accessible from the outside scope
// aName // throws "Uncaught ReferenceError: aName is not defined"
// Assigning the IIFE to a variable stores the function's return value, not the function definition itself.

// var result = (function () {
//     var name = "Barry"; 
//     return name; 
// })(); 
// // Immediately creates the output: 
// result; // "Barry"