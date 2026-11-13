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

function formatMoney(amount) {
  return `KSh ${amount.toLocaleString('en-KE')}`;
}

function renderCart() {
  cartItems.replaceChildren();
  cart.forEach(item => {
    const row = document.createElement('li');
    row.textContent = `${item.name} × ${item.quantity} — ${formatMoney(item.price * item.quantity)}`;
    cartItems.append(row);
  });
  const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  itemCount.textContent = `${quantity} ${quantity === 1 ? 'item' : 'items'}`;
  cartTotal.textContent = formatMoney(total);
}

products.forEach(product => {
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
    const existing = cart.find(item => item.id === product.id);
    if (existing) existing.quantity += 1;
    else cart.push({ ...product, quantity: 1 });
    cartMessage.textContent = `${product.name} added to your basket.`;
    renderCart();
  });
  card.append(title, price, button);
  productContainer.append(card);
});

document.querySelector('#checkout').addEventListener('click', () => {
  cartMessage.textContent = cart.length
    ? 'Demo checkout complete. No payment was taken.'
    : 'Your basket is empty.';
});

renderCart();
