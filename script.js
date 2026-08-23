// =====================================================
// NAMMA POOKADAI
// JAVASCRIPT
// =====================================================


// =====================================================
// NAVBAR SCROLL EFFECT
// =====================================================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



// =====================================================
// MOBILE MENU
// =====================================================

const menuIcon =
    document.getElementById("menu-icon");

const navMenu =
    document.querySelector("nav");


if (menuIcon) {

    menuIcon.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


// Close menu after clicking link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});



// =====================================================
// CART
// =====================================================

let cart = [];

const cartCount =
    document.getElementById("cart-count");


const addCartButtons =
    document.querySelectorAll(".add-cart");


addCartButtons.forEach(button => {

    button.addEventListener("click", () => {

        const name =
            button.dataset.name;

        const price =
            button.dataset.price;


        cart.push({
            name: name,
            price: price
        });


        cartCount.textContent =
            cart.length;


        button.textContent =
            "Added ✓";


        button.classList.add("added");


        setTimeout(() => {

            button.textContent =
                "Add to Cart";

        }, 1500);


        console.log(
            "Cart:",
            cart
        );

    });

});



// =====================================================
// CUSTOMIZER DATA
// =====================================================

let customization = {

    occasion: "",
    style: "",
    flower: "",
    addon: ""

};



// =====================================================
// OCCASION → OPEN CUSTOMIZER
// =====================================================

const occasionButtons =
    document.querySelectorAll(
        ".occasion-link"
    );


const customizer =
    document.getElementById(
        "customizer"
    );


occasionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const occasion =
            button.dataset.occasion;


        customization.occasion =
            occasion;


        openCustomizer();


        // Find matching button

        const matchingButton =
            document.querySelector(
                `[data-type="occasion"][data-value="${occasion}"]`
            );


        if (matchingButton) {

            document
                .querySelectorAll(
                    '[data-type="occasion"]'
                )
                .forEach(item => {

                    item.classList.remove(
                        "selected"
                    );

                });


            matchingButton.classList.add(
                "selected"
            );

        }


        updateSummary();

    });

});



// =====================================================
// OPEN CUSTOMIZER
// =====================================================

const openCustomizerButton =
    document.getElementById(
        "open-customizer"
    );


function openCustomizer() {

    customizer.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


if (openCustomizerButton) {

    openCustomizerButton.addEventListener(
        "click",
        openCustomizer
    );

}



// =====================================================
// CUSTOMIZER OPTIONS
// =====================================================

const options =
    document.querySelectorAll(
        ".option-row button, " +
        ".style-row button, " +
        ".flower-select-row button"
    );


options.forEach(option => {

    option.addEventListener("click", () => {

        const type =
            option.dataset.type;

        const value =
            option.dataset.value;


        // Remove selected from same group

        document
            .querySelectorAll(
                `[data-type="${type}"]`
            )
            .forEach(item => {

                item.classList.remove(
                    "selected"
                );

            });


        // Select current option

        option.classList.add(
            "selected"
        );


        // Save selection

        customization[type] =
            value;


        updateSummary();

    });

});



// =====================================================
// UPDATE CUSTOMIZER SUMMARY
// =====================================================

function updateSummary() {

    const summary =
        document.getElementById(
            "summary"
        );


    if (!summary) {
        return;
    }


    let selected = [];


    if (customization.occasion) {

        selected.push(
            customization.occasion
        );

    }


    if (customization.style) {

        selected.push(
            customization.style
        );

    }


    if (customization.flower) {

        selected.push(
            customization.flower
        );

    }


    if (
        customization.addon &&
        customization.addon !== "No Add-on"
    ) {

        selected.push(
            customization.addon
        );

    }


    if (selected.length === 0) {

        summary.textContent =
            "Choose your preferences";

    } else {

        summary.textContent =
            selected.join(" • ");

    }

}



// =====================================================
// REQUIREMENTS
// =====================================================

const requirements =
    document.getElementById(
        "requirements"
    );


if (requirements) {

    requirements.addEventListener(
        "input",
        () => {

            console.log(
                "Special requirements:",
                requirements.value
            );

        }
    );

}



// =====================================================
// CREATE BOUQUET
// =====================================================

const createBouquet =
    document.getElementById(
        "create-bouquet"
    );


if (createBouquet) {

    createBouquet.addEventListener(
        "click",
        () => {


            // Check occasion

            if (!customization.occasion) {

                alert(
                    "Please choose an occasion 🌸"
                );

                return;

            }


            // Check style

            if (!customization.style) {

                alert(
                    "Please choose a style 🌷"
                );

                return;

            }


            // Check flower

            if (!customization.flower) {

                alert(
                    "Please choose your flowers 🌹"
                );

                return;

            }


            let message =
                "🌸 Namma Pookadai Custom Bouquet\n\n";


            message +=
                "Occasion: " +
                customization.occasion +
                "\n";


            message +=
                "Style: " +
                customization.style +
                "\n";


            message +=
                "Flowers: " +
                customization.flower +
                "\n";


            if (customization.addon) {

                message +=
                    "Add-on: " +
                    customization.addon +
                    "\n";

            }


            if (
                requirements &&
                requirements.value.trim() !== ""
            ) {

                message +=
                    "Requirements: " +
                    requirements.value +
                    "\n";

            }


            message +=
                "\nThank you for choosing Namma Pookadai! 🌷";


            alert(message);

        }
    );

}



// =====================================================
// CART ICON
// =====================================================

const cartIcon =
    document.getElementById(
        "cart-icon"
    );


if (cartIcon) {

    cartIcon.addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                alert(
                    "Your cart is empty 🌸"
                );

            } else {

                let message =
                    "🛍️ Your Cart\n\n";


                cart.forEach(
                    (item, index) => {

                        message +=
                            `${index + 1}. ${item.name} - ₹${item.price}\n`;

                    }
                );


                alert(message);

            }

        }
    );

}
