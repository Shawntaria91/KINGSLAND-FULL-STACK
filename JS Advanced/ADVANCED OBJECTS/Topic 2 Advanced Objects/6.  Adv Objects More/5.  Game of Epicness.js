//5. Game of Epicness
/*
Write a JavaScript program that determines the winner from all battles. You will receive two arguments:
The first argument is an array of kingdoms with generals and their army in the form of an object with the format:
{ kingdom: String, general: String, army: Number }
Every general has their army that fights for a certain kingdom. Note that every kingdom’s name is unique, and
every general’s name is also unique in their kingdom. If the general already exists in their kingdom, add the army
to their current one. After storing all the kingdoms with their generals and armies, the battles can be simulated.
The second argument is a matrix of strings showing which kingdom’s generals will be fighting in this format:
[
 [ "{AttackingKingdom} ", "{AttackingGeneral}", "{DefendingKingdom} ", "{DefendingGeneral}" ],
 …
]
The first two elements are the attacking kingdom and it's general, respectively while the other two elements are
the defending kingdom and it's general, respectively. Compare the two general armies and whoever has the larger
army wins. The winner’s army will increase by 10% and the loser’s army will decrease by 10%. Keep in mind that
armies should be round down if there is any excess army after the battle. If the battle is a draw, do not do
anything. Keep track of the win and lose count of each general.
Note that, generals from the same kingdom cannot attack each other.
After you finished all battles, you need to determine which kingdom wins the game. To decide that, order them by
all their general’s wins (descending) then by their losses (ascending), and finally by the kingdom’s name in
ascending alphabetical order. In short, the kingdom with the most wins and few losses is the game-winner.
Input
You will receive two arguments – an array of objects with properties and a matrix of strings as shown above.
Output
Print the winning kingdom and sort the generals by their armies in descending order, formatted as seen in the
examples.
Constraints
 The number of elements in the first input argument will be in range [1..100] inclusive.
 The number of elements in the second input argument will be in range [0..100] inclusive.
 General’s army will be always an integer in range [0..1,000,000] inclusive.
 There will be no invalid input.
 There will be no matching number of armies in the output.
*/
function main(arrayOfKingdoms, fightingKingdoms) {
    solve(arrayOfKingdoms, fightingKingdoms);
}

function solve(arrayOfKingdoms, fightingKingdoms) {
    let kingdoms = {};
    for (let element of arrayOfKingdoms) {
        let kingdomName = element.kingdom;
        let generalName = element.general;
        let army = +element.army;
        if (!kingdoms.hasOwnProperty(kingdomName)) {
            kingdoms[kingdomName] = {
                [generalName]: { army, wins: 0, losses: 0 }
            };
        } else {
            if (kingdoms[kingdomName].hasOwnProperty([generalName])) {
                kingdoms[kingdomName][generalName].army += army;
            } else {
                kingdoms[kingdomName][generalName] = {
                    army,
                    wins: 0,
                    losses: 0
                };
            }
        }
    }
    for (let element of fightingKingdoms) {
        let attackKingdom = element[0];
        let attackGeneral = element[1];
        let defendKingdom = element[2];
        let defendGeneral = element[3];
        let armyAttack = 0;
        let armyDefend = 0;
        if (
            kingdoms.hasOwnProperty(attackKingdom) &&
            kingdoms.hasOwnProperty(defendKingdom)
        ) {
            if (kingdoms[attackKingdom] === kingdoms[defendKingdom]) {
                continue;
            }
            if (
                kingdoms[attackKingdom].hasOwnProperty(attackGeneral) &&
                kingdoms[defendKingdom].hasOwnProperty(defendGeneral)
            ) {
                armyAttack = kingdoms[attackKingdom][attackGeneral].army;
                armyDefend = kingdoms[defendKingdom][defendGeneral].army;
            }
        }
        if (armyAttack > armyDefend) {
            kingdoms[attackKingdom][attackGeneral].army = Math.floor(
                armyAttack + armyAttack * 0.1
            );
            kingdoms[attackKingdom][attackGeneral].wins += 1;
            kingdoms[defendKingdom][defendGeneral].army = Math.floor(
                armyDefend - armyDefend * 0.1
            );
            kingdoms[defendKingdom][defendGeneral].losses += 1;
        } else if (armyAttack < armyDefend) {
            kingdoms[defendKingdom][defendGeneral].army = Math.floor(
                armyDefend + armyDefend * 0.1
            );
            kingdoms[defendKingdom][defendGeneral].wins += 1;
            kingdoms[attackKingdom][attackGeneral].army = Math.floor(
                armyAttack - armyAttack * 0.1
            );
            kingdoms[attackKingdom][attackGeneral].losses += 1;
        }
    }

    let orderedKingdoms = Object.keys(kingdoms).sort(
        (a, b) =>
        getTotal(kingdoms[b], 'wins') - getTotal(kingdoms[a], 'wins') ||
        getTotal(kingdoms[a], 'losses') - getTotal(kingdoms[b], 'losses') ||
        a.localeCompare(b)
    );
    let winner = orderedKingdoms[0];
    console.log(`Winner: ${winner}`);
    let generals = Object.keys(kingdoms[winner]).sort(
        (a, b) => kingdoms[winner][b].army - kingdoms[winner][a].army
    );
    generals.forEach(general => {
        let info = kingdoms[winner][general];
        console.log(`/\\general: ${general}`);
        console.log(`---army: ${info.army}`);
        console.log(`---wins: ${info.wins}`);
        console.log(`---losses: ${info.losses}`);
    });
    function getTotal(kingdom, type) {
        return Object.keys(kingdom).reduce((acc, cur) => (acc + kingdom[cur][type]), 0);
    }
}
