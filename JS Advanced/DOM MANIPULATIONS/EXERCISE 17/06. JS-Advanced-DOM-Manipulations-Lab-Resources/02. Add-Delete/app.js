// Extend the previous problem to display a [Delete] link after each list item. 
// Clicking it should delete the item with no confirmation. 
// Submit only the addItem() function

// Input/Output
// There will be no input/output. Your program should instead modify the DOM of the given HTML document. 

function addItem() {

    const items = document.getElementById('items');
    const value = document.getElementById('newText').value;

    let newItems = document.createElement('li');

    newItems.innerText = value + ' ';

    let deleteLink = document.createElement('a');

    deleteLink.innerText = '[Delete]';
    deleteLink.href = '#';
    deleteLink.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.parentNode.removeChild(this.parentNode);
    });

    newItems.appendChild(deleteLink);
    items.appendChild(newItems);
    document.getElementById('newText').value = '';
}