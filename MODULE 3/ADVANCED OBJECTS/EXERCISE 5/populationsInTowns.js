/*
You have been tasked to create a register for different towns and their population.

Input
The input comes as array of strings. 
Each element will contain data for a town and its population in the following format:
“{townName} <-> {townPopulation}”
If you receive the same town twice, you should add the given population to the current one.

Output
As output, you must print all the towns, and their population.
*/

function main(townsAndPopulations) {
    let towns = {};
    for (let item of townsAndPopulations) {
        let pattern = /([A-Za-z\s]+)\s+<->\s+([\d]+)/g;
        let match = pattern.exec(item);
        let town = match[1];
        let population = +(match[2]);
        if (!towns.hasOwnProperty(town)) {
            towns[town] = 0;
        }
        towns[town] += population;
    }
    Object.keys(towns).forEach(x => console.log(`${x}: ${towns[x]}`));
}
main(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);