// // 1. Sort an Array by 2 Criteria
// // Write a function that orders a given array of strings by length in ascending order as primary criteria, and
// // by alphabetical value in ascending order as secondary criteria. The comparison should be caseinsensitive.
// // The input comes as an array of strings.
// // The output is the ordered array of strings.
// // SUBMIT IN THE HW GRADER 
function main(input) {
    input.sort((el1, el2) => sortByLength(el1, el2)).forEach(el => console.log(el));

    function sortByLength(el1, el2) {
        return el1.length - el2.length || sortByName(el1, el2);
    }

    function sortByName(el1, el2) {
        return el1.toLowerCase().localeCompare(el2.toLowerCase());
    }
}
main(['alpha',
    'beta',
    'gamma'
]);
main(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
]);
main(['test',
    'Deny',
    'omen',
    'Default'
]);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Another way to solve same question 
function main(stringArr) {
    sortByTwo(stringArr)
}

function sortByTwo(stringArr) {
    let sortedArr = stringArr.sort(function (a, b) {
        return a.length - b.length || a.localeCompare(b)
    });
    console.log(sortedArr.join('\n'));
}
main(['alpha',
    'beta',
    'gamma'
]);
main(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
]);
main(['test',
    'Deny',
    'omen',
    'Default'
]);
// Hints
//  An array can be sorted by passing a comparing function to the Array.sort() function.
//  Creating a comparing function by 2 criteria can be achieved by first comparing by the main criteria,
// if the 2 items are different (the result of the compare is not 0) - return the result as the result of the
// comparing function. If the two items are the same by the main criteria (the result of the compare is
// 0), we need to compare by the second criteria and the result of that comparison is the result of the
// comparing function.
//  You can check more about Array.sort() here - https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Array/sor
// Examples 
// Input 
// ['alpha',
// 'beta',
// 'gamma'] 
// Output 
// beta
// alpha
// gamma 
// Input 
// ['Isacc',
// 'Theodor',
// 'Jack',
// 'Harrison',
// 'George'] 
// Output 
// Jack
// Isacc
// George
// Theodor
// Harrison
// Input 
// ['test',
// 'Deny',
// 'omen',
// 'Default'] 
// Output 
// Deny
// omen
// test
// Default 
// Multidimensional Arrays (Matrices)
// We will mainly work with 2-dimensional arrays. The concept is as simple as working with a simple 1-
// dimensional array. It is just an array of arrays.