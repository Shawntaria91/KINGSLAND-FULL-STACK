function main(inputArr) {
    
    let result = [];

    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] != undefined)  {
            inputArr[i] < 0 ? result.unshift(inputArr[i]) : result.push(inputArr[i]);
        }
    }
    
    for (let j = 0; j < result.length; j++) {

        if (result[j] != undefined) {
        console.log(result[j]);
        }
    }
}
main([7, -2, 8, 9]);