document.addEventListener("DOMContentLoaded", function () {
  const allDeals = [
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/31ogOjiaPdL._SY445_SX342_QL70_FMwebp_.jpg",
      ],
      title: "Apple 2024 MacBook Pro Laptop with M4 chip with 10‑core CPU and 10‑core GPU: Built for Apple Intelligence, (14.2″) Liquid Retina XDR Display, 14GB Unified Memory, 1TB SSD Storage; Space Black",
      description: "SUPERCHARGED BY M4 — The 14″ MacBook Pro with M4 chip gives you spectacular performance in a powerhouse laptop built for Apple Intelligence. With all-day battery life and a breathtaking Liquid Retina XDR display with up to 1,600 nits peak brightness, it's pro in every way.",
      price: "₹2,01,990",
      originalPrice: "₹2,09,900"
    },
    {
      imgSrcs: [
        "",
      ],
      title: "Tech Mega Sale",
      description: "Unbelievable discounts on top tech products!",
      price: 999.99,
      originalPrice: 1499.99
    },
  ];

  const laptops = [
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/61uyMdJJiUL._AC_UY327_FMwebp_QL65_.jpg",
      ],
      title: "Lenovo Yoga Pro 7 Ryzen AI",
      description: "Powerful laptop with latest Intel processor",
      price: "₹79,999",
      originalPrice: "₹89,999",
      specs: "16GB RAM, 512GB SSD, Intel i7"
    },
  ];

  const headphones = [
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/61GpzGjfZDL._SX522_.jpg",
      ],
      title: "Srhythm NC25",
      description: "Hybrid Active Noise Cancellation: Advanced ANC technology effectively reduces 90% ambient noise for immersive listening experience, and with transparency mode for situational awareness",
      price: "₹5,999",
      originalPrice: "₹9,999",
      specs: "Wireless Bluetooth 5.3, 50H Playtime, Low Latency, Transparency Mode"
    },
  ];

  const smartphones = [
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/4179exet8fL._SX300_SY300_QL70_FMwebp_.jpg",
      ],
      title: "Samsung Galaxy S25 Ultra 5G AI",
      description: "Meet Galaxy S25 Ultra, your true AI companion. Powered by the next chapter of Galaxy AI with multi-modality, and the most advanced Galaxy fundamentals, Galaxy S25 Ultra naturally adapts to you: learning your patterns, anticipating your needs, and connecting your world seamlessly. With Now Brief, it also offers you personalized insights to get you through your day.",
      price: "₹1,41,999",
      originalPrice: "₹1,41,999",
      specs: "2GB RAM, 512GB Storage), 200MP Camera, S Pen Included, Long Battery Life"
    },
  ];

  const tvs = [
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/81OmhFfS-hL._SX522_.jpg",
      ],
      title: "Realme GT 6T 5G",
      description: "Resolution: 4K Ultra HD (3840 x 2160) Resolution |Refresh Rate : 50 Hertz",
      price: "₹46,990",
      originalPrice: " ₹68,900",
      specs: "Crystal Processor 4K | 4K Upscaling | UHD Dimming | Motion Xcelerator"
    },
  ];

  const contentContainer = document.querySelector(".content");

  function formatPrice(price) {
    if (typeof price === 'string' && price.startsWith('₹')) {
      return price;
    }
    
    return typeof price === 'number' 
      ? `$${price.toFixed(2)}` 
      : price;
  }

  function calculateDiscount(price, originalPrice) {
    const numPrice = typeof price === 'string' 
      ? parseFloat(price.replace('₹', '').replace(',', '')) 
      : price;
    
    const numOriginalPrice = typeof originalPrice === 'string' 
      ? parseFloat(originalPrice.replace('₹', '').replace(',', '')) 
      : originalPrice;

    return `${Math.round(((numOriginalPrice - numPrice) / numOriginalPrice) * 100)}% OFF`;
  }

  function renderContent(category) {
    contentContainer.innerHTML = category
      .map(
        (item) => `
        <div class="box" style="display: flex;">
          <img src="${item.imgSrcs[0]}" alt="${item.title}" />
          <div class="text">
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            <div class="product-price">
              <span class="current-price">${formatPrice(item.price)}</span>
              <span class="original-price">${formatPrice(item.originalPrice)}</span>
              <span class="discount-percentage">
                ${calculateDiscount(item.price, item.originalPrice)}
              </span>
            </div>
          </div>
        </div>`
      )
      .join("");
  }

  renderContent(allDeals);

  const tabs = document.querySelectorAll(".product-container ul li");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      switch (this.dataset.content) {
        case "laptops":
          renderContent(laptops);
          break;
        case "headphones":
          renderContent(headphones);
          break;
        case "smart-phone":
          renderContent(smartphones);
          break;
        case "tv":
          renderContent(tvs);
          break;
        default:
          renderContent(allDeals);
      }
    });
  });
});