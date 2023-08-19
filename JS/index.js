// common function 

function getItem (name) {
    const itemName = document.getElementById(name);
    const itemText = itemName.innerText;
    return itemText;

}
function cartItems (cartId) {
    const itemsCart = document.getElementById(cartId);
    return itemsCart;
}

// item list 

function accessoriesOne() {
    const item1 = getItem('item-1');
    const p = document.createElement('p');
    p.innerText = item1;

    const itemContainer = cartItems('selected-items');
    itemContainer.appendChild(p);

    

}
