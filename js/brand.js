function changeTab(index) {
    var tabs = document.getElementsByClassName("tab");
    var slider = document.querySelector(".slider");

    // Remove
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    // Add 
    tabs[index].classList.add("active");

    // Move slider to the corresponding section
    slider.style.transform = "translateX(-" + (index * 100) + "vw)";
}



//  card 
var products = [
    {
        name: "LG UR75 139 cm (55) 4K UHD Smart TV | WebOS 23 | HDR10 Pro",
        image: "https://www.lg.com/content/dam/channel/wcms/in/images/tvs/55ur7500psc_atr_eail_in_c/55UR7500PSC-450.jpg/jcr:content/renditions/thum-350x350.jpeg",  
        price: "₹49,999",
        shipping: "Shipped in 3-4 days",
        badge: "LG"
    },
    {
        name: "BRAVIA Theatre Quad | Flagship home cinema | Dolby Atmos®/DTS:X®",
        image: "https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY23_UM_Primary_image?$whatshotimage$&fmt=png-alpha", 
        price: "₹45,000",
        shipping: "Shipped in 5-7 days",
        badge: "Sony"
    },
    {
        name: "SAMSUNG | Galaxy S24 Ultra 5G | (Titanium Yellow, 256 GB) | (12 GB RAM)",
        image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/g/l/-original-imah2yyfxkbhrgbz.jpeg?q=70", 
        price: "₹89,000",
        shipping: "Shipped in 5-7 days",
        badge: "Samsung"
    },
    {
        name: "WH-1000XM5 | Wireless Noise Cancelling | Headphones WH-1000XM5",
        image: "https://www.sony.com/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=png-alpha", 
        price: "₹20,999",
        shipping: "Shipped in 5-7 days",
        badge: "Sony"
    },
    {
        name: "LG 7Kg Front Load | Washing Machine",
        image: "https://www.lg.com/content/dam/channel/wcms/in/images/washing-machines/fhm1207sdm_ambqeil_eail_in_c/gallery/FHM1207SDM-Front-View-450-1v.jpg/jcr:content/renditions/thum-350x350.jpeg", 
        price: "₹69,999",
        shipping: "Secure delivery by 5 Apr, Saturday",
        badge: "LG"
    },
    {
        name: "BRAVIA 3 | 4K HDR Processor X1™ | 4K Ultra HD ",
        image: "https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY23_UE_Primary_image?$primaryshotPreset$&fmt=png-alpha", 
        price: "₹35,999",
        shipping: "Shipped in 5-7 days",
        badge: "Sony"
    },
    {
        name: "Ton 3 Star | Inverter | Split AC | LG",
        image: "https://m.media-amazon.com/images/I/61hQvWQiYAL._SL1500_.jpg", 
        price: "₹50,999",
        shipping: "Shipped in 5-7 days",
        badge: "Panasonic"
    },
    {
        name: "Altima-i 70L | Desert Air Cooler | GHRACBUD220",
        image: "https://havells.com/media/catalog/product/cache/844a913d283fe95e56e39582c5f2767b/g/h/ghracbud220_2_.jpg", 
        price: "₹48,999",
        shipping: "Shipped in 5-7 days",
        badge: "Havells"
    },
    {
        name: "LG UR75 139 cm (55) 4K UHD Smart TV | WebOS 23",
        image: "https://www.lg.com/content/dam/channel/wcms/in/images/tvs/55ur7500psc_atr_eail_in_c/55UR7500PSC-450.jpg/jcr:content/renditions/thum-350x350.jpeg", 
        price: "₹20,990",
        shipping: "Shipped in 5-7 days",
        badge: "LG"
    },
    {
        name: "BRAVIA Theatre Quad | Dolby Atmos®/DTS:X®",
        image: "https://www.sony.com/image/3d3a90045fd945574b42b191f60f34e6?fmt=png-alpha", 
        price: "$30,990",
        shipping: "Shipped in 5-7 days",
        badge: "Sony"
    },
];

var productContainer = document.getElementById("product-container");

for (var i = 0; i < products.length; i++) {
    var product = products[i];

    productContainer.innerHTML += `
        <div class="product-card block">
            <span class="badge">${product.badge}</span>
            <img class="product-image" src="${product.image}" alt="${product.name}">
            <div class="product-details">
                <h2 class="product-title">${product.name}</h2>
                <p class="shipping">${product.shipping}</p>
                <p class="price">${product.price}</p>
            </div>
            <div class="button-container">
                <button class="button add-cart">Add to Cart</button>
                <button class="button buy-now">Buy Now</button>
            </div>
        </div>
    `;
}