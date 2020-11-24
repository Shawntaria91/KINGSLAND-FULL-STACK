function main(numOfBiscuits, employees, bakedBiscuits) {
    let thirdDay = Math.floor(numOfBiscuits * 0.75 * employees);
    let totThirdDay = (thirdDay * 10);
    let totalBiscuits = Math.floor((numOfBiscuits * 20 * employees) + totThirdDay);
    let perc = ((totalBiscuits - bakedBiscuits) / bakedBiscuits * 100).toFixed(2);
    if (thirdDay < 1) {
        thirdDay = 0;
    }
    console.log(`You have produced ${totalBiscuits} biscuits for the past month.`);
    if (totalBiscuits > bakedBiscuits) {
        console.log(`You produce ${perc} percent more biscuits.`);
    } else {
        perc = ((bakedBiscuits - totalBiscuits) / bakedBiscuits * 100).toFixed(2);
        console.log(`You produce ${perc} percent less biscuits.`);
    }
}