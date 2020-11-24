function main(city, area, popul, country, psc) {

        let town = {
            name: city,
            area: area,
            population: popul,
            country: country,
            postCode: psc
        };

        let entries = Object.entries(town);

        for(let [key, value] of entries) {
            console.log(`${key} -> ${value}`);
        }
}
main("Atlanta", "343", "416474", "USA", "404");