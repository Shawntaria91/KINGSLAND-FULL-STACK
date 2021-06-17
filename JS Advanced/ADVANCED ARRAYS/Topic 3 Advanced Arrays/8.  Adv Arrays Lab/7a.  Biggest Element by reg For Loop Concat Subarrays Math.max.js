function main(arrOfArrs){
    concatSubarraysToOneArray(arrOfArrs);
}

function concatSubarraysToOneArray(arrOfArrs){
    let concatArr = [];
    
    for(let i = 0; i < arrOfArrs.length; i++){
       concatArr = concatArr.concat(arrOfArrs[i]);
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
