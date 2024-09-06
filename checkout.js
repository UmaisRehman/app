document.addEventListener('DOMContentLoaded', function () {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceSpan = document.getElementById('total-price');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    function updateCart() {
        cartItemsDiv.innerHTML = ''; 
        totalPrice = 0;

        cart.forEach((phone, index) => {
            const phoneDiv = document.createElement('div');
            phoneDiv.innerHTML = `
                <p><strong>${phone.brand} ${phone.model}</strong></p>
                <p>Price: Rs. ${phone.price}</p>
                <p>Quantity: 
                    <button onclick="decreaseQuantity(${index})">-</button>
                    <span>${phone.quantity}</span>
                    <button onclick="increaseQuantity(${index})">+</button>
                </p>
                <p>Subtotal: Rs. ${phone.price * phone.quantity}</p>
            `;
            cartItemsDiv.appendChild(phoneDiv);

            totalPrice += phone.price * phone.quantity;
        });

        totalPriceSpan.textContent = `Rs. ${totalPrice}`;
    }

    window.increaseQuantity = function(index) {
        cart[index].quantity++;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart(); 
    }

    window.decreaseQuantity = function(index) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1); 
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart(); 
    }

    updateCart();
});
