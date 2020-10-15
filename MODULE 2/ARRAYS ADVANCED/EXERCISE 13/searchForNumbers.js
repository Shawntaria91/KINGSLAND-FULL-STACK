function main(targetArray, actionArray) {
    let takeNum = actionArray[0];
    let deleteNum = actionArray[1];
    let searchNum = actionArray[2];
    let takeAction = targetArray.splice(0, takeNum);
    let deleteAction = takeAction.splice(deleteNum);
    let counter = 0;

    for (let i = 0; i <= deleteAction.length; i++) {
        if (deleteAction[i] == searchNum) {
            counter++;
        }
    }
    console.log(`Number ${searchNum} occurs ${counter} times.`);
}
main([5, 2, 3, 4, 1, 6], [5, 2, 3]);