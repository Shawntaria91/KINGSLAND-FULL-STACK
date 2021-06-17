/*5. Auto-Engineering Company
You are tasked to create a register for a company that produces cars. You need to store how many cars have been produced from a specified model of a specified brand.
Input
The input comes as array of strings. Each element holds information in the following format:
“{carBrand} | {carModel} | {producedCars}”
The car brands and models are strings, the produced cars are numbers. If the car brand you’ve received already
exists, just add the new car model to it with the produced cars as its value. If even the car model exists, just add the given value to the current one.
Output
As output, you need to print - for every car brand, the car models, and number of cars produced from that model.
The output format is:
“{carBrand}
 ###{carModel} -> {producedCars}
 ###{carModel2} -> {producedCars}
 ...”
The order of printing is the order in which the brands and models first appeared from the input. The first brand in the input should be the first printed and so on. For each brand, the first model received from that brand, should be the first printed and so on.
*/
function main(input) {
    arrayToKvpArrowOutput(input);
}
//["Audi | Q7 | 1000", "Audi | Q6 | 100", "BMW | X5 | 1000", "BMW | X6 | 100", "Citroen | C4 | 123", "Volga | GAZ-24 | 1000000", "Lada | Niva | 1000000", "Lada | Jigula | 1000000", "Citroen | C4 | 22", "Citroen | C5 | 10"]
function arrayToKvpArrowOutput(input){
    let total = new Map();

    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(/\s*\|\s*/);
        let carBrand = current[0];
        let carModel = current[1];
        let producedCars = +current[2];

        if (!total.has(carBrand)) {//check total to see if current brand exists in object.  If not, then
            total.set(carBrand, new Map);//set key of brand to a new map(model, number of cars)
        }
        if (!total.get(carBrand).has(carModel)) {//get brand from total, check if model exists in object. If not, get brand and set the car model and initialize number.
            total.get(carBrand).set(carModel, 0);
        }
        total.get(carBrand).set(carModel, total.get(carBrand).get(carModel) + producedCars);

    }
    for (let [carBrand, carModel] of total) {//to print the brand on its own line
        console.log(carBrand);
        for (let [model, quantity] of carModel) {//to print the key value pair of models and quantity in the required format.
            console.log(`###${model} -> ${quantity}`);
        }
    }
}
main(["Audi | Q7 | 1000", "Audi | Q6 | 100", "BMW | X5 | 1000", "BMW | X6 | 100", "Citroen | C4 | 123", "Volga | GAZ-24 | 1000000", "Lada | Niva | 1000000", "Lada | Jigula | 1000000", "Citroen | C4 | 22", "Citroen | C5 | 10"]);
/*
Audi
###Q7 -> 1000
###Q6 -> 100
BMW
###X5 -> 1000
###X6 -> 100
Citroen
###C4 -> 145
###C5 -> 10
Volga
###GAZ-24 -> 1000000
Lada
###Niva -> 1000000
###Jigula -> 1000000
*/