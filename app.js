//  Product array objects
const product = [
  {
    id: 1,
    name: "Club Sandwich",
    price: 8.5,
    category: "Food",
    stock: 12,
    icon: "🥪",
  },
  {
    id: 2,
    name: "Caesar Salad",
    price: 7.25,
    category: "Food",
    stock: 8,
    icon: "🥗",
  },
  {
    id: 3,
    name: "Beef Burger",
    price: 10.0,
    category: "Food",
    stock: 15,
    icon: "🍔",
  },
];

console.log(product);

const productGrid = document.getElementById("product-grid");

function showProducts() {
  product.forEach((item) => {
    productGrid.innerHTML += `
      <div class="product-card">
        <span class="stock-badge">${item.stock}</span>
        <div class="prod-icon">${item.icon}</div>
        <p class="prod-name">${item.name}</p>
        <p class="prod-price">$${item.price.toFixed(2)}</p>
      </div>
    `;
  });
}

showProducts();
