// 2. Shopping Cart
// You will be given some products that you should be able to add to your cart. Each product will have a name ,
// picture and a price .
// When the "Add" button is clicked, append the current product to the textarea in the following format: "Added
// {name} for {money} to the cart.\n" .
// When the button "Checkout" is clicked, calculate the total money that you need to pay for the products that are
// currently in your cart. Append the result to the textarea in the following format:
// "You bought {list} for {totalPrice}."
// The list should contain only the unique products , separated by ", " . The total price should be rounded to the
// second decimal point.
// Also, after clicking over " Checkout " and every from above is done you should disable all buttons . (You can't add
// products or checkout again, if once checkout button is clicked)
// What to submit?
// Zip file containing the following:
// ● solution.js
// ● template.css
// ● template.html
// File Name: SHOPPING-CART.zip
function solve() {
   let totalMoney = 0;
   let shoppingCart = [];
   let endShopping = false;
   const output = document.querySelector("body > div > textarea");
   Object.values(document.getElementsByTagName('button')).map(b => b.addEventListener('click', function (t) {
      let clickedButton = t.target.className;
      if (clickedButton === 'add-product' && !endShopping) {
         addItem(t);
      } else if (clickedButton === 'checkout' && !endShopping) {
         checkout();
      }
   }));

   function addItem(t) {
      let items = listOfItems();
      let item = t.target.parentNode.parentNode.children[1].children[0].textContent;
      let info = `Added ${item} for ${items[item].toFixed(2)} to the cart.`;
      myCart(items, item);
      printResult(info);
   }

   function myCart(items, item) {
      totalMoney += items[item];
      if (!shoppingCart.includes(item)) {
         shoppingCart.push(item);
      }
   }

   function checkout() {
      let info = `You bought ${shoppingCart.join(', ')} for ${totalMoney.toFixed(2)}.`;
      endShopping = true;
      printResult(info);
   }

   function printResult(info) {
      output.textContent += `${info}\n`;
   }

   function listOfItems() {
      let products = {
         'Bread': 0.80,
         'Milk': 1.09,
         'Tomatoes': 0.99
      };
      return products;
   }
}
//