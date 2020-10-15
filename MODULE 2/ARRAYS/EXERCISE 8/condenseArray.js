function main(toBeCondensed) {
    if (toBeCondensed == 1) {
        console.log(toBeCondensed[0]);
    } else {
        while (toBeCondensed.length > 1) {
            let condensedArray = [];
            for (i = 0; i < toBeCondensed.length - 1; i++) {
                condensedArray[i] = toBeCondensed[i] + toBeCondensed[i + 1];
            }
            toBeCondensed = condensedArray;
        }
        console.log(toBeCondensed.toString());
    }
}
main([2, 10, 3]);  //25