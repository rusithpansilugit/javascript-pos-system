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
  {
    id: 4,
    name: "Margherita Pizza",
    price: 12.5,
    category: "Food",
    stock: 6,
    icon: "🍕",
  },
  {
    id: 5,
    name: "Pasta Bolognese",
    price: 9.75,
    category: "Food",
    stock: 3,
    icon: "🍝",
  },
  {
    id: 6,
    name: "Grilled Chicken",
    price: 11.0,
    category: "Food",
    stock: 9,
    icon: "🍗",
  },
  {
    id: 7,
    name: "Espresso",
    price: 2.5,
    category: "Drinks",
    stock: 99,
    icon: "☕",
  },
  {
    id: 8,
    name: "Latte",
    price: 3.75,
    category: "Drinks",
    stock: 99,
    icon: "🥛",
  },
  {
    id: 9,
    name: "Orange Juice",
    price: 3.0,
    category: "Drinks",
    stock: 14,
    icon: "🍊",
  },
  {
    id: 10,
    name: "Green Tea",
    price: 2.75,
    category: "Drinks",
    stock: 99,
    icon: "🍵",
  },
  {
    id: 11,
    name: "Sparkling Water",
    price: 1.5,
    category: "Drinks",
    stock: 20,
    icon: "💧",
  },
  {
    id: 12,
    name: "Smoothie",
    price: 4.5,
    category: "Drinks",
    stock: 7,
    icon: "🥤",
  },
  {
    id: 13,
    name: "Chips",
    price: 1.25,
    category: "Snacks",
    stock: 30,
    icon: "🍟",
  },
  {
    id: 14,
    name: "Trail Mix",
    price: 2.0,
    category: "Snacks",
    stock: 18,
    icon: "🥜",
  },
  {
    id: 15,
    name: "Granola Bar",
    price: 1.75,
    category: "Snacks",
    stock: 2,
    icon: "🍫",
  },
  {
    id: 16,
    name: "Popcorn",
    price: 2.25,
    category: "Snacks",
    stock: 11,
    icon: "🍿",
  },
  {
    id: 17,
    name: "Croissant",
    price: 2.5,
    category: "Bakery",
    stock: 8,
    icon: "🥐",
  },
  {
    id: 18,
    name: "Blueberry Muffin",
    price: 2.75,
    category: "Bakery",
    stock: 5,
    icon: "🧁",
  },
  {
    id: 19,
    name: "Sourdough Slice",
    price: 3.0,
    category: "Bakery",
    stock: 10,
    icon: "🍞",
  },
  {
    id: 20,
    name: "Cinnamon Roll",
    price: 3.25,
    category: "Bakery",
    stock: 4,
    icon: "🌀",
  },
  {
    id: 21,
    name: "Whole Milk",
    price: 1.8,
    category: "Dairy",
    stock: 15,
    icon: "🥛",
  },
  {
    id: 22,
    name: "Greek Yogurt",
    price: 2.5,
    category: "Dairy",
    stock: 6,
    icon: "🫙",
  },
  {
    id: 23,
    name: "Cheddar Cheese",
    price: 3.5,
    category: "Dairy",
    stock: 9,
    icon: "🧀",
  },
];

console.log(product);

const productGrid = document.getElementById("product-grid");

function showProducts(items) {
  productGrid.innerHTML = "";

  items.forEach((item) => {
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

showProducts(product);
