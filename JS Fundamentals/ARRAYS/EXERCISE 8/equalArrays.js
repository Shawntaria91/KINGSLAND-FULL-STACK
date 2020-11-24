function main(array1, array2) {
    let isMatch = true;
    let stoppedMatching = 0;
    let sumsEqual = 0;
    for (let i = 0; i < array1.length; i++) {
        stoppedMatching = array1.indexOf(array1[i]);
        if (array1[i] !== array2[i]) {
            isMatch = false;
            console.log(`Arrays are not identical. Found difference at ${stoppedMatching} index`);
        }
    }
    if (isMatch === true) {
        for (let i = 0; i < array1.length;) {
            sumsEqual += Number(array1.shift());
        }
        console.log(`Arrays are identical. Sum: ${sumsEqual}`);
    }
}
main(["10", "20", "30"], ["10", "20", "30"]);