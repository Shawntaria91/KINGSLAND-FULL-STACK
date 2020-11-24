// You are given an array of strings. Every even index is representing a resource (e.g. Gold, Silver, Copper, and so on),

// and every odd – quantity. Your task is to collect the resources and print them each on a new line.

// Print the resources and their quantities in format:

// {resource} –> {quantity}

// The quantities inputs will be in the range [1 … 2 000 000 000]



function main(quantityNResource) { 

    let mineTask = new Map();

    for (let i = 0; i < quantityNResource.length; i++) {

        if (i % 2 == 0) {

            let resource = quantityNResource[i];
            let quantity = Number(quantityNResource[i + 1]);

        if (!mineTask.has(resource)) {

            mineTask.set(resource, quantity);
        } else {

            mineTask.set(resource, (mineTask.get(resource) + quantity));
        }
    }

}

    newArr = Array.from(mineTask);
    
    for (i = 0; i < newArr.length; i++) {
    
        console.log(`${newArr[i][0]} -> ${newArr[i][1]}`);
    }
}

main(['Gold',
'155', 
'Silver', '10', 
'Copper', '17']);