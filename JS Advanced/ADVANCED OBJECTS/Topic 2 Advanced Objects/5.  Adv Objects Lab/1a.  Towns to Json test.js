/* 1. Towns to JSON
You're tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each string represents a table row, with values on the row encompassed by pipes "|" and optionally spaces. The table will consist of exactly 3 columns: "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. 
Check the examples to get a better understanding of your task.
Input
The input comes as an array of strings – the first string contains the table’s headings while the remaining strings contains the data of the table.
Output
 The output should be an array of objects wrapped in JSON.stringify().
 Latitude and longitude must be parsed to numbers and formatted to the second decimal point. */

main(['| Town | Latitude | Longitude |','| Melbourne |-37.840935 | 144.946457|','| Beijing | 39.913818 | 116.363625 |']);
//[{"Town":"Melbourne","Latitude":-37.84,"Longitude":144.95},{"Town":"Beijing","Latitude":39.91,"Longitude":116.36}]

function main (inputArr){
    arrayToJSON(inputArr);
}

function arrayToJSON(inputArr){
    let obj = {};
    let keys = [];
    for (i = 0; i < inputArr.length; i++){
        keys = inputArr.shift().split(/\s*\|\s*/);//['', 'Melbourne', '-37.840935', '144.946457', '']
    }
    console.log(keys);
    //inputArr is now ['| Melbourne |-37.840935 | 144.946457|', '| Beijing | 39.913818 | 116.363625 |']

}


