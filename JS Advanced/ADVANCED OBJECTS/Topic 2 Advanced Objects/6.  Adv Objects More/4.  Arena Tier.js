4. Arena Tier
/*
Pesho is a pro gladiator and he is struggling to become master of the Arena.
You will receive an array of strings with each element is formatted by:
"{gladiator} -> {technique} -> {skill}"
or
"{gladiator} vs {gladiator}"
The 'gladiator' and 'technique' are strings and 'skill' is a number. You need to keep track of each of the gladiators.
When you receive a gladiator with its technique and skill, you should add it to the gladiator pool. If the gladiator
exists in the pool, add its technique and skill or update its technique's skill if the new technique skill is higher than
the current one by replacing the value.
If you receive "{gladiator} vs {gladiator}" and both gladiators exist in the tier, they duel with the following rules:
 Look for a technique that both exists between them. The gladiator with the highest technique skill wins
while the losing gladiator should get demoted from the tier and remove it from the pool.
 If no common technique exists, the battle is canceled and you should proceed to the next array element.
You should end your program when you receive the command "Ave Cesar". At that point, you should print the
gladiators ordered by total skill in descending order, then ordered by name in ascending order. For each gladiator
print, their technique and skill ordered skill in descending order, then ordered by technique name in ascending
order.
Input / Constraints
You will receive an array of strings as a parameter to your solution.
 The input comes in the form of commands in one of the formats specified above.
 Gladiator and technique will always be one word string, containing no whitespaces.
 Skill will be an integer in the range [0, 1000].
 There will be no invalid input lines.
 The programm ends when you receive the command "Ave Cesar".
Output
 The output format for each gladiator is:
"{gladiator}: {totalSkill} skill"
"- {technique} <!> {skill}"
Scroll down to see examples.
*/
// function main() {
// }
// main();
// function arenaTier(input = []) {
//     let result = {};
//     for (let i = 0; i < input.length; i++) {
//         if (input[i].includes("Ave Cesar")) {
//             break;
//         }
//         if (!input[i].includes("vs")) {
//             let [name, technique, skill] = input[i].split(" -> ");
//             skill = +skill;
//             if (!result.hasOwnProperty(name)) {
//                 result[name] = {};
//                 result[name][technique] = skill;
//             }
//             if (!result[name].hasOwnProperty(technique)) {
//                 result[name][technique] = skill;
//             } else {
//                 if (result[name][technique] < skill) {
//                     result[name][technique] = skill;
//                 }
//             }
//         } else {
//             let [name1, name2] = input[i].split(" vs ");
//             if (result.hasOwnProperty(name1) && result.hasOwnProperty(name2)) {
//                 let firstTech = [...Object.keys(result[name1])];
//                 let secondTech = [...Object.keys(result[name2])];
//                 let isTrue = false;
//                 for (let j = 0; j < firstTech.length; j++) {
//                     if (secondTech.includes(firstTech[j])) {
//                         isTrue = true;
//                         break;
//                     }
//                 }
//                 if (isTrue === true) {
//                     let firstSkill = 0;
//                     for (const key in result[name1]) {
//                         if (result[name1].hasOwnProperty(key)) {
//                             firstSkill += result[name1][key];
//                         }
//                     }
//                     let secondSkill = 0;
//                     for (const key in result[name2]) {
//                         if (result[name2].hasOwnProperty(key)) {
//                             secondSkill += result[name2][key];
//                         }
//                     }
//                     if (firstSkill > secondSkill) {
//                         delete result[name2];
//                     } else {
//                         delete result[name1];
//                     }
//                 }
//             }
//         }
//     }
//     let skillOrder = {};
//     let names = [...Object.keys(result)];
//     for (const name of names) {
//         let sum = 0;
//         for (const tech in result[name]) {
//             sum += result[name][tech];
//         }
//         skillOrder[name] = sum;
//     }
//     let output = [...Object.entries(skillOrder)].sort((a, b) => b[1] - a[1]);
//     for (let i = 0; i < output.length; i++) {
//         console.log(`${output[i][0]}: ${output[i][1]} skill`);
//         let ss = [...Object.entries(result[output[i][0]])];
//         for (const s of ss.sort(
//                 (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
//             )) {
//             console.log(`- ${s[0]} <!> ${s[1]}`);
//         }
//     }
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Another solution using a map
function startSeason(input) {
    const map = new Map();
    for (let i = 0; i <= input.length - 1; i++) {
        if (input[i].includes('->')) {
            let [gladiator, technique, skill] = input[i].split(' -> ');
            skill = Number(skill);
            if (!map.has(gladiator)) {
                let innerMap = new Map();
                innerMap.set(technique, skill);
                map.set(gladiator, innerMap);
            } else {
                let innerMap = map.get(gladiator);
                if (!innerMap.has(technique)) {
                    innerMap.set(technique, skill);
                } else {
                    let currentPoints = map.get(gladiator).get(technique);
                    if (currentPoints < skill) {
                        map.get(gladiator).set(technique, skill);
                    }
                }
            }
        } else {
            let [gladiator1, gladiator2] = input[i].split(' vs ');
            if (map.has(gladiator1) && map.has(gladiator2)) {
                let canFight = false;
                for (let technique of map.get(gladiator1).keys()) {
                    if (map.get(gladiator2).has(technique)) {
                        canFight = true;
                        break;
                    }
                }
                if (canFight) {
                    let pointsGladiator1 = findTotalPoints(gladiator1);
                    let pointsGladiator2 = findTotalPoints(gladiator2);
                    if (pointsGladiator1 > pointsGladiator2) {
                        map.delete(gladiator2);
                    } else if (pointsGladiator2 > pointsGladiator1) {
                        map.delete(gladiator1);
                    }
                }
            }
        }
    }
    Array.from(map.keys()).sort((a, b) => findTotalPoints(b) - findTotalPoints(a) || a.localeCompare(b)).forEach(element => {
        console.log(element + ": " + findTotalPoints(element) + " skill");
        Array.from(map.get(element).entries()).sort((a, b) => Number(b[1] - Number(a[1])) || a[0].localeCompare(b[0]))
            .forEach(e => console.log(`- ${e[0]} <!> ${e[1]}`));
    });
    function findTotalPoints(name) {
        return Array.from(map.get(name).values()).reduce((a, b) => a + b);
    }
}
// Examples
// Input
/*
Pesho -> BattleCry -> 400
Gosho -> PowerPunch -> 300
Stamat -> Duck -> 200
Stamat -> Tiger -> 250
Ave Cesar
// Output
Stamat: 450 skill
- Tiger <!> 250
- Duck <!> 200
Pesho: 400 skill
- BattleCry <!> 400
Gosho: 300 skill
- PowerPunch <!> 300
// Comments
We order the gladiators by
total skill points descending,
then by name. We print every
technique along its skill
ordered descending by skill,
then by technique name.
*/
// Input
/*
Pesho -> Duck -> 400
Julius -> Shield -> 150
Gladius -> Heal -> 200
Gladius -> Support -> 250
Gladius -> Shield -> 250
Pesho vs Gladius
Gladius vs Julius
Gladius vs Gosho
Ave Cesar
// Output
Gladius: 700 skill
- Support <!> 250
- Shield <!> 250
- Heal <!> 200
Pesho: 400 skill
- Duck <!> 400
// Comments
Gladius and Pesho don`t have
common technique, so the duel
isn`t valid.
Gladius wins vs Julius /common
technique: "Shield". Julius is
demoted.
Gosho doesn`t exist so the duel
isn`t valid.
We print every gladiator left
in the tier.
*/
