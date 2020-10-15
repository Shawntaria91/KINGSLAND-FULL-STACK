function main(numBottles, kitchenware) {
    var detergent = 750 * numBottles;
    var soapUsed = 0;
    var currentDish = 0;
    var cleanPlates = 0;
    var cleanPots = 0;
    var remainingDetergent = detergent - soapUsed;
    var i = 0;
    while ((soapUsed < remainingDetergent) && (currentDish !== "End")) {
            if (i <= kitchenware.length) {
                currentDish = kitchenware[i]; 
                if ((i + 1) % 3 == 0) {
                    cleanPots += Number(currentDish);
                    soapUsed += Number(currentDish) * 15;
                    remainingDetergent = detergent - soapUsed;
                } else {
                cleanPlates+= Number(currentDish);
                soapUsed += Number(currentDish) * 5;
                remainingDetergent = detergent - soapUsed;
            }
            i++;
            currentDish = kitchenware[i];
            }      
        }
    var required = soapUsed - detergent;
    if ((soapUsed <= detergent) && (currentDish == "End")) {
        console.log(`Detergent was enough!`);
    } 

    console.log(`${cleanPlates} dishes and ${cleanPots} pots were washed.`);

    if ((soapUsed <= detergent) && (currentDish == "End")) {
        console.log(`Leftover detergent ${remainingDetergent} ml`);
    }

    if ((soapUsed > detergent) && (currentDish !== "End")) {    
        console.log(`Not enough detergent, ${required} ml more necessary!`);
    }

}
main(2, [53, 65, 55, "End"]);