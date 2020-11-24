// Write a function that prints a rectangle made of stars with variable size, depending on an input

// parameter. If there is no parameter specified, the rectangle should always be of size 5. Look at the

// examples to get an idea.

// The input comes as a single number argument.

// The output is a series of lines printed on the console, forming a rectangle of variable size.



function main(input) {

    sqOfStars(input);
}

function sqOfStars(input) {

    for (let i = 1; i <= input; i++) {

        let stars = "*";

        for (let j = 1; j < input; j++) {

            stars += " *";
        }
        console.log(stars);
    }
}
main(1);
main(2);
main(5);
main(6);