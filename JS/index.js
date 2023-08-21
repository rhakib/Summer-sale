// common function 

function getItem(name) {
    const itemName = document.getElementById(name);
    const itemText = itemName.innerText;
    const li = document.createElement('li');
    li.innerText = itemText;

    const itemContainer = document.getElementById('selected-items');
    itemContainer.appendChild(li);
    // return itemText;



}
function itemsPriceTotal(previousPrice, priceAmount) {
    const previousTotal = document.getElementById(previousPrice);
    const previousTotalString = previousTotal.innerText;
    const total = parseFloat(previousTotalString);

    totalPrice = total + priceAmount;

    previousTotal.innerText = totalPrice.toFixed(2);

    const totalAmount = document.getElementById('total');
    totalAmount.innerText = totalPrice;

    const applyBtn = document.getElementById('apply-coupon-btn');
    if (totalPrice >= 200) {
        applyBtn.removeAttribute('disabled');
        applyBtn.classList.add('bg-pink-500');
    
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

// item list 
let totalPrice = 0;
function accessoriesOne(event) {
    getItem('item-1');

    const priceString = event.childNodes[3].childNodes[5].innerText.split(" ")[0];
    const priceAmount = parseFloat(priceString);

    itemsPriceTotal('total-price', priceAmount)
}

function accessoriesTwo(event) {

    getItem('item-2');

    const priceString = event.childNodes[3].childNodes[5].innerText.split(" ")[0];
    const priceAmount = parseFloat(priceString);

    itemsPriceTotal('total-price', priceAmount)
}
function homeCooker(event) {

    getItem('item-3');

    const priceString = event.childNodes[3].childNodes[5].innerText.split(" ")[0];
    const priceAmount = parseFloat(priceString);

    itemsPriceTotal('total-price', priceAmount)
}
function sportsCap(event) {

    getItem('item-4');

    const priceString = event.childNodes[3].childNodes[5].innerText.split(" ")[0];
    const priceAmount = parseFloat(priceString);

    itemsPriceTotal('total-price', priceAmount)
}
function jerseySet(event) {

    getItem('item-5');

    const priceString = event.childNodes[3].childNodes[5].innerText.split(" ")[0];
    const priceAmount = parseFloat(priceString);

    itemsPriceTotal('total-price', priceAmount)
}
function sportsCates(event) {

    getItem('item-6');

    const priceString = event.childNodes[3].childNodes[5].innerText.split(" ")[0];
    const priceAmount = parseFloat(priceString);

    itemsPriceTotal('total-price', priceAmount)
}
function relaxChair(event) {

    getItem('item-7');

    const priceString = event.childNodes[3].childNodes[5].innerText.split(" ")[0];
    const priceAmount = parseFloat(priceString);

    itemsPriceTotal('total-price', priceAmount)
}
function childrenPlay(event) {

    getItem('item-8');

    const priceString = event.childNodes[3].childNodes[5].innerText.split(" ")[0];
    const priceAmount = parseFloat(priceString);

    itemsPriceTotal('total-price', priceAmount)
}
function flexibleSofa(event) {

    getItem('item-9');

    const priceString = event.childNodes[3].childNodes[5].innerText.split(" ")[0];
    const priceAmount = parseFloat(priceString);

    itemsPriceTotal('total-price', priceAmount)
}


// cart items part  

document.getElementById('apply-coupon-btn').addEventListener('click', function () {
    const inputCoupon = document.getElementById('input-coupon');
    const inputCouponField = inputCoupon.value;
    console.log(inputCouponField);

    if (inputCouponField === 'SELL200') {

        const discountAmount = totalPrice * 20 / 100;
        const discountField = document.getElementById('discount');
        discountField.innerText = discountAmount.toFixed(2);

        const totalAmount = document.getElementById('total');
        totalAmount.innerText = (totalPrice - discountAmount).toFixed(2);    
    }
})

function goHomeBtn() {
     location.reload();
}

