function main(numList) {
    let topIntegers = "";
    for (let i = 0; i < numList.length; i++) {
        let max = true;
        for (let j = i + 1; j < numList.length; j++) {
            if (numList[i] <= numList[j]) {
                max = false;
                break;
            }
        }
        if (max) {
            topIntegers += `${numList[i]} `;
        }
    }
    console.log(topIntegers.trim());
}
main([1, 4, 3, 2]);


