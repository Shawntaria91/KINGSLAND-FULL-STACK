/*
You are tasked to create a register for a company that produces cars. 
You need to store how many cars have been produced from a specified model of a specified brand.

Input
The input comes as array of strings. 
Each element holds information in the following format:
“{carBrand} | {carModel} | {producedCars}”
The car brands and models are strings, 
the produced cars are numbers.
If the car brand you’ve received already exists, 
-just add the new car model to it with the produced cars as its value. 
If even the car model exists, 
-just add the given value to the current one.

Output
As output, you need to print - for every 
-car brand, 
-the car models, and 
-number of cars produced from that model.

The output format is:
“{carBrand}
 ###{carModel} -> {producedCars}
 ###{carModel2} -> {producedCars}
 ...”
The order of printing is the order in which the brands and models first appeared from the input. 
The first brand in the input should be the first printed and so on. 
For each brand, the first model received from that brand, should be the first printed and so on.
*/

function main(carData) {
    let total = new Map();
    for (let i = 0; i < carData.length; i++) {
        let currCar = carData[i].split(' | ');
        let brand = currCar[0];
        let model = currCar[1];
        let numOfCarsProduced = Number(currCar[2]);
        if (!total.has(brand)) {
            total.set(brand, new Map);
        }
        if (!total.get(brand).has(model)) {
            total.get(brand).set(model, 0);
        }
        total.get(brand).set(model, total.get(brand).get(model) + numOfCarsProduced);
    }
    for (let [carBrand, carModel] of total) {
        console.log(carBrand);
        for (let [model, qty] of carModel) {
            console.log("###" + model + " -> " + qty);
        }
    }
}
main(["Audi | Q7 | 1000", "Audi | Q6 | 100", "BMW | X5 | 1000", "BMW | X6 | 100",
 "Citroen | C4 | 123", "Volga | GAZ-24 | 1000000", "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000", "Citroen | C4 | 22", "Citroen | C5 | 10"]);