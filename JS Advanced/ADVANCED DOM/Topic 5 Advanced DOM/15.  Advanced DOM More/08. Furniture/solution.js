// 3. Furniture
// You will be given some furniture as an array of objects . Each object will have a name , a price and a decoration
// factor .
// When the "Generate" button is clicked , add a new row to the table for each piece of furniture with image , name ,
// price and decoration factor (code example below).
// When the " Buy " button is clicked, get all checkboxes that are marked and show in the result textbox the
// names of the piece of furniture that were checked , separated by a comma and single space ( ", " ) in the following
// format: "Bought furniture: {furniture1} {furniture2}…" .
// On the next line, print the total price in format: "Total price: {totalPrice}" (formatted to the second
// decimal point). Finally, print the average decoration factor in the format: "Average decoration factor:
// {decFactor}"

// Input Example
// [{"name": "Sofa", "img":
// "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/
// grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]

// Examples

<!-- <tr> -->
<!-- <td> -->
<!-- <img src =" https://www.ikea.com/PIAimages/0447583_PE597395_S5.JPG"> -->
<!-- </td> -->
<!-- <td> -->
<!-- <p>Sofa</p> -->
<!-- </td> -->
<!-- <td> -->
<!-- <p>259</p> -->
<!-- </td> -->
<!-- <td> -->
<!-- <p>0.4</p> -->
<!-- </td> -->
<!-- <td> -->
<!-- <input type="checkbox"> -->
<!-- </td> -->
<!-- </tr> -->


// What to submit?
// Zip file containing the following:
// ● solution.js
// ● template.css
// ● template.html
// File Name: FURNITURE.zip

function solve() {
    const inputArea = document.querySelector("#exercise > textarea:nth-child(2)");
    const tbodyMenu = document.querySelector("#exercise > div > div > div > div > table > tbody");
    const outputArea = document.querySelector("#exercise > textarea:nth-child(5)");
    const checkbox = document.getElementsByTagName("input");
    checkbox[0].outerHTML = '<input type=\"checkbox\">';

    Object.values(document.getElementsByTagName('button')).map(btn => btn.addEventListener('click', function() {
        if (btn.textContent === 'Generate') {
            createElements();

        } else if (btn.textContent === 'Buy') {
            findMarkedObjects();
        }
    }))

    function createElements() {
        let furnitureArray = JSON.parse(inputArea.value);

        for (let obj of furnitureArray) {
            let tr = document.createElement('tr');
            let td = document.createElement('td');

            for (let i = 0; i < 5; i++) {
                tr.appendChild(td.cloneNode(true));
            }

            fillElements(tr, obj);
            tbodyMenu.appendChild(tr);
        }
    }

    function fillElements(tr, obj) {
        tr.children[0].innerHTML = `<img src=${obj['img']}>`;
        tr.children[1].innerHTML = `<p>${obj['name']}</p>`;
        tr.children[2].innerHTML = `<p>${obj['price']}</p>`;
        tr.children[3].innerHTML = `<p>${obj['decFactor']}</p>`;
        tr.children[4].innerHTML = `<input type="checkbox"/>`;
    }

    function findMarkedObjects() {
        outputArea.value = '';
        let myOrder = [];
        let totalPrice = 0;
        let decFactor = 0;
        let menuLength = tbodyMenu.children.length;
        let rows = tbodyMenu.children;

        for (let i = 0; i < menuLength; i++) {
            if (checkbox[i].checked === true) {
                let td = rows[i].children;
                addFurniture(td);
            }
        }

        printResult(myOrder, totalPrice, decFactor);

        function addFurniture(td) {
            myOrder.push(td[1].textContent.trim());
            totalPrice += Number(td[2].textContent);
            decFactor += Number(td[3].textContent);
        }
    }

    function printResult(myOrder, totalPrice, decFactor) {
        outputArea.value +=
            `Bought furniture: ${myOrder.join(', ')} \n` +
            `Total price: ${totalPrice.toFixed(2)} \n` +
            `Average decoration factor: ${(decFactor / myOrder.length).toFixed(1)}\n`;
    }
}

//