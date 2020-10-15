//function main(input) {
//
//    let newArr = [];
//    let fin = [];
//
//    input.map(item => {
//        let tempItem = item.split("|");
//        tempItem.shift();
//        tempItem.pop();
//        
//        let trimItem = tempItem.map((x) => {
//            return x.trim();
//        });
//
//        newArr.push(trimItem);
//    });
//
//    class ATown {
//        constructor(town, lat, long) {
//            this.Town = town;
//            this.Latitude = lat;
//            this.Longitude = long;
//        }
//    }
//
//    for (town of newArr) {
//
//        fin.push(
//            new ATown(
//                town[0],
//                Number(Number(town[1]).toFixed(2)),
//                Number(Number(town[2]).toFixed(2))
//            )
//        );
//    }
//
//    console.log(JSON.stringify(fin));
//}
//main(['| Town | Latitude | Longitude |',
//'| Melbourne |-37.840935 | 144.946457|',
//'| Beijing | 39.913818 | 116.363625 |']);

/*
You're tasked to create and print a JSON from a text table. 
You will receive input as an array of strings, where each
string represents a table row, 
with values on the row encompassed by pipes "|" and optionally spaces. 
The table will consist of exactly 3 columns: "Town", "Latitude" and "Longitude". 
The latitude and longitude columns
will always contain valid numbers. Check the examples to get a better understanding of your task.
Input
The input comes as an array of strings – the first string contains the table’s headings while the remaining strings
contains the data of the table.
Output
 The output should be an array of objects wrapped in JSON.stringify().
 Latitude and longitude must be parsed to numbers and formatted to the second decimal point.
*/
function main(input) {
    let towns = [];
    let regex = /\s*\|\s*/;
    for (let line of input.splice(1)) {
        let sepTownData = line.split(regex);
        let townRecord = { Town: sepTownData[1], Latitude: +(parseFloat(sepTownData[2]).toFixed(2)), Longitude: +(parseFloat(sepTownData[3]).toFixed(2)) };
        towns.push(townRecord);
    }
    console.log(JSON.stringify(towns));
}
main(['| Town | Latitude | Longitude |',
    '| Melbourne |-37.840935 | 144.946457|',
    '| Beijing | 39.913818 | 116.363625 |'
]);