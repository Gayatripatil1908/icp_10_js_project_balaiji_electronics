document.addEventListener("DOMContentLoaded", function () {
  const allDeals = [
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/41oNr8dsrHL._SX300_SY300_QL70_FMwebp_.jpg",
      ],
      title: "boAt Tag Bluetooth",
      description: "Versatile Finding Feature: Find your belongings, like your smartphone, wallet, luggage, handbag, keys, and more, by attaching boAt Tag. Locate them on map with last-seen location & play alarm to find when nearby the tag",
      price: "₹1,299",
      originalPrice: "₹3,999",
      specs: "ind My Device App Support, 80dB Alarm, Additional Battery, 1 Year Battery (Black)"
    },
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/71p0rvXWCiL._SX385_.jpg",
      ],
      title: "Acnos 6",
      description: "Movement: Analogue Digital watch for men",
      price: "₹280",
      originalPrice: "₹1,000",
      specs: "Luminous LED Display Fashionable Children Kids Digital Watches Waterproof Sports Square Electronic Led Watch for Kids Boy Baby Girls Digital Watch for Kids"
    },
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/413jn4tXTeL._SX300_SY300_QL70_FMwebp_.jpg",
      ],
      title: "Noise Twist Round dial ",
      description: "1.38 TFT display: Featuring a vibrant round display and a stylish metallic finish, the smartwatch offers a premium on-screen experience.;Tru SyncTM: Hassle-free pairing, stable connectivity and lower battery consumption combine to provide the most advanced calling experience.",
      price: "₹1,399",
      originalPrice: "₹4,999",
      specs: "Battery, 100+ Watch Faces, IP68, Heart Rate Monitor, Sleep Tracking (Silver Grey)"
    },
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/51nSXSVzRdL._SY300_SX300_QL70_FMwebp_.jpg",
      ],
      title: "VividView Photo Frame",
      description: "SMART SYNC: WiFi-enabled digital frame that seamlessly syncs with a mobile app for instant photo sharing and updates",
      price: "₹15,999",
      originalPrice: "₹30,000",
      specs: "Mobile App Sync, WiFi Connectivity, Wall-Mountable 10.1 inch IPS with HD Display, 16GB RAM, 180° Music and Slideshow with SD Card, USB Port, Remote (Black)"
    },
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/31hIe+bpJ-L._SY300_SX300_.jpg",
      ],
      title: "Lenovo Yoga Pro 7 Ryzen AI",
      description: "GABIT SMART RING is the ultimate health & fitness ring that tracks your fitness, sleep, stress, and nutrition and other key health vitals. From tracking resting heart rate (HR) to heart rate variability (HRV), from VO2 max to SpO2, from calories in to calories out, and over 15 workout modes, this smart ring ensures you have a complete view of your health",
      price: "₹13,110",
      originalPrice: "₹13,800",
      specs: "Health & Fitness Tracker | Stress & Sleep Monitoring | Buy Ring Sizing Kit First | 15+ Workout Modes | Track Steps, HRV, HR, SPO2 | Smart Ring for Men & Women | Matte Black 7"
    },
  ];

  const laptops = [
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
        "https://m.media-amazon.com/images/I/81fvJauBWDL._SX679_.jpg",
      ],
      title: "Lenovo IdeaPad Slim 3",
      description: "Processor: Intel Core i5-12450H | Speed: 2.0 GHz (Base) - 4.4 GHz (Max) | 8 Cores | 12 Threads | 12MB CacheUnbelievable discounts on top tech products!",
      price: "₹52,390",
      originalPrice: "₹70,090"
    },
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/81WoRAEZLiL._SX679_.jpg",
      ],
      title: "Lenovo LOQ 2024 AMD Ryzen 7",
      description: "Processor: AMD Ryzen 7 8845HS | Speed: 3.8GHz (Base) - 5.1GHz (Max) | 8 Cores | 16 Threads | 16MB Cache",
      price: "₹90,190",
      originalPrice: "₹1,45,290"
    },
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/81WoRAEZLiL._SX679_.jpg",
      ],
      title: "Lenovo IdeaPad Slim 5 Snapdragon X",
      description: "AI Processor: Snapdragon X Plus X1P-42-100, 8C, Max Turbo up to 3.4GHz (single-core) / 3.2GHz (8-core), 30MB",
      price: "₹74,990",
      originalPrice: "₹1,25,890"
    },
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/71cAf4iZ3lL._SX679_.jpg",
      ],
      title: "MSI Stealth 16 AI Studio",
      description: "Processor: Intel Core i5-12450H | Speed: 2.0 GHz (Base) - 4.4 GHz (Max) | 8 Cores | 12 Threads | 12MB CacheUnbelievable discounts on top tech products!",
      price: "₹1,44,645",
      originalPrice: "₹2,29,990"
    },
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/71f5Eu5lJSL._SX679_.jpg",
      ],
      title: "Apple MacBook Air Laptop with M2",
      description: "STRIKINGLY THIN DESIGN – The redesigned MacBook Air is more portable than ever and weighs just 1.24 kg (2.7 pounds). It’s the ultra-capable laptop that lets you work, play or create just about anything — anywhere.",
      price: "₹76,990",
      originalPrice: "₹1,49,900"
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
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/51OAqmmwY9L._SX522_.jpg",
      ],
      title: "amazon basics True Wireless",
      description: "Controls - With the Smart Touch Control feature, you can play or pause music, answer calls with a single tap, skip forward or backwards with a double tap, and adjust the volume by holding your finger in one place.",
      price: "₹629",
      originalPrice: "₹2,499",
      specs: "Playback - Enjoy up to 60 hours of music with the powerful battery backup."
    },
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/51raakZN9fL._SX679_.jpg",
      ],
      title: "OnePlus Nord Buds 2r True Wireless",
      description: "[Gaming Mode]: It allows users to access a plethora of features while playing supported games on a OnePlus handset. They can be accessed at any time while playing games and give players the option to toggle different features and settings",
      price: "₹1,799",
      originalPrice: "₹2,299",
      specs: "[Enhanced Sound Experience]: The buds comes with 12.4mm driver unit, which delivers crisp clear and enhanced bass quality sound experience"
    },
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/51h7CQTRJ1L._SX522_.jpg",
      ],
      title: "OnePlus Buds 3 in Ear TWS Bluetooth",
      description: "[Best-in-class Sound Quality]: 10.4mm+6mm dynamic dual driver, LHDC5.0 Bluetooth CODEC and high resolution certification makes the product best in its sound quality with deeper bass, delicate treble and clear vocals; [Sliding Volume Control]: Slide on the surface of touch area of buds to adjust the volume.Sliding up increases the volume, while sliding down decreases the volume",
      price: "₹5,999",
      originalPrice: "₹6,499",
      specs: "10mins for 7Hours Fast Charging with Upto 44Hrs Playback(Gray)"
    },
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/71wVgd6atUL._SX679_.jpg",
      ],
      title: "Mivi SuperPods Immersio",
      description: "Elevate your viewing experience with sound where action is brought to life by elevating sound for a cinematic viewing experience.",
      price: "₹2,199",
      originalPrice: "₹6,499",
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
      price: "₹11,999",
      originalPrice: "₹14,999",
      specs: "2GB RAM, 512GB Storage), 200MP Camera, S Pen Included, Long Battery Life"
    },
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/41yAce7gd4L._SX300_SY300_QL70_FMwebp_.jpg",
      ],
      title: "iQOO Z7 Pro 5G",
      description: "Dimensity 7200 5g processor based on the latest 4nm energy-efficient process",
      price: "₹19,499",
      originalPrice: "₹27,999",
      specs: "MediaTek Dimesity 7200 5G Processor | 64MP Aura Light OIS Camera | Segment's Slimmest & Lightest Smartphone"
    },
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/41R8-UXJqcL._SX300_SY300_QL70_FMwebp_.jpg",
      ],
      title: "Tecno POP 9 5G Aurora",
      description: "Segment's 1st 48MP Sony AI Camera : Capture breathtaking images with incredible detail and enhanced clarity",
      price: "₹9,999",
      originalPrice: "₹11,999",
      specs: " Sony AI Camera| Segment's 1st 5G with NFC | D6300 5G Processor | 4+ Year Lag Free Fluency |5000 mAh Battery |Dual Speaker |Without Charger"
    },
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/81BGKLI+cWL._SX425_.jpg",
      ],
      title: "Redmi A4 5G",
      description: "High performance - Snapdragon 4s Gen 2 5G Processor | Large 17.47cm 120Hz Display | Upto 8GB RAM including 4GB Virtual RAM |64GB Storage | Fast Side fingerprint sensor",
      price: "₹8,499",
      originalPrice: "₹10,999",
      specs: "Global Debut SD 4s Gen 2 | Segment Largest 6.88in 120Hz | 50MP Dual Camera | 18W Fast Charging"
    },
  ];

  const tvs = [
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/81OmhFfS-hL._SX522_.jpg",
      ],
      title: "Samsung vivid pro",
      description: "Resolution: 4K Ultra HD (3840 x 2160) Resolution |Refresh Rate : 50 Hertz",
      price: "₹46,990",
      originalPrice: " ₹68,900",
      specs: "Crystal Processor 4K | 4K Upscaling | UHD Dimming | Motion Xcelerator"
    },
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/41MZhqLre5L._SY300_SX300_QL70_FMwebp_.jpg",
      ],
      title: "ONIDA 189 cm",
      description: "Resolution: 4K Ultra HD (3840 x 2160) Resolution |Refresh Rate : 50 Hertz",
      price: "₹73,999",
      originalPrice: " ₹99,990",
      specs: " 4K Ultra HD LED Smart Google TV 75UIG-R (Black)"
    },
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/71evh+4lnLL._SY355_.jpg",
      ],
      title: "Xiaomi 138 cm",
      description: "Resolution : 4K Ultra HD (3840 x 2160) | Refresh Rate : 60 Hertz | Viewing angle : 178 degrees",
      price: "₹36,999",
      originalPrice: " ₹68,900",
      specs: "Dolby Vision IQ Series Smart Google LED TV L55M8-5XIN (Black)"
    },
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/41mXfgVEThL._SY300_SX300_QL70_FMwebp_.jpg",
      ],
      title: "LG 139 cm ",
      description: "Resolution: 4K Ultra HD (3840x2160) | Refresh Rate: 60 hertz",
      price: "₹26,990",
      originalPrice: " ₹38,900",
      specs: "4K Ultra HD Smart LED TV 55UR7500PSC (Dark Iron Gray)"
    },
    {
      imgSrcs: [
        "https://m.media-amazon.com/images/I/71oXoIMlfTL._SY355_.jpg",
      ],
      title: "Redmi Xiaomi 138 cm",
      description: "Resolution : 4K Ultra HD (3840 x 2160) | Refresh Rate : 60 Hertz",
      price: "₹36,990",
      originalPrice: " ₹48,900",
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
              <span class="original-price"><del>${formatPrice(item.originalPrice)}</del></span>
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