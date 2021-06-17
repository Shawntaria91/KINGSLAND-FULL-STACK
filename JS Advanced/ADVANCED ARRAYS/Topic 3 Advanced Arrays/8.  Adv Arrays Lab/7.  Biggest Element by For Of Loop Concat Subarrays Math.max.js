function main(numArr){
    concatSubarraysToOneArray(numArr);
}

function concatSubarraysToOneArray(numArr){
    let concatArr = [];
    
    for (let subArr of numArr){
        concatArr = concatArr.concat(subArr);
    }
    console.log(Math.max(...concatArr)); 
}
main(
[
    [20, 50, 10],
    [8, 33, 145]
]);
//145

main(
[
    [3,5,7,12],
    [-1,4,33,2],
    [8,3,0,4]
]);
//33