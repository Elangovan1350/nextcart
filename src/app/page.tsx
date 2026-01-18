"use client";

import {
  ArrowRight,
  ShoppingCart,
  Zap,
  Shield,
  Truck,
  Star,
} from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviews: number;
  category: string;
  description: string;
}
const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get<Product[]>("/api/productshomepage");
      setFeaturedProducts(res.data);
    };

    fetchProducts();
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Customer",
      text: "Best shopping experience ever! Fast shipping and amazing customer service.",
      avatar: "👩‍💼",
    },
    {
      name: "Mike Chen",
      role: "Verified Buyer",
      text: "Quality products and great prices. I recommend NextCart to all my friends!",
      avatar: "👨‍💻",
    },
    {
      name: "Emma Davis",
      role: "Customer",
      text: "Love the variety of products. Found exactly what I was looking for!",
      avatar: "👩‍🎨",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Shop Everything You
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                  {" "}
                  Love
                </span>
              </h1>
              <p className="text-xl text-slate-400">
                Discover amazing products at unbeatable prices. Fast shipping,
                secure checkout, and 30-day guarantee.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="px-8 py-4 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105"
              >
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="px-8 py-4 border-2 border-slate-600 hover:border-slate-400 text-white rounded-lg font-semibold transition">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-9xl animate-bounce">🛍️</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-slate-800 bg-opacity-50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:border-blue-500 transition">
          <Truck className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Free Shipping</h3>
          <p className="text-slate-400">
            Free shipping on all orders over $50. Fast delivery to your
            doorstep.
          </p>
        </div>
        <div className="bg-slate-800 bg-opacity-50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:border-cyan-500 transition">
          <Shield className="w-12 h-12 text-cyan-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Secure Payment</h3>
          <p className="text-slate-400">
            100% secure checkout with SSL encryption. Your data is always
            protected.
          </p>
        </div>
        <div className="bg-slate-800 bg-opacity-50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:border-purple-500 transition">
          <Zap className="w-12 h-12 text-purple-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Fast Support</h3>
          <p className="text-slate-400">
            24/7 customer support. We are here to help whenever you need us.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-slate-400">
            Checkout our best-selling items loved by thousands of customers
          </p>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-slate-800 bg-opacity-50 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition transform hover:scale-105"
            >
              <div className="bg-linear-to-br from-slate-700 to-slate-800 h-48 flex items-center justify-center text-7xl">
                {product.imageUrl}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-slate-400">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-400">
                    {product.price}
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition"
          >
            View All Products <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-slate-400">
            Join thousands of happy customers who trust NextCart
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800 bg-opacity-50 backdrop-blur border border-slate-700 rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Sign up today and get 15% off your first purchase!
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 hover:bg-slate-100 rounded-lg font-bold transition transform hover:scale-105"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-950 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xl font-bold text-white mb-4">
                <ShoppingCart className="w-6 h-6 text-blue-500" />
                NextCart
              </div>
              <p className="text-slate-400">
                Your trusted online shopping destination
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Shop</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Best Sellers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Track Order
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-center text-slate-400">
              © 2026 NextCart. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
