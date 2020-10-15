function main(stringArr) {

    class Hero {

        constructor(hero, level, items) {

            this.hero = hero;
            this.level = level;
            this.items = items;
            this.result = () => console.log(`Hero: ${hero}\nlevel => ${level}\nitems => ${items}`);
        }
    }

    let newArray = [];

    for (let i = 0; i < stringArr.length; i++) {

        let heroInfo = stringArr[i].split(' / ');
        let [hero, level, items] = [heroInfo[0], heroInfo[1], heroInfo[2].split(', ').sort().join(', ')];

        newArray.push(new Hero(hero, level, items));
    }

    newArray.sort(function(firstSub, secSub) {

        let firstSub1 = firstSub.level,
            secSub1 = secSub.level;

        if (firstSub1 == secSub1)
            return 0;
        return firstSub1 > secSub1 ? 1 : -1
    });

    for (let fin of newArray) {

        fin.result();
    }

}
main(["Isacc / 25 / Apple, GravityGun","Derek / 12 / BarrelVest, DestructionSword","Hes / 1 / Desolator, Sentinel, Antara"]);