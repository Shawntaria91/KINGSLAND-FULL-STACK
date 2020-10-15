// You will receive an array with JSON strings.

// You have to parse these strings and combine them into one object. Every string from the array will hold terms and a

// definition. If you receive the same term twice replace it with the new definition.

// Print every term and definition in that dictionary on new line in format:

// Term: ${term} => Definition: ${definition}

// Don't forget to sort the dictionary alphabetically by the terms as in real dictionaries.



function main(termNDef) {

    let dictionary = {};
    let sortedArr = [];

    for (let i = 0; i < termNDef.length; i++) {

        let currFullDef = termNDef[i];
        let object = JSON.parse(currFullDef);

        for (let key in object) {

            dictionary[key] = object[key];
        }
    }
    sortedArr = Object.entries(dictionary);
    sortedArr.sort((a, b) => {

    if (a[0] < b[0]) {

        return -1;
    }

    if (a[0] > b[0]) {
    
        return 1;
    }

});

sortedArr.forEach(element => {

    console.log(`Term: ${element[0]} => Definition: ${element[1]}`);
});
}



main(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);