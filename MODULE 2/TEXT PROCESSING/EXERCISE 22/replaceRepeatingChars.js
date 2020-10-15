// Write a function that receives a single string and replaces any sequence of the same letters with a single

// corresponding letter.



function main(str) {

    let updated = [];
    
    for (i = 0; i < str.length; i++) {

        if (str[i] != str[i - 1]) {

            updated.push(str[i]);
        }
    }
    console.log(updated.join(''));
}