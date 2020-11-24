// Create a function which creates a register for heroes, with their names, level, and items (if they have such).

// The input comes as array of strings. Each element holds data for a hero, in the following format:

// “{heroName} / {heroLevel} / {item1}, {item2}, {item3}...”

// You must store the data about every hero. The name is a string, the level is a number and the items are all strings.

// The output is all of the data for all the heroes you’ve stored sorted ascending by level and the items are sorted

// alphabetically. The data must be in the following format for each hero:

// Hero: {heroName}

// level => {heroLevel}

// Items => {item1}, {item2}, {item3}



function main(input) {

    class Hero {

        constructor(hero, level, items) {

            this.hero = hero;
            this.level = level;
            this.items = items;
            this.result = () => console.log(`Hero: ${hero}\nlevel => ${level}\nitems => ${items}`);
        }
    }

    let newArray = [];

    for (let i = 0; i < input.length; i++) {

        let heroInfo = input[i].split(' / ');
        let [hero, level, items] = [heroInfo[0], heroInfo[1], heroInfo[2].split(', ').sort().join(',')];

        newArray.push(new Hero(hero, level, items));
    }

    newArray.sort(function(firstSub, secSub) {

    let firstSub1 = firstSub.level,
        secSub1 = secSub.level;

    if (firstSub1 == secSub1) 
        return 0;
        return firstSub1 > secSub1 ? 1 : -1});

    for (let fin of newArray) {

        fin.result();
    }

}
main(["Isacc / 25 / Apple, GravityGun","Derek / 12 / BarrelVest, DestructionSword","Hes / 1 / Desolator, Sentinel, Antara"]);