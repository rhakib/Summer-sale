// common function 

function getItem(name) {
    const itemName = document.getElementById(name);
    const itemText = itemName.innerText;
    return itemText;

}
function cartItems(cartId) {
    const itemsCart = document.getElementById(cartId);
    return itemsCart;
}

function itemsPriceTotal(previousPrice, priceAmount) {
    const previousTotal = document.getElementById(previousPrice);
    const previousTotalString = previousTotal.innerText;
    const total = parseFloat(previousTotalString);

    totalPrice = total + priceAmount;

    previousTotal.innerText = totalPrice;

    const totalAmount = document.getElementById('total');
    totalAmount.innerText = totalPrice;

    const applyBtn = document.getElementById('apply-coupon-btn');
    if (totalPrice >= 200) {
        applyBtn.removeAttribute('disabled');
    
    }
    else {
        applyBtn.setAttribute('disabled', true);
    }

    const purchaseBtn = document.getElementById('purchase');
    if (totalPrice > 0) {
        purchaseBtn.removeAttribute('disabled' );
        
        
    
    }
    else {
        purchaseBtn.setAttribute('disabled', true);
        

    }

}

// btnCoupn()

// item list 
let totalPrice = 0;
function accessoriesOne(event) {
    const item1 = getItem('item-1');
    const li = document.createElement('li');
    li.innerText = item1;

    const itemContainer = cartItems('selected-items');
    itemContainer.appendChild(li);

    const priceString = event.childNodes[3].childNodes[5].innerText.split(" ")[0];
    const priceAmount = parseFloat(priceString);

    itemsPriceTotal('total-price', priceAmount)
}

function accessoriesTwo(event) {

    const item1 = getItem('item-2');
    const li = document.createElement('li');
    li.innerText = item1;

    const itemContainer = cartItems('selected-items');
    itemContainer.appendChild(li);

    const priceString = event.childNodes[3].childNodes[5].innerText.split(" ")[0];
    const priceAmount = parseFloat(priceString);

    itemsPriceTotal('total-price', priceAmount)

}

document.getElementById('apply-coupon-btn').addEventListener('click', function () {
    const inputCoupon = document.getElementById('input-coupon');
    const inputCouponField = inputCoupon.value;
    console.log(inputCouponField);


    if (inputCouponField === 'SELL200') {

        const discountAmount = totalPrice * 20 / 100;
        const discountField = document.getElementById('discount');
        discountField.innerText = discountAmount;

        const totalAmount = document.getElementById('total');
        totalAmount.innerText = totalPrice - discountAmount;

    }
    

})
