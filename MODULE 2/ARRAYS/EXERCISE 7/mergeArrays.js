function main(firstArray, secondArray) {
    let thirdArray = "";

    for (i = 0; i < firstArray.length; i++) {
        if (i % 2 == 0) {
            if (i == (firstArray.length - 1)) {
                thirdArray += (Number(firstArray[i]) + Number(secondArray[i]));
            } else {
                thirdArray += (Number(firstArray[i]) + Number(secondArray[i]) + " - ");
            }
        } else {
            if (i == (firstArray.length - 1)) {
                thirdArray += (firstArray[i] + secondArray[i]);
            } else {
                thirdArray += (firstArray[i] + secondArray[i] + " - ");
            }
        }
    }
    console.log(thirdArray);
}
main(["5","15","23","56","35"], ["17","22","87","37","11"]);
