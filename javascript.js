let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");
  const count = document.getElementById("cart-count");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <span>${item.name} - ₹${item.price}</span>
      <button onclick="removeItem(${index})">X</button>
    `;

    cartItems.appendChild(div);
  });

  totalDisplay.textContent = total;
  count.textContent = cart.length;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}
