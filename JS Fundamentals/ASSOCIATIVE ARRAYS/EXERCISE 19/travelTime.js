// Write a function that collects and orders information about traveling destinations.

// As input you will receive an array of strings.

// Each string will consist of the following information with format:

// "Country name > Town name > Travel cost"

// Country name will be unique string, Town name will also be unique string, Travel cost will be a number.

// If you receive the same Town name twice, you should keep the cheapest offer. Have in mind that one Country may

// have several Towns to visit.

// After you finish the organizational part, you need to let Steven know which destination point to visit first. The order

// will be as follows: First sort Country names alphabetically and then sort by lowest Travel cost.



function main(travelInfoList) {

    let map = new Map();
    let sepTravelCost = [];

    for (let string of travelInfoList) {

        let singlePackage = string.split(', ');
        let info = singlePackage.toString().split(' > ');
        let country = info[0];
        let town = info[1];
        let cost = Number(info[2]);
        let countryNTown = country + ' ' + town;

        if (!map.has(countryNTown)) {

            map.set(countryNTown, cost);
        } else {

            let currCost = map.get(countryNTown);

            if (cost < currCost) {

                map.set(countryNTown, cost);
            }
        }
    }

    let travelCostList = Array.from(map);

    travelCostList.forEach(item => {

        let sepTownCount = item[0].split(' ');

        country = sepTownCount[0];
        town = sepTownCount[1];
        cost = item[1];
        sepTravelCost.push([country, town, cost]);
    });

    sepTravelCost.sort((a, b) => {

        if (a[0] < b[0]) {

            return -1;
        }

        if (a[0] > b[0]) {

            return 1;
        }

        if (a[2] < b[2]) {

            return -1;
        }

        if (a[2] > b[2]) {

            return 1;
        }
    });

    let uniqDestCost = [];

    sepTravelCost.forEach(item => {

    if (!uniqDestCost.includes(item[0])) {

        uniqDestCost.push(item[0]);
    }
});

    let townCost = ' ';

    uniqDestCost.forEach(item => {

        sepTravelCost.forEach(listItem => {

            if (item == listItem[0]) {

                townCost += `${listItem[1]} -> ${listItem[2]} `;
            }
    });
    console.log(`${item} -> ${townCost.trim()}`);
    townCost = '';
    });
}

main(["Bulgaria > Sofia > 500",
"Bulgaria > Sopot > 800", 
"France > Paris > 2000", "Albania > Tirana > 1000",
"Bulgaria > Sofia > 200"]);