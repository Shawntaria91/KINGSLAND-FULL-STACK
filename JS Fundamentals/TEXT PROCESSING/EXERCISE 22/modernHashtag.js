// The input will be a single string.

// Find all special words starting with #. Words are invalid if it has anything other than letters.

// Print the words you found without the tag each on a new line.



function main(str) {

    hashtag(str);
}

function hashtag(str) {

    let separate = str.split(' ');

    for (i = 0; i < separate.length;) {

        let possible = separate.shift();

        if (possible.startsWith('#') && possible.length > 1) {

            possible = possible.slice(1);

            let letters = /^[A-Za-z]+$/;

            if (possible.match(letters)) {

                console.log(possible);
            }
        }
    }
}
main();