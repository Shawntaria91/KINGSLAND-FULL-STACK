/*
Create a function that register heroes from an array of strings. 
Each string in the array has a format and it contains
the hero name, level and may or may not contain items. 
You must extract the data and store it in an array.
Print the result as JSON.
Input
The input comes as array of strings. Each element holds data for a hero, in the following format:
“{heroName} / {heroLevel} / {item1}, {item2}, {item3}...”
You must store the data of each hero. The name is a string, the level is a number and the items are all strings.
Output
The output is a JSON representation of the data for all the heroes you’ve stored. The data must be an array of all
the heroes. Check the examples for more info.
*/
function main(heroData) {
    let heroRecord = [];
    for (let i = 0; i < heroData.length; i++) {
        let currHero = heroData[i].split(' / ');
        let currHeroName = currHero[0];
        let currHeroLevel = +currHero[1];
        if (currHero.length > 2) {
            currHeroItems = currHero[2].split(', ');
        }
        let hero = {
            name: currHeroName,
            level: currHeroLevel,
            items: currHeroItems,
        };
        heroRecord.push(hero);
    }
    console.log(JSON.stringify(heroRecord));
}
main(['Isacc / 25 / Apple, GravityGun','Derek / 12 / BarrelVest, DestructionSword','Hes / 1 / Desolator, Sentinel, Antara']);