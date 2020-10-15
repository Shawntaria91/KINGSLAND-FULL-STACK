// Write a function that receives a list of neighborhoods and then some people, who are going to live in it. The input

// will come as an array of strings. The first element will be the list of neighborhoods separated by ", ".
// The rest of the elements will be a neighborhood 
// followed by a name of a person in the format "{neighborhood} - {person}".

// Add the person to the neighborhood only if the neighborhood is in the list of neighborhoods. 
// At the end print the

// neighborhoods sorted by the count of inhabitants in descending order. Print them in the following format:

// "{neighborhood}: {inhabitants count}

// --{1st inhabitant}

// --{2nd inhabitant}

// …"



function main(neighborhoodsAndPpl) {

/* ['Abbey Street, Herald Street, Bright Mews',

'Bright Mews - Garry',

'Bright Mews - Andrea',

'Invalid Street - Tommy',

'Abbey Street - Billy'] */

    let map = new Map();

//Save the first element of the array as the neighborhoods
    let neighborhoods = neighborhoodsAndPpl[0].split(", ");
// ['Abbey Street', 'Herald Street', 'Bright Mews']

//Fill the map with them and set their values as empty arrays
    for (let neighborhood of neighborhoods) {

        map.set(neighborhood, []);
// {Abbey Street => [], Herald Street => [], Bright Mews => []}
    }

//Loop through the rest of the elements
    for (let i = 1; i < neighborhoodsAndPpl.length; i++) {

        let curr = neighborhoodsAndPpl[i].split(" - ");
//['Bright Mews', 'Garry'] ['Bright Mews', 'Andrea'] ['Invalid Street', 'Tommy'] ['Abbey Street', 'Billy']
        let neighborhood = curr[0];
//Bright Mews Bright Mews Invalid Street Abbey Street
        let person = curr[1];
// Garry Andrea Tommy Billy

//Check if the neighborhood is in the map and add the person
        if (neighborhoods.includes(neighborhood)) {

            map.get(neighborhood).push(person);
// {Abbey Street => (1) ['Billy'], Herald Street => (0) [], Bright Mews => (2) ['Garry', …]}
        }
    }

    let sorted = Array.from(map).sort((a, b) => (b[1].length > a[1].length && 1) || (b[1].length === a[1].length ? 0 : -1));

    for (i = 0; i < sorted.length; i++) {

        console.log(`${sorted[i][0]}: ${sorted[i][1].length}`);

        for (j = 0; j < sorted[i][1].length; j++) {

            console.log(`--${sorted[i][1][j]}`);
        }
    }
}
main(['Abbey Street, Herald Street, Bright Mews',

'Bright Mews - Garry',

'Bright Mews - Andrea',

'Invalid Street - Tommy',

'Abbey Street - Billy'

]);