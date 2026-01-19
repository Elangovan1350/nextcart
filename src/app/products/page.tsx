"use client";

import { ShoppingCart, Star, Filter, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Products = () => {
  const allProducts = [
    // Electronics & Computing
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$129.99",
      image: "🎧",
      rating: 4.8,
      reviews: 245,
      category: "Audio",
      description:
        "Crystal clear sound with active noise cancellation. 30-hour battery life, Bluetooth 5.0, and premium comfort padding.",
    },
    {
      id: 2,
      name: "Smart Watch Ultra",
      price: "$249.99",
      image: "⌚",
      rating: 4.9,
      reviews: 512,
      category: "Wearables",
      description:
        "Advanced fitness tracking with heart rate monitor, GPS, blood oxygen sensor. 7-day battery, 50m water resistance.",
    },
    {
      id: 3,
      name: "USB-C Cable Pro",
      price: "$19.99",
      image: "🔌",
      rating: 4.7,
      reviews: 1203,
      category: "Cables & Chargers",
      description:
        "Durable braided nylon cable with 100W power delivery. Fast charging for all devices with lifetime warranty.",
    },
    {
      id: 4,
      name: "Portable Charger",
      price: "$49.99",
      image: "🔋",
      rating: 4.6,
      reviews: 845,
      category: "Power & Charging",
      description:
        "20000mAh capacity with dual USB and USB-C ports. Charges 3 phones per cycle. Compact design.",
    },
    {
      id: 5,
      name: "4K Webcam Pro",
      price: "$199.99",
      image: "📹",
      rating: 4.7,
      reviews: 432,
      category: "Electronics",
      description:
        "4K resolution at 30fps with auto-focus. Built-in mic, wide 90° field of view for streaming and meetings.",
    },
    {
      id: 6,
      name: "Mechanical Keyboard RGB",
      price: "$159.99",
      image: "⌨️",
      rating: 4.9,
      reviews: 1856,
      category: "Computing",
      description:
        "Cherry MX switches, RGB backlighting, programmable keys. Aluminum frame with 2000Hz polling rate.",
    },
    {
      id: 7,
      name: "Wireless Gaming Mouse",
      price: "$79.99",
      image: "🖱️",
      rating: 4.8,
      reviews: 923,
      category: "Computing",
      description:
        "12000 DPI sensor with 100-hour battery life. Ergonomic design, 6 programmable buttons, 1ms response.",
    },
    {
      id: 8,
      name: "LED Ring Light",
      price: "$39.99",
      image: "💡",
      rating: 4.6,
      reviews: 567,
      category: "Lighting",
      description:
        "10-inch ring light with adjustable brightness and color temperature for content creation and makeup.",
    },
    {
      id: 9,
      name: "Bluetooth Speaker Mini",
      price: "$44.99",
      image: "🔊",
      rating: 4.7,
      reviews: 678,
      category: "Audio",
      description:
        "Portable 360° sound with 12-hour battery. Waterproof IPX7 rated, built-in microphone, and deep bass.",
    },
    {
      id: 10,
      name: "Noise Canceling Earbuds",
      price: "$149.99",
      image: "🎵",
      rating: 4.8,
      reviews: 1245,
      category: "Audio",
      description:
        "Active noise cancellation with transparency mode. 8-hour battery per charge, wireless charging case.",
    },
    {
      id: 11,
      name: "Fitness Tracker Band",
      price: "$89.99",
      image: "⏱️",
      rating: 4.5,
      reviews: 612,
      category: "Wearables",
      description:
        "Track steps, calories, sleep, and heart rate 24/7. 14-day battery life, water resistant design.",
    },
    {
      id: 12,
      name: "Smart Thermostat",
      price: "$199.99",
      image: "🌡️",
      rating: 4.7,
      reviews: 445,
      category: "Smart Home",
      description:
        "Learning thermostat that adapts to your schedule. Voice control compatible, energy-saving mode available.",
    },
    {
      id: 13,
      name: "Security Camera WiFi",
      price: "$129.99",
      image: "📷",
      rating: 4.8,
      reviews: 834,
      category: "Smart Home",
      description:
        "1080p HD with night vision up to 30ft. Two-way audio, motion detection alerts, cloud storage.",
    },
    {
      id: 14,
      name: "Smart Doorbell",
      price: "$159.99",
      image: "🚪",
      rating: 4.9,
      reviews: 723,
      category: "Smart Home",
      description:
        "Video doorbell with 2K resolution and wide-angle lens. Package detection and person recognition.",
    },
    {
      id: 15,
      name: "Wireless Charging Pad",
      price: "$34.99",
      image: "⚡",
      rating: 4.6,
      reviews: 1567,
      category: "Power & Charging",
      description:
        "15W fast wireless charging for all Qi-compatible devices. Non-slip surface, LED indicator.",
    },
    {
      id: 16,
      name: "Laptop Stand Adjustable",
      price: "$49.99",
      image: "💻",
      rating: 4.7,
      reviews: 789,
      category: "Computing",
      description:
        "Ergonomic aluminum stand with 6-level height adjustment. Supports up to 17-inch laptops.",
    },
    {
      id: 17,
      name: "External SSD 1TB",
      price: "$129.99",
      image: "💾",
      rating: 4.8,
      reviews: 934,
      category: "Storage",
      description:
        "1TB capacity with 550MB/s transfer speed. Compact and durable, USB-C 3.1, carrying case included.",
    },
    {
      id: 18,
      name: "USB Hub Multi-Port",
      price: "$59.99",
      image: "🔗",
      rating: 4.6,
      reviews: 456,
      category: "Cables & Chargers",
      description:
        "7-in-1 hub with USB 3.0, HDMI, SD card reader. Aluminum build with intelligent power distribution.",
    },
    {
      id: 19,
      name: "Phone Stand Holder",
      price: "$24.99",
      image: "📱",
      rating: 4.5,
      reviews: 2103,
      category: "Accessories",
      description:
        "Adjustable phone stand fits 4-7 inch devices. Non-slip base, 270° rotation capability.",
    },
    {
      id: 20,
      name: "Tablet Sleeve Case",
      price: "$29.99",
      image: "🎒",
      rating: 4.7,
      reviews: 623,
      category: "Accessories",
      description:
        "Protective neoprene sleeve for 10-inch tablets. Water-resistant, cushioned padding included.",
    },
    {
      id: 21,
      name: "Action Camera 4K",
      price: "$299.99",
      image: "🎬",
      rating: 4.9,
      reviews: 876,
      category: "Camera & Video",
      description:
        "4K video at 60fps with image stabilization. Waterproof to 30m, wide-angle lens included.",
    },
    {
      id: 22,
      name: "Drone Mini",
      price: "$399.99",
      image: "🚁",
      rating: 4.8,
      reviews: 542,
      category: "Gadgets",
      description:
        "Compact drone with 4K camera, 30-minute flight time. Foldable design, obstacle avoidance.",
    },
    {
      id: 23,
      name: "Selfie Ring Light",
      price: "$29.99",
      image: "🎆",
      rating: 4.6,
      reviews: 1234,
      category: "Lighting",
      description:
        "6-inch ring light with phone holder. 3 color modes, dimmable brightness, USB powered.",
    },
    {
      id: 24,
      name: "Phone Lens Kit",
      price: "$84.99",
      image: "📸",
      rating: 4.7,
      reviews: 567,
      category: "Camera & Video",
      description:
        "3-in-1 lens kit: wide-angle, macro, telephoto. Universal clip attachment for all phones.",
    },
    {
      id: 25,
      name: "Desktop Mic Condenser",
      price: "$119.99",
      image: "🎤",
      rating: 4.8,
      reviews: 723,
      category: "Audio",
      description:
        "Professional cardioid condenser mic with pop filter. XLR connection, ideal for podcasting.",
    },
    {
      id: 26,
      name: "Headphone Stand",
      price: "$19.99",
      image: "🎧",
      rating: 4.5,
      reviews: 934,
      category: "Accessories",
      description:
        "Wooden headphone stand with non-slip base. Cable organizer, fits all headphone sizes.",
    },
    {
      id: 27,
      name: "Cable Organizer Set",
      price: "$14.99",
      image: "📦",
      rating: 4.6,
      reviews: 1567,
      category: "Accessories",
      description:
        "5-piece cable management set with clips and wraps. Keeps your desk organized.",
    },
    {
      id: 28,
      name: "Desk Lamp LED",
      price: "$44.99",
      image: "🏮",
      rating: 4.7,
      reviews: 789,
      category: "Lighting",
      description:
        "LED desk lamp with USB charging port. Touch control, adjustable brightness, energy efficient.",
    },
    {
      id: 29,
      name: "Screen Protector Pack",
      price: "$9.99",
      image: "📺",
      rating: 4.4,
      reviews: 2345,
      category: "Accessories",
      description:
        "Pack of 3 tempered glass protectors. Anti-fingerprint coating, 9H hardness, easy install.",
    },
    {
      id: 30,
      name: "Phone Case Premium",
      price: "$34.99",
      image: "🛡️",
      rating: 4.8,
      reviews: 3456,
      category: "Accessories",
      description:
        "Durable premium case with military-grade protection. Slim design, raised edges for screen.",
    },
    {
      id: 31,
      name: "Air Purifier Smart",
      price: "$179.99",
      image: "🌬️",
      rating: 4.7,
      reviews: 445,
      category: "Smart Home",
      description:
        "HEPA filter removes 99.97% of particles. App control, voice commands, auto mode available.",
    },
    {
      id: 32,
      name: "Smart Light Bulb RGB",
      price: "$29.99",
      image: "💡",
      rating: 4.8,
      reviews: 1289,
      category: "Smart Home",
      description:
        "16 million color options with adjustable brightness. Voice control compatible, scheduling.",
    },
    {
      id: 33,
      name: "Wireless Power Bank",
      price: "$69.99",
      image: "🔋",
      rating: 4.6,
      reviews: 876,
      category: "Power & Charging",
      description:
        "10000mAh with 15W wireless charging. Dual USB ports, LED display, compact design.",
    },
    {
      id: 34,
      name: "Fast Charger 65W",
      price: "$54.99",
      image: "⚡",
      rating: 4.8,
      reviews: 1567,
      category: "Power & Charging",
      description:
        "65W super fast charging with multiple ports. Supports laptops and phones, compact.",
    },
    {
      id: 35,
      name: "VR Headset Strap",
      price: "$39.99",
      image: "🥽",
      rating: 4.5,
      reviews: 234,
      category: "Gaming",
      description:
        "Comfortable replacement head strap for VR. Cushioned padding, adjustable fit.",
    },
    {
      id: 36,
      name: "Gaming Controller",
      price: "$89.99",
      image: "🎮",
      rating: 4.9,
      reviews: 2876,
      category: "Gaming",
      description:
        "Wireless gaming controller with vibration feedback. Works with PC, console, mobile.",
    },
    {
      id: 37,
      name: "Webcam Cover",
      price: "$9.99",
      image: "🔐",
      rating: 4.7,
      reviews: 1345,
      category: "Accessories",
      description:
        "Ultra-thin webcam cover for privacy. Fits all laptop webcams, adhesive backing.",
    },
    {
      id: 38,
      name: "Monitor Arm Stand",
      price: "$99.99",
      image: "🖥️",
      rating: 4.8,
      reviews: 654,
      category: "Computing",
      description:
        "Adjustable monitor arm supports 17-32 inch displays. 360° rotation, VESA compatible.",
    },
    {
      id: 39,
      name: "Keyboard Wrist Rest",
      price: "$24.99",
      image: "🧤",
      rating: 4.6,
      reviews: 456,
      category: "Computing",
      description:
        "Memory foam wrist rest for ergonomic support. Non-slip base, reduces strain.",
    },
    {
      id: 40,
      name: "Cable Clips Adhesive",
      price: "$12.99",
      image: "📎",
      rating: 4.7,
      reviews: 1123,
      category: "Cables & Chargers",
      description:
        "Adhesive cable clips for organization. Set of 6, removable without damage.",
    },
  ];

  const categories = [
    "All",
    "Audio",
    "Wearables",
    "Cables & Chargers",
    "Power & Charging",
    "Electronics",
    "Computing",
    "Lighting",
    "Smart Home",
    "Storage",
    "Accessories",
    "Camera & Video",
    "Gadgets",
    "Gaming",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(true);

  // Filter products
  const filteredProducts = allProducts
    .filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price-low")
        return parseFloat(a.price) - parseFloat(b.price);
      if (sortBy === "price-high")
        return parseFloat(b.price) - parseFloat(a.price);
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "reviews") return b.reviews - a.reviews;
      return 0;
    });

  return (
    <div className="min-h-screen  bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Explore Our
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              {" "}
              Products
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Discover {allProducts.length} amazing products across{" "}
            {categories.length - 1} categories. Find exactly what you're looking
            for.
          </p>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="max-w-7xl mx-auto sticky top-15 z-30 px-4 sm:px-6 lg:px-8 py-8  bg-linear-to-b from-slate-900 via-slate-800 to-transparent ">
        <div className=" flex flex-col gap-2">
          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
          />

          {/* Sort and Filter Controls */}
          <div className="flex gap-4 justify-between items-center flex-nowrap">
            <div className="flex gap-2 items-center">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white hover:border-blue-500 transition flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                {showFilters ? "Hide" : "Show"} Filters
              </button>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviews</option>
            </select>

            <div className="text-slate-300 text-sm">
              {filteredProducts.length} products
            </div>
          </div>

          {/* Category Filter */}

          {showFilters && (
            <div className="grid md:grid-cols-5 lg:grid-cols-7 grid-cols-3 gap-4">
              {categories.map((category) => (
                <div
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition whitespace-nowrap shrink-0 flex justify-center items-center ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-blue-500"
                  }`}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-slate-800 bg-opacity-50 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition transform hover:scale-105 group"
              >
                {/* Product Image */}
                <div className="bg-linear-to-br from-slate-700 to-slate-800 h-40 flex items-center justify-center text-6xl group-hover:scale-110 transition">
                  {product.image}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-white line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-xs text-blue-400 mt-1">
                        {product.category}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price and Button */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-blue-400">
                      {product.price}
                    </span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-slate-400 mb-4">No products found</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Products;
