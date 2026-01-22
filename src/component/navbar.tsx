"use client";
import { signOut, useSession } from "@/lib/auth-client";
import useStore from "@/store/usestore";
import axios from "axios";
import { ShoppingCart, Menu, MenuIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navbar = () => {
  const router = useRouter();
  const session = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart: cartCount, setCart: setCartCount } = useStore();
  if (session.data?.user === null) {
    router.push("/login");
  }
  useEffect(() => {
    if (!session.data?.user) return;
    const fetchCart = async () => {
      const res = await axios.get("/api/cart");
      setCartCount(res.data.length);
    };
    fetchCart();
  }, [session.data?.user]);
  return (
    <nav className="bg-slate-950 bg-opacity-80 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-white"
        >
          <ShoppingCart className="w-8 h-8 text-blue-500" />
          NextCart
        </Link>
        <div className="hidden sm:flex gap-8">
          <Link
            href="/products"
            className="text-slate-300 hover:text-white transition"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-slate-300 hover:text-white transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-slate-300 hover:text-white transition"
          >
            Contact
          </Link>
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-300 hover:text-white transition"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="hidden sm:flex  gap-6 ">
          {session.data?.user ? (
            <>
              <Link
                href="/profile"
                className=" text-slate-300 hover:text-white transition"
              >
                {session.data.user.name}
              </Link>
              <button
                onClick={() => router.push("/cart")}
                className=" text-slate-300 hover:text-white transition relative"
              >
                Cart
                <span className="bg-blue-500 text-white rounded-full px-2 py-1 ml-2 absolute -top-3 -right-6 text-xs">
                  {cartCount}
                </span>
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 text-slate-300 hover:text-white transition"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-medium"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col  py-3 items-center justify-center bg-slate-900 border-t border-slate-700">
          {session.data?.user ? (
            <>
              <div className="w-full flex justify-center  hover:ring-1 ring-inset ring-slate-700 py-2">
                <Link
                  href="/profile"
                  className="block  text-slate-300 hover:text-white transition"
                >
                  {session.data.user.name}
                </Link>
              </div>

              <div className="w-full flex justify-center  hover:ring-1 ring-inset ring-slate-700 py-2">
                <button
                  onClick={() => router.push("/cart")}
                  className="block  text-slate-300 hover:text-white transition relative"
                >
                  Cart
                  <span className="bg-blue-500 text-white rounded-full px-2 py-1 ml-2 absolute -top-3 -right-6 text-xs">
                    {cartCount}
                  </span>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="w-full flex justify-center  hover:ring-1 ring-inset ring-slate-700 py-2">
                <Link
                  href="/login"
                  className="block  text-slate-300 hover:text-white transition"
                >
                  Login
                </Link>
              </div>
              <div className="w-full flex justify-center hover:ring-1 ring-inset ring-slate-700 py-2">
                <Link
                  href="/signup"
                  className="block  text-slate-300 hover:text-white transition"
                >
                  Sign Up
                </Link>
              </div>
            </>
          )}
          <div className="w-full flex justify-center  hover:ring-1 ring-inset ring-slate-700 py-2">
            <Link
              href="/products"
              className="block  text-slate-300 hover:text-white transition"
            >
              Products
            </Link>
          </div>
          <div className="w-full flex justify-center  hover:ring-1 ring-inset ring-slate-700 py-2">
            <Link
              href="/about"
              className="block  text-slate-300 hover:text-white transition"
            >
              About
            </Link>
          </div>
          <div className="w-full flex justify-center hover:ring-1 ring-inset ring-slate-700  py-2">
            <Link
              href="/contact"
              className="block  text-slate-300 hover:text-white transition"
            >
              Contact
            </Link>
          </div>
          {session.data?.user && (
            <div
              className="w-full group flex justify-center hover:ring-1 ring-inset ring-slate-700  py-2"
              onClick={async () => {
                await signOut();
              }}
            >
              <button className="block group-hover:text-red-500 text-red-300  transition">
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default navbar;
