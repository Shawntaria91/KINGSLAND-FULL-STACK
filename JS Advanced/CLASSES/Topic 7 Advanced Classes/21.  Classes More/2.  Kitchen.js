// 2. Kitchen
// class Kitchen {
//     To Do: implement this class
// }
// Write a class Kitchen which has the following functionality:

// Constructor
// Should have 4 properties:
//  budget
//  menu
//  productsInStock
//  actionsHistory
// At initialization of the Kitchen class, the constructor accepts only the budget! The rest of the properties must be
// empty!

// Methods:
// ● LoadProducts()
// ● Accept 1 property products (array from strings).
// o Every element into this array is information about product in format:
// "{productName} {productQuantity} {productPrice}"
// o They are separated by a single space
// Example: ["Banana 10 5", "Strawberries 50 30", "Honey 5 50"…]
// ● This method appends products into our products in stock (productsInStock) under the following
// circumstances:
// o If the budget allows us to buy the current product, we add it to productsInStock keeping the name
// and quantity of the meal and we deduct the price of the product from our budget. If the current
// product already exists into productsInStock just add the new quantity
// o And finally, whether or not we have added a product to stock or not, we record our action in the
// actionsHistory:
// - If we were able to add the current product:
// "Successfully loaded {productQuantity} {productName}"
// - If we not:
// "There was not enough money to load {productQuantity} {productName}"
// ● This method must return all actions joined by a new line!

// ● AddToMenu()
// ● Accept 3 properties meal (string), needed products (array from strings) and price (number).
// o Every element in needed products is in format:
// "{productName} {productQuantity}"
// o They are separated by a single space!
// ● This method appends a new meal into our menu and returns the following message:
// "Great idea! Now with the {meal} we have {the number of all means in the
// menu} meals in the menu, other ideas?"
// ● If we do not have the given meal into our menu, we added it keeping all that we are given as information.
// Otherwise if we already have this meal print the message:
// " The {meal} is already in our menu, try something different."

// ● ShowTheMenu()
// ● This method just prints all meals from our menu separated by a new line in format:
// {meal} - $ {meal price}
// {meal} - $ {meal price}
// {meal} - $ {meal price}
// …
// At the end trim the result!
// ● If our menu is empty, just print the message:
// "Our menu is not ready yet, please come later..."

// ● MakeTheOrder()
// ● Accept 1 property meal (string).
// ● This method searches the menu for a certain meal.
// o If we do not have the given meal, print the following message:
// "There is not {meal} yet in our menu, do you want to order something else?"
// o Otherwise if we have this meal in the menu, we need to check if we have the needed products to
// make it! If we do not have all needed products for this meal, print the following message:
// "For the time being, we cannot complete your order ({meal}), we are very
// sorry..."
// o If we have this meal in the menu and also, we have all needed products to make it, print the following
// message:
// "Your order ({meal}) will be completed in the next 30 minutes and will cost
// you {the current price of the meal}."
// ● You also need to remove all used products from those in stock and add the price of the meal to the total
// budget.

// What to submit?
// You are only required to submit the Kitchen class. No need to include the codes from the example.
// Class Signature: class Kitchen
class Kitchen {
    constructor(budget) {
        this.budget = +budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }
    loadProducts(productsArr) { 
    //['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']
        let messageLog = [];
        for (let entry of productsArr) {
            let [product, quantity, price] = entry.split(' ');
            price = +price;
            quantity = +quantity;

            if (this.budget - price >= 0) {
                if (this.productsInStock[product]) this.productsInStock[product] += quantity;
                else this.productsInStock[product] = quantity;
                this.budget -= price;
                messageLog.push(`Successfully loaded ${quantity} ${product}`);//test 3
            } else {
                messageLog.push(`There was not enough money to load ${quantity} ${product}`);//test 4
            }
        }
        //this.actionsHistory.push(messageLog.join('\n'))
        this.actionsHistory = [...this.actionsHistory, ...messageLog];//
        return this.actionsHistory.join('\n');//test 5 pass
    }
    addToMenu(meal, ingredients, price) {// 'frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99
        if (!this.menu[meal]) {
            // this.menu[meal] = [ingredients, +price]
            this.menu[meal] = {
                products: ingredients,
                price: +price
            };
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`; //? no effect //TEST 6 ERROR
        } else return `The ${meal} is already in our menu, try something different.`;//test 7 - pass
    }
    showTheMenu() {
        let toPrint = [];
        for (let key of Object.keys(this.menu)) {
            toPrint.push(`${key} - $ ${this.menu[key].price}`);
        }
        if (!toPrint.length) return ('Our menu is not ready yet, please come later...');//test 8 pass
        else { return toPrint.join('\n') + '\n' } // // TEST 9 ERROR
    }
    makeTheOrder(meal) {
        if (!this.menu[meal]) return (`There is not ${meal} yet in our menu, do you want to order something else?`);
        //check for products     
        //     'frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99)
        let ingredientsNeeded = this.menu[meal].products;
        for (let item of ingredientsNeeded) { //item = 'product quantity'
            item = item.split(' ');
            let quantity = +item.pop();
            let product = item.join(' ');
            //let [product, quantity] = item.split(' ')
            if (this.productsInStock[product] < quantity || !this.productsInStock[product]) {
                return (`For the time being, we cannot complete your order (${meal}), we are very sorry...`); // test 15
            }
        }
        for (let item of ingredientsNeeded) {
            item = item.split(' ');
            let quantity = +item.pop();
            let product = item.join(' ');
            this.productsInStock[product] -= quantity;
        }
        this.budget += this.menu[meal].price;
        return (`Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`);//test 13 pass
    }
}
let kitchenObj = new Kitchen (1000);
console.log(kitchenObj.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
//  Successfully loaded 10 Banana
//  Successfully loaded 20 Banana
//  Successfully loaded 50 Strawberries
//  Successfully loaded 10 Yogurt
//  There was not enough money to load 500 Yogurt
//  Successfully loaded 5 Honey
console.log(kitchenObj.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchenObj.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
//  Great idea! Now with the frozenYogurt we have 1 meals on the menu, other ideas?
//  Great idea! Now with the Pizza we have 2 meals on the menu, other ideas?
console.log(kitchenObj.makeTheOrder('frozenYogurt'));

console.log(kitchenObj.showTheMenu());
//  frozenYogurt - $ 9.99
//  Pizza - $ 15.55


