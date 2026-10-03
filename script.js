// ========================================
// ALANKARA PRODUCT COLLECTION
// ========================================

const products = [

    {
        name: "Kanchipuram Silk Saree",
        price: "MUR 3,500",
        image: "images/saree1.png",
        description: "Elegant silk saree with traditional zari detailing."
    },

    {
        name: "Banarasi Silk Saree",
        price: "MUR 3,200",
        image: "images/saree2.png",
        description: "Beautiful Banarasi saree with intricate woven details."
    },

    {
        name: "Organza Saree",
        price: "MUR 2,800",
        image: "images/saree3.png",
        description: "Lightweight and elegant, perfect for special occasions."
    },

    {
        name: "Georgette Saree",
        price: "MUR 2,500",
        image: "images/saree4.png",
        description: "Graceful georgette saree with a contemporary finish."
    }

];


// ========================================
// WHATSAPP NUMBER
// ========================================

const whatsappNumber = "230XXXXXXXX";


// ========================================
// DISPLAY PRODUCTS
// ========================================

const productContainer =
    document.getElementById("product-container");


products.forEach(function(product) {

    const card = document.createElement("div");

    card.className = "product-card";


    const message =
        `Hello Alankara, I am interested in the ${product.name} priced at ${product.price}. Is it still available?`;


    const whatsappLink =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    card.innerHTML = `

        <img
            src="${product.image}"
            alt="${product.name}"
            class="product-image"
        >

        <div class="product-info">

            <h3 class="product-name">
                ${product.name}
            </h3>

            <p class="product-description">
                ${product.description}
            </p>

            <p class="product-price">
                ${product.price}
            </p>

            <a
                href="${whatsappLink}"
                class="whatsapp-button"
                target="_blank">

                Order on WhatsApp

            </a>

        </div>

    `;


    productContainer.appendChild(card);

});
