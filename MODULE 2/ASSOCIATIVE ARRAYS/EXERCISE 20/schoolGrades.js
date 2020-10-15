// Write a function to store students with their grades. If a student appears more than once, add the new grades. At

// the end print the students sorted by average grade. The input comes as an array of strings.



function main(strArr) {
    schoolGrades(strArr);
}

function schoolGrades(strArr) {

    let map = new Map();

    for (let string of strArr) {

        let sepItems = string.split(' ');
        let student = sepItems[0];
        let grades = sepItems.splice(1, sepItems.length).map(Number);

// Check if the map does NOT have the name, if so, set it to an empty array and push all the grades. Otherwise, just push the grades
        if (!map.has(student)) {

            map.set(student, []);
            map.set(student,
            map.get(student).concat(grades));
        } else {

            map.set(student,
            map.get(student).concat(grades));
        }
    }
    
    let sorted = Array.from(map).sort((a, b) => avgGrade(a, b));

/*if we don't have the name, we need to create it and concatenate [.concat()] the empty array and the new one

Otherwise, we just concat() them

Now we sort by average grades:*/

//console.log(Array.from([1, 2, 3], x => x + x));

// expected output: Array [2, 4, 6]

//we need to create a function for averaging:

function avgGrade(first, sec) {

    let firstSum = 0;

     for (let i = 0; i < first[1].length; i++) {

        firstSum += first[1][i];
    }

    let secSum = 0;

    for (let i = 0; i < sec[1].length; i++) {

        secSum += sec[1][i];
    }

    // a and b are two key-value pairs of our map. The grades are the values.

    // For us to calculate average we need to take the sum and divide it by the length of each array
    let firstAvg = firstSum / first[1].length;
    let secAvg = secSum / sec[1].length;

    //Finally, we return aAverage-bAverage:
    return firstAvg - secAvg;
    }

// We sorted the map, now loop through the keys and values and print them in the format from the example.

    for (let x of sorted) {

        console.log(`${x[0]}: ${x[1].join(', ')}`.trim());

// Tammy: 2, 4, 3

// Lilly: 4, 6, 6, 5

// Tim: 5, 6, 6, 6

    }

}