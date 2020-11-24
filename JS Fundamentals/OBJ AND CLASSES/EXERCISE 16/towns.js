// You’re tasked to create and print objects from a text table.

// You will receive the input as an array of strings, 

// where each string represents a table row, with values on the row

// separated by pipes " | " and spaces.

// The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". 

// The latitude and longitude columns will always contain valid numbers. 

// Check the examples to get a better understanding of your task.

// The output should be objects. 

// Latitude and longitude must be parsed to numbers and formatted to the second decimal point!



function main(towns) {

    for (i = 0; i < towns.length; i++) {

        let currTown = {};
        let townsStr = towns[i];
        let townsArr = townsStr.split("|");
        currTown.town = townsArr[0].trim();
        currTown.latitude =  parseFloat(townsArr[1].trim()).toFixed(2);
        currTown.longitude = parseFloat(townsArr[2].trim()).toFixed(2);

        console.log(currTown);

    }

}

function towns(arr) {

    class Town {

        constructor(townName,latitude, longitude) {

            this.townName

        }

    }

}
main(["Atlanta | 33.753746 | -84.386330","Beijing | 39.913818 | 116.363625"]);