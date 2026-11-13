const products = [
  { id: 1, name: 'Notebook', price: 350 },
  { id: 2, name: 'Pen set', price: 180 },
  { id: 3, name: 'Desk planner', price: 500 },
];

const cart = [];

const productContainer = document.querySelector('#products');
const cartItems = document.querySelector('#cart-items');
const itemCount = document.querySelector('#item-count');
const cartTotal = document.querySelector('#cart-total');
const cartMessage = document.querySelector('#cart-message');
const checkoutButton = document.querySelector('#checkout');

// Format prices in Kenyan shillings
function formatMoney(amount) {
  return `KSh ${amount.toLocaleString('en-KE')}`;
}

// Display the shopping cart
function renderCart() {
  cartItems.replaceChildren();

  cart.forEach((item) => {
    const row = document.createElement('li');

    const details = document.createElement('span');
    details.textContent = `${item.name} × ${item.quantity} — ${formatMoney(item.price * item.quantity)}`;

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = 'Remove';
    removeButton.setAttribute('aria-label', `Remove ${item.name}`);

    removeButton.addEventListener('click', () => {
      removeFromCart(item.id);
    });

    row.append(details, removeButton);
    cartItems.append(row);
  });

  const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  itemCount.textContent = `${quantity} ${quantity === 1 ? 'item' : 'items'}`;

  cartTotal.textContent = formatMoney(total);

  checkoutButton.disabled = cart.length === 0;
}

// Display available products
function renderProducts() {
  productContainer.replaceChildren();

  products.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'product';

    const title = document.createElement('h2');
    title.textContent = product.name;

    const price = document.createElement('p');
    price.textContent = formatMoney(product.price);

    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Add to basket';

    button.addEventListener('click', () => {
      addToCart(product);
    });

    card.append(title, price, button);
    productContainer.append(card);
  });
}

// Add a product to the basket
function addToCart(product) {
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  cartMessage.textContent = `${product.name} added to your basket.`;

  renderCart();
}

// Remove a product from the basket
function removeFromCart(id) {
  const index = cart.findIndex((item) => item.id === id);

  if (index === -1) return;

  const removedItem = cart[index];

  cart.splice(index, 1);

  cartMessage.textContent = `${removedItem.name} removed from your basket.`;

  renderCart();
}

// Demo checkout
checkoutButton.addEventListener('click', () => {
  if (cart.length === 0) {
    cartMessage.textContent = 'Your basket is empty.';
    return;
  }

  cartMessage.textContent = 'Demo checkout complete. No payment was taken.';

  cart.length = 0;

  renderCart();
});

// Start the shopping cart
renderProducts();
renderCart();
