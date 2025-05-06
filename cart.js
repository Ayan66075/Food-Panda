import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAALoElcZA6A5BeluboXz3z-6HGeEeHGkQ",
  authDomain: "food-panda-by-sir.firebaseapp.com",
  projectId: "food-panda-by-sir",
  storageBucket: "food-panda-by-sir.firebasestorage.app",
  messagingSenderId: "768259532202",
  appId: "1:768259532202:web:0650837c329779236337d3",
  measurementId: "G-GZ8B1KGQZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Display cart items
async function displayCartItems() {
  const cartContainer = document.getElementById("cart-container");
  const querySnapshot = await getDocs(collection(db, "dishes"));

  if (querySnapshot.empty) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  querySnapshot.forEach((doc) => {
    const item = doc.data();
    let quantity = 1;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    const totalPrice = item.price;

    itemDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: ${item.price}</p>
      <img width="20%" src="${item.image_url}" alt="${item.name}" class="item-image">
      <div class="quantity-control">
        <button class="decrease-btn">–</button>
        <span class="quantity">${quantity}</span>
        <button class="increase-btn">+</button>
      </div>
      <p class="item-total">Total: <span class="total-price">${totalPrice}</span></p>
      <button class="remove-btn">Remove</button>
      <hr>
    `;

    cartContainer.appendChild(itemDiv);

    const decreaseBtn = itemDiv.querySelector(".decrease-btn");
    const increaseBtn = itemDiv.querySelector(".increase-btn");
    const quantitySpan = itemDiv.querySelector(".quantity");
    const totalPriceSpan = itemDiv.querySelector(".total-price");
    const removeBtn = itemDiv.querySelector(".remove-btn");

    // Increase Quantity
    increaseBtn.addEventListener("click", () => {
      quantity++;
      quantitySpan.textContent = quantity;
      totalPriceSpan.textContent = (item.price * quantity).toFixed(2);
    });

    // Decrease Quantity
    decreaseBtn.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        quantitySpan.textContent = quantity;
        totalPriceSpan.textContent = (item.price * quantity).toFixed(2);
      }
    });

    // Remove Item
    removeBtn.addEventListener("click", () => {
      itemDiv.remove();
    });
  });
}

// Load on page
window.onload = displayCartItems;
window.displayCartItems = displayCartItems;
