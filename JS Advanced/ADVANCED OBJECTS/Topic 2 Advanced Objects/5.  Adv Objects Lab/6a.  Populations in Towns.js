// 6. Populations in Towns
/*
You have been tasked to create a register for different towns and their population.
Input
The input comes as array of strings. Each element will contain data for a town and its population in the following
format:
“{townName} <-> {townPopulation}”
If you receive the same town twice, you should add the given population to the current one.
Output
As output, you must print all the towns, and their population.
*/
// Examples
// Input
// [Sydney<-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000']
// Output
// Sydney: 1200000
// Montana : 20000
// New York : 10000000
// Washington : 2345000
// Las Vegas : 1000000
// Input
// ['Istanbul <-> 100000',
// 'Honk Kong <-> 2100004',
// 'Jerusalem <-> 2352344',
// 'Mexico City <-> 23401925',
// 'Istanbul <-> 1000']
// Output
// Istanbul : 101000
// Honk Kong : 2100004
// Jerusalem : 2352344
// Mexico City : 23401925

/*
You have been tasked to create a register for different towns and their population.
Input
The input comes as array of strings. Each element will contain data for a town and its population in the following
format:
“{townName} <-> {townPopulation}”
If you receive the same town twice, you should add the given population to the current one.
Output
As output, you must print all the towns, and their population.
*/
function main(dataRows) {
    let total = new Map();
    for (let dataRow of dataRows) {
        let [town, population] = dataRow.split(/\s*<->\s*/);
        population = Number(population);
        if (total.has(town)) {
            total.set(town, total.get(town) + population);
        } else {
            total.set(town, population);
        }
    }
    for (let [town, sum] of total) {
        console.log(`${town}: ${sum}`);
    }
}
main(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);
main(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000']);
// Examples
// Input
// [Sydney<-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000']
// Output
// Sydney: 1200000
// Montana : 20000
// New York : 10000000
// Washington : 2345000
// Las Vegas : 1000000
// Input
// ['Istanbul <-> 100000',
// 'Honk Kong <-> 2100004',
// 'Jerusalem <-> 2352344',
// 'Mexico City <-> 23401925',
// 'Istanbul <-> 1000']
// Output
// Istanbul : 101000
// Honk Kong : 2100004
// Jerusalem : 2352344
// Mexico City : 23401925