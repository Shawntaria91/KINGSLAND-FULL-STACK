// 5. Check for Symmetry
// Write tests to check the functionality of the following code:

//              checkForSymmetry.js
// function isSymmetric(arr) {
//     if (!Array.isArray(arr))
//         return false; // Non-arrays are non-symmetric
//     let reversed = arr.slice(0).reverse(); // Clone and reverse
//     let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
//     return equal;
// }


function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) === JSON.stringify(reversed));
    return equal;
}

module.exports = { isSymmetric };