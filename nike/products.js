const items = []

function addItem() {
    let v = (event.target.offsetParent.children[1].innerText);
    let num = parseInt(v.match(/\d+/g));
    let item = {
        image: event.target.offsetParent.previousElementSibling.children[1].src,
        name: event.target.offsetParent.firstElementChild.innerText,
        price: num,
        total: parseInt(num),
        quantity: 1
    }
    itemToLocalStore(item);
    window.alert("Your product has been added to your cart!");
}


function itemToLocalStore(item) {
    let itemInCart = JSON.parse(localStorage.getItem('cartItem'));
    if (itemInCart === null) {
        items.push(item);
        localStorage.setItem('cartItem', JSON.stringify(items));
    } else {
        console.log("item In cart Length:" + itemInCart.length);
        itemInCart.forEach(product => {
            if (item.name == product.name) {
                item.quantity = product.quantity += 1;
                item.total = product.total += item.total;
            } else {
                items.push(product);
            }
        });
        items.push(item);
    }
    localStorage.setItem('cartItem', JSON.stringify(items));
    window.location.reload();
}

function displayCart() {
    let summary = '';
    let itemInCart = JSON.parse(localStorage.getItem('cartItem'))
    console.log(itemInCart);
    itemInCart.forEach(product => {
        summary += `
    <div class="proInfo">
        <div class="product">
            <img class="pro-img" src="${product.image}">
            <p>${product.name}</p>
        </div>
        <div id="price" class="price"><p>$${product.price}</p></div>
        <div class="quantity">${product.quantity}</div>
        <div class="subtotal">$${product.total}</div>
    </div>`
    });
    document.querySelector('.dispPro').innerHTML = summary;
}
displayCart();


function subtotal() {
    subtotal = 0;
    let itemInCart = JSON.parse(localStorage.getItem('cartItem'))
    itemInCart.forEach(product => {
        subtotal = product.total += subtotal;
        dispSubtotal = '$' + subtotal;
    });
    document.querySelector('.payment p').textContent = dispSubtotal;
}
subtotal();


function addCoupon() {
    let coupon20 = 'COSC2430-HD';
    let coupon10 = 'COSC2430-DI';
    let input = document.getElementById('discount').value;
    if (input == "") {
        finalTotal = subtotal;
        document.querySelector('.payment section:last-of-type p').textContent = '$' + finalTotal;
        document.getElementById('error-Msg').innerHTML = "";
        document.getElementById('correct-Msg').innerHTML = "";
        return true;
    } else if (input === coupon20) {
        beforeDiscount = subtotal;
        discount = 0.2;
        discountAmount = beforeDiscount * discount;
        finalTotal = beforeDiscount - discountAmount;
        document.querySelector('.payment section:nth-child(2) p').textContent = '- $' + discountAmount;
        document.querySelector('.payment section:last-of-type p').textContent = '$' + finalTotal;
        document.getElementById('correct-Msg').innerHTML = "Coupon applied!";
        document.getElementById('error-Msg').innerHTML = "";
        return true;
    } else if (input === coupon10) {
        beforeDiscount = subtotal;
        discount = 0.1;
        discountAmount = beforeDiscount * discount;
        finalTotal = beforeDiscount - discountAmount;
        document.querySelector('.payment section:nth-child(2) p').textContent = '- $' + discountAmount;
        document.querySelector('.payment section:last-of-type p').textContent = '$' + finalTotal;
        document.getElementById('correct-Msg').innerHTML = "Coupon applied!";
        document.getElementById('error-Msg').innerHTML = "";
        return true;
    } else {
        finalTotal = subtotal;
        document.querySelector('.payment section:last-of-type p').textContent = '$' + finalTotal;
        document.getElementById('error-Msg').innerHTML = "Invalid coupon!";
        document.getElementById('correct-Msg').innerHTML = "";
        return false;
    }
}
addCoupon();