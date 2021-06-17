function main(matrix){
    pairsWithinMatrix(matrix);
}
function pairsWithinMatrix(matrix) {
  let pairCount = 0;
  let tempArrToCompare = [];   

    for(let subArr of matrix){
        for(let i = 0; i< subArr.length; i++){
            if (subArr[i] === tempArrToCompare[i]) {
            pairCount++;
            }
        }
        tempArrToCompare = subArr;
        //this code overwrites the tempArr with the subArr each time it loops
    }
    console.log(pairCount);
}
main(
[
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]
);