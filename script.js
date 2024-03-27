// Sample product data (you can replace this with your own data)
const products = [
    { name: "Product 1", category: "vegetables", price: 5, inventory: 10, image: "product1.jpg" },
    { name: "Product 2", category: "fruits", price: 3, inventory: 15, image: "product2.jpg" },
    // Add more products here...
];

// Initialize cart
const cart = {};

// Function to display products of a selected category
function displayProducts(category) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    products.forEach(product => {
        if (category === "all" || product.category === category) {
            const productItem = document.createElement("div");
            productItem.classList.add("product-item");
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
                <button onclick="addToCart('${product.name}')">Add to Cart</button>
            `;

            productList.appendChild(productItem);
        }
    });
}

// Function to add an item to the cart
function addToCart(productName) {
    const product = products.find(p => p.name === productName);

    if (!product) {
        return;
    }

    if (!(productName in cart)) {
        cart[productName] = { quantity: 0, product };
    }

    if (cart[productName].quantity < product.inventory) {
        cart[productName].quantity++;
        alert(`${productName} added to the cart.`);
    } else {
        alert(`${productName} is out of stock.`);
    }
}

// Event listener for category selection
document.getElementById("categorySelect").addEventListener("change", function () {
    const selectedCategory = this.value;
    displayProducts(selectedCategory);
});

// Initial display of products
displayProducts("all");
