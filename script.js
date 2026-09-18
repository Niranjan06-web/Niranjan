/* =====================================================
   NIRAN'S FOOD HUB
   FOOD DATABASE
===================================================== */

const foods = [

    /* ================= PIZZA ================= */

    {
        id: 1,
        name: "Margherita Pizza",
        category: "pizza",
        price: 249,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80",
        description: "Classic tomato, mozzarella and fresh basil."
    },

    {
        id: 2,
        name: "Truffle Pizza",
        category: "pizza",
        price: 399,
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c8c5b2?auto=format&fit=crop&w=700&q=80",
        description: "Creamy cheese, mushrooms and rich truffle flavour."
    },

    {
        id: 3,
        name: "Pepperoni Pizza",
        category: "pizza",
        price: 449,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=80",
        description: "Crispy crust loaded with cheese and pepperoni."
    },

    {
        id: 4,
        name: "Farmhouse Pizza",
        category: "pizza",
        price: 329,
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80",
        description: "Fresh vegetables, mushrooms and melted cheese."
    },

    {
        id: 5,
        name: "BBQ Chicken Pizza",
        category: "pizza",
        price: 429,
        image: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=700&q=80",
        description: "Grilled chicken with smoky BBQ sauce and cheese."
    },

    {
        id: 6,
        name: "Four Cheese Pizza",
        category: "pizza",
        price: 399,
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=700&q=80",
        description: "A delicious combination of four premium cheeses."
    },


    /* ================= BURGER ================= */

    {
        id: 7,
        name: "Classic Burger",
        category: "burger",
        price: 249,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
        description: "Juicy patty with fresh vegetables and special sauce."
    },

    {
        id: 8,
        name: "Smoky BBQ Burger",
        category: "burger",
        price: 279,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80",
        description: "Smoky grilled burger with BBQ sauce and cheese."
    },

    {
        id: 9,
        name: "Cheese Burst Burger",
        category: "burger",
        price: 299,
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=700&q=80",
        description: "Loaded with melted cheese and a juicy patty."
    },

    {
        id: 10,
        name: "Crispy Chicken Burger",
        category: "burger",
        price: 289,
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=80",
        description: "Crispy chicken, lettuce and creamy mayo."
    },

    {
        id: 11,
        name: "Double Patty Burger",
        category: "burger",
        price: 349,
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=700&q=80",
        description: "Two juicy patties stacked with cheese and sauce."
    },

    {
        id: 12,
        name: "Veggie Supreme Burger",
        category: "burger",
        price: 229,
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=700&q=80",
        description: "Fresh veggie patty with crunchy vegetables."
    },


    /* ================= PASTA ================= */

    {
        id: 13,
        name: "Creamy Alfredo Pasta",
        category: "pasta",
        price: 299,
        image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=700&q=80",
        description: "Creamy Alfredo sauce with herbs and parmesan."
    },

    {
        id: 14,
        name: "Arrabbiata Pasta",
        category: "pasta",
        price: 269,
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80",
        description: "Spicy tomato sauce with garlic and Italian herbs."
    },

    {
        id: 15,
        name: "Pesto Pasta",
        category: "pasta",
        price: 319,
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80",
        description: "Fresh basil pesto with parmesan and herbs."
    },

    {
        id: 16,
        name: "Creamy Mushroom Pasta",
        category: "pasta",
        price: 329,
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80",
        description: "Creamy sauce with mushrooms and parmesan."
    },

    {
        id: 17,
        name: "Cheesy Mac & Cheese",
        category: "pasta",
        price: 279,
        image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?auto=format&fit=crop&w=700&q=80",
        description: "Creamy macaroni loaded with melted cheese."
    },

    {
        id: 18,
        name: "Spicy Chicken Pasta",
        category: "pasta",
        price: 359,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=80",
        description: "Spicy creamy pasta with grilled chicken."
    },


    /* ================= DRINKS ================= */

    {
        id: 19,
        name: "Iced Latte",
        category: "drinks",
        price: 159,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80",
        description: "Smooth chilled coffee with creamy milk."
    },

    {
        id: 20,
        name: "Cold Coffee",
        category: "drinks",
        price: 149,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=80",
        description: "Refreshing cold coffee with a creamy finish."
    },

    {
        id: 21,
        name: "Chocolate Shake",
        category: "drinks",
        price: 199,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80",
        description: "Rich chocolate milkshake topped with cream."
    },

    {
        id: 22,
        name: "Mango Smoothie",
        category: "drinks",
        price: 179,
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=700&q=80",
        description: "Fresh mango blended into a creamy smoothie."
    },

    {
        id: 23,
        name: "Strawberry Shake",
        category: "drinks",
        price: 189,
        image: "https://images.unsplash.com/photo-1553787499-6f1e8c7a7c2f?auto=format&fit=crop&w=700&q=80",
        description: "Sweet strawberry shake with fresh flavour."
    },

    {
        id: 24,
        name: "Fresh Lime Soda",
        category: "drinks",
        price: 99,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80",
        description: "Refreshing lime soda with a sparkling twist."
    },


    /* ================= DESSERT ================= */

    {
        id: 25,
        name: "Chocolate Cake",
        category: "dessert",
        price: 199,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80",
        description: "Rich chocolate cake with a soft creamy centre."
    },

    {
        id: 26,
        name: "Berry Cheesecake",
        category: "dessert",
        price: 229,
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80",
        description: "Creamy cheesecake topped with fresh berries."
    },

    {
        id: 27,
        name: "Brownie",
        category: "dessert",
        price: 149,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80",
        description: "Soft and fudgy chocolate brownie."
    },

    {
        id: 28,
        name: "Tiramisu",
        category: "dessert",
        price: 249,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=700&q=80",
        description: "Classic Italian dessert with coffee and cream."
    },

    {
        id: 29,
        name: "Ice Cream Sundae",
        category: "dessert",
        price: 179,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80",
        description: "Creamy ice cream with chocolate and toppings."
    },

    {
        id: 30,
        name: "Red Velvet Cake",
        category: "dessert",
        price: 219,
        image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=700&q=80",
        description: "Soft red velvet cake with cream cheese frosting."
    }

];


/* =====================================================
   CART
===================================================== */

let cart = [];


/* =====================================================
   DISPLAY FOODS
===================================================== */

function displayFoods(foodList) {

    const foodGrid =
        document.getElementById("foodGrid");

    foodGrid.innerHTML = "";


    if (foodList.length === 0) {

        foodGrid.innerHTML = `
            <p style="
                text-align:center;
                color:#777;
                grid-column:1/-1;
                padding:50px;
            ">
                😔 No food found
            </p>
        `;

        return;
    }


    foodList.forEach(food => {

        const card =
            document.createElement("div");

        card.className = "food-card";


        card.innerHTML = `

            <img
                src="${food.image}"
                class="food-image"
                alt="${food.name}"
            >

            <div class="food-info">

                <h3>
                    ${food.name}
                </h3>

                <p>
                    ${food.description}
                </p>

                <div class="food-bottom">

                    <span class="price">
                        ₹${food.price}
                    </span>

                    <button
                        class="add-btn"
                        onclick="addToCart(${food.id})"
                    >
                        + Add
                    </button>

                </div>

            </div>

        `;


        foodGrid.appendChild(card);

    });
}


/* =====================================================
   FILTER
===================================================== */

function filterFood(category, button) {

    document
        .querySelectorAll(".categories button")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    button.classList.add("active");


    if (category === "all") {

        displayFoods(foods);

    } else {

        const filtered =
            foods.filter(food =>
                food.category === category
            );

        displayFoods(filtered);

    }
}


/* =====================================================
   SEARCH
===================================================== */

function searchFood() {

    const searchText =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();


    const filtered =
        foods.filter(food =>

            food.name
                .toLowerCase()
                .includes(searchText)

        );


    displayFoods(filtered);
}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(id) {

    const food =
        foods.find(item => item.id === id);


    const existingItem =
        cart.find(item => item.id === id);


    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({

            ...food,

            quantity: 1

        });

    }


    updateCart();

    openCart();
}


/* =====================================================
   UPDATE CART
===================================================== */

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                🛒 Your cart is empty

                <br><br>

                Add something delicious!

            </div>

        `;

    }


    let total = 0;

    let count = 0;


    cart.forEach(item => {

        total +=
            item.price * item.quantity;

        count += item.quantity;


        const cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
            >


            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>

                <p>
                    ₹${item.price * item.quantity}
                </p>


                <div class="quantity">

                    <button
                        onclick="changeQuantity(
                            ${item.id},
                            -1
                        )"
                    >
                        −
                    </button>


                    <span>
                        ${item.quantity}
                    </span>


                    <button
                        onclick="changeQuantity(
                            ${item.id},
                            1
                        )"
                    >
                        +
                    </button>

                </div>

            </div>

        `;


        cartItems.appendChild(cartItem);

    });


    cartCount.textContent = count;

    cartTotal.textContent = total;
}


/* =====================================================
   CHANGE QUANTITY
===================================================== */

function changeQuantity(id, change) {

    const item =
        cart.find(item => item.id === id);


    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.id !== id
            );

    }


    updateCart();
}


/* =====================================================
   OPEN CART
===================================================== */

function openCart() {

    document
        .getElementById("cartPanel")
        .classList.add("show");


    document
        .getElementById("cartOverlay")
        .classList.add("show");
}


/* =====================================================
   CLOSE CART
===================================================== */

function closeCart() {

    document
        .getElementById("cartPanel")
        .classList.remove("show");


    document
        .getElementById("cartOverlay")
        .classList.remove("show");
}


/* =====================================================
   CHECKOUT
===================================================== */

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty! 🛒"
        );

        return;
    }


    let total = 0;


    cart.forEach(item => {

        total +=
            item.price * item.quantity;

    });


    alert(

        "🎉 ORDER PLACED SUCCESSFULLY!\n\n" +

        "Restaurant: Niran's Food Hub\n" +

        "Total Amount: ₹" + total +

        "\n\nThank you for ordering! 🍽️"

    );


    cart = [];

    updateCart();

    closeCart();
}


/* =====================================================
   INITIAL LOAD
===================================================== */

displayFoods(foods);

updateCart();