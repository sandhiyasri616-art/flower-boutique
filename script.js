// ========================================
// NAMMA POOKADAI - MAIN JAVASCRIPT
// ========================================


// ========================================
// CART
// ========================================

let cart = [];

const cartIcon = document.getElementById("cart-icon");
const cartSidebar = document.getElementById("cart-sidebar");
const closeCart = document.getElementById("close-cart");
const cartOverlay = document.getElementById("cart-overlay");

const cartItems = document.getElementById("cart-items");
const cartCount = document.querySelector(".cart-count");
const cartTotalPrice = document.getElementById("cart-total-price");


// Open cart
if (cartIcon) {
    cartIcon.addEventListener("click", () => {
        cartSidebar.classList.add("active");
        cartOverlay.classList.add("active");
    });
}


// Close cart
function closeCartSidebar() {

    cartSidebar.classList.remove("active");
    cartOverlay.classList.remove("active");

}

if (closeCart) {
    closeCart.addEventListener("click", closeCartSidebar);
}

if (cartOverlay) {
    cartOverlay.addEventListener("click", closeCartSidebar);
}



// ========================================
// ADD PRODUCTS TO CART
// ========================================

const addToCartButtons =
    document.querySelectorAll(".add-to-cart-btn");


addToCartButtons.forEach(button => {

    button.addEventListener("click", () => {

        const id = button.dataset.id;
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);
        const img = button.dataset.img;


        // Check if product already exists
        const existingProduct =
            cart.find(item => item.id === id);


        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            cart.push({
                id: id,
                name: name,
                price: price,
                img: img,
                quantity: 1
            });

        }


        updateCart();

        // Open cart after adding
        cartSidebar.classList.add("active");
        cartOverlay.classList.add("active");

    });

});



// ========================================
// UPDATE CART
// ========================================

function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;


    cart.forEach(item => {

        total += item.price * item.quantity;

        count += item.quantity;


        const cartItem = document.createElement("div");

        cartItem.classList.add("cart-item");


        cartItem.innerHTML = `

            <div class="cart-item-image">
                <img src="${item.img}" alt="${item.name}">
            </div>

            <div class="cart-item-info">

                <h4>${item.name}</h4>

                <p>₹${item.price.toFixed(2)}</p>

                <div class="cart-quantity">

                    <button
                        class="quantity-btn"
                        onclick="changeQuantity('${item.id}', -1)">
                        -
                    </button>

                    <span>${item.quantity}</span>

                    <button
                        class="quantity-btn"
                        onclick="changeQuantity('${item.id}', 1)">
                        +
                    </button>

                </div>

            </div>

            <button
                class="remove-cart-item"
                onclick="removeFromCart('${item.id}')">

                <i class="fas fa-trash"></i>

            </button>

        `;


        cartItems.appendChild(cartItem);

    });


    // Cart count
    cartCount.textContent = count;


    // Cart total
    cartTotalPrice.textContent =
        `₹${total.toFixed(2)}`;


    // Empty cart message
    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-basket"></i>
                <p>Your cart is empty</p>
            </div>
        `;

    }

}



// ========================================
// CHANGE QUANTITY
// ========================================

function changeQuantity(id, change) {

    const item = cart.find(product => product.id === id);

    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        cart = cart.filter(product => product.id !== id);

    }


    updateCart();

}



// ========================================
// REMOVE FROM CART
// ========================================

function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    updateCart();

}



// ========================================
// PRODUCT FILTER
// ========================================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const productCards =
    document.querySelectorAll(".product-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        // Add active class
        button.classList.add("active");


        const filter =
            button.dataset.filter;


        productCards.forEach(card => {

            const category =
                card.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});



// ========================================
// CUSTOMIZE YOUR BOUQUET
// ========================================

const customizeButton =
    document.getElementById("customize-btn");

const occasion =
    document.getElementById("occasion");

const style =
    document.getElementById("style");

const flower =
    document.getElementById("flower");

const customRequirements =
    document.getElementById("custom-requirements");



if (customizeButton) {

    customizeButton.addEventListener("click", () => {

        const selectedOccasion =
            occasion.value;

        const selectedStyle =
            style.value;

        const selectedFlower =
            flower.value;

        const requirements =
            customRequirements.value.trim();



        // Check required selections
        if (!selectedOccasion) {

            alert("Please choose an occasion.");

            occasion.focus();

            return;

        }


        if (!selectedStyle) {

            alert("Please choose a style.");

            style.focus();

            return;

        }


        if (!selectedFlower) {

            alert("Please choose your flowers.");

            flower.focus();

            return;

        }



        // Display selected customization
        alert(
            "🌸 Your Bouquet Customization\n\n" +

            "Occasion: " +
            occasion.options[occasion.selectedIndex].text +

            "\nStyle: " +
            style.options[style.selectedIndex].text +

            "\nFlowers: " +
            flower.options[flower.selectedIndex].text +

            "\nCustom Requirements: " +
            (requirements || "None") +

            "\n\nThank you for choosing Namma Pookadai! 🌷"
        );


    });

}



// ========================================
// MOBILE MENU
// ========================================

const hamburger =
    document.querySelector(".hamburger");

const navLinks =
    document.querySelector(".nav-links");


if (hamburger) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}



// Close mobile menu when clicking a link

const navItems =
    document.querySelectorAll(".nav-links a");


navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});



// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



// ========================================
// CONTACT FORM
// ========================================

const contactForm =
    document.getElementById("contact-form");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert(
            "Thank you for contacting Namma Pookadai! 🌸"
        );

        contactForm.reset();

    });

}



// ========================================
// FLOATING FLOWER PETALS
// ========================================

const petalsContainer =
    document.getElementById("petals-container");


function createPetal() {

    if (!petalsContainer) return;


    const petal =
        document.createElement("div");


    petal.classList.add("petal");


    petal.innerHTML = "🌸";


    petal.style.left =
        Math.random() * 100 + "%";


    petal.style.animationDuration =
        (5 + Math.random() * 5) + "s";


    petal.style.fontSize =
        (12 + Math.random() * 15) + "px";


    petalsContainer.appendChild(petal);


    setTimeout(() => {

        petal.remove();

    }, 10000);

}


setInterval(createPetal, 800);



// ========================================
// INITIAL CART
// ========================================

updateCart();
