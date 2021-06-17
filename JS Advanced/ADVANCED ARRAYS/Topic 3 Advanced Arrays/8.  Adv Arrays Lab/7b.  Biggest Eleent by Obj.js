function main(arrOfArrays){
    console.log(obj.concatArrs(arrOfArrays));

}

const obj = {
    concatArrs: function arrBuilder(arrOfArrays) {
        let concatArr = [];
    
        for (let subArr of arrOfArrays){
        concatArr = concatArr.concat(subArr);
    }
        return Math.max(...concatArr);
    }
};

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