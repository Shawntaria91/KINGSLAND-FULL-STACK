// 2. Usernames
/*
You are tasked to create a catalog of usernames. The usernames will be strings that may contain any ASCII
character. You need to order them by:
first - by their length in ascending order
second - by alphabetical order.
Input
The input comes as an array of strings. Each element represents a username. Sometimes the input may contain
duplicate usernames. Make it so that there are NO duplicates in the output.
Output
The output is all of the usernames, ordered exactly as specified above – each printed on a new line.
Hints:
Try to find a structure which does NOT allow duplicates. It will be best for the current problem
*/
function main(arrOfStrings) {
    uniqueElementSetSortTwoCriteria(arrOfStrings);
}

function uniqueElementSetSortTwoCriteria(arrOfStrings) {
    let usernames = new Set();
    for (let name of arrOfStrings) {
        usernames.add(name);
    }

    function compare(a, b) {//function for comparing length and alphabetical order
        return a.length - b.length || a.localeCompare(b);
        // The localeCompare method returns a number indicating whether str1 comes before, after or is the same as str2 in sort order.
        // Returns -1 if str1 is sorted before str2
        // Returns 0 if the two strings are equal
        // Returns 1 if str1 is sorted after str2
    }
    console.log([...usernames].sort(compare).join('\n'));
}
main(["desperate_enuf", "in_jail_out_soon", "desperate_enuf", "zero_deaths", "date_me", "zero_deaths"]
);
// date_me
// zero_deaths
// desperate_enuf
// in_jail_out_soon


// main(
// [
// 'Ashton',
// 'Kutcher',
// 'Ariel',
// 'Lilly',
// 'Keyden',
// 'Aizen',
// 'Billy',
// 'Braston'
// ]
// );
// /*
// Aizen
// Ariel
// Billy
// Lilly
// Ashton
// Keyden
// Braston
// Kutcher
// */

// main(
// ['Denise',
// 'Ignatius',
// 'Iris',
// 'Isacc',
// 'Indie',
// 'Dean',
// 'Donatello',
// 'Enfuego',
// 'Benjamin',
// 'Biser',
// 'Bounty',
// 'Renard',
// 'Rot']);
// /*
// Rot
// Dean
// Iris
// Biser
// Indie
// Isacc
// Bounty
// Denise
// Renard
// Enfuego
// Benjamin
// Ignatius
// Donatello
// */

