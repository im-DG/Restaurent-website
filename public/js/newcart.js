// Initialize cart data
let cart = [];
let cartTotal = 0;

// Add an item to the cart
function addToCart(item) {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id: item.id, name: item.name, price: item.price, quantity: 1 });
    }
    updateCart();
}

// Remove an item from the cart
function removeFromCart(itemId) {
    cart = cart.filter((cartItem) => cartItem.id !== itemId);
    updateCart();
}

// Update the cart display and total
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    cartTotal = 0;
    cart.forEach((cartItem) => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.innerText = cartItem.name;
        const priceCell = document.createElement('td');
        priceCell.innerText = cartItem.price;
        const quantityCell = document.createElement('td');
        quantityCell.innerText = cartItem.quantity;
        const removeCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.addEventListener('click', () => removeFromCart(cartItem.id));
        removeCell.appendChild(removeButton);
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(quantityCell);
        row.appendChild(removeCell);
        cartItems.appendChild(row);
        cartTotal += cartItem.price * cartItem.quantity;
    });
    cartTotalElement.innerText = cartTotal.toFixed(2);
}
