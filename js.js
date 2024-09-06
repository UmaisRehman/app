const arr = [
    { brand: 'Samsung', model: 'S20', ram: 8, rom: 256, camera: '20 megapixel', price: 15000 },
    { brand: 'Xiomi', model: 'note10', ram: 4, rom: 64, camera: '10 megapixel', price: 15000 },
    { brand: 'Infinix', model: 'z10', ram: 2, rom: 16, camera: '5 megapixel', price: 15000 },
    { brand: 'Tecno', model: 'spark10', ram: 12, rom: 512, camera: '25 megapixel', price: 15000 },
    { brand: 'Iphone', model: '14', ram: 4, rom: 1024, camera: '30 megapixel', price: 15000 },
    { brand: 'Oppo', model: 'F11', ram: 8, rom: 256, camera: '20 megapixel', price: 15000 },
    { brand: 'Vivo', model: 'y20', ram: 4, rom: 64, camera: '8 megapixel', price: 15000 },
    { brand: 'Samsung', model: 's50', ram: 50, rom: 1024, camera: '60 megapixel', price: 300000 }
];

document.addEventListener('DOMContentLoaded', function () {
    const mobileList = document.getElementById('mobile-list');
    
    arr.forEach((phone, index) => {
        const phoneDiv = document.createElement('div');
        phoneDiv.innerHTML = `
            <p><strong>${phone.brand} ${phone.model}</strong></p>
            <p>RAM: ${phone.ram} GB, ROM: ${phone.rom} GB</p>
            <p>Camera: ${phone.camera}</p>
            <p>Price: Rs. ${phone.price}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        mobileList.appendChild(phoneDiv);
    });

    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click', function () {
        window.location.href = 'checkout.html';
    });
});

function addToCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingItem = cart.find(item => item.model === arr[index].model);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...arr[index], quantity: 1 }); 
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}
