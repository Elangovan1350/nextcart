"use client";
import { signOut, useSession } from "@/lib/auth-client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navbar = () => {
  const router = useRouter();
  const session = useSession();
  if (session.data?.user === null) {
    router.push("/login");
  }
  return (
    <nav className="bg-slate-950 bg-opacity-80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-white"
        >
          <ShoppingCart className="w-8 h-8 text-blue-500" />
          NextCart
        </Link>
        <div className="hidden md:flex gap-8">
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
        <div className="flex gap-4">
          {session.data?.user ? (
            <>
              <Link
                href="/profile"
                className="px-4 py-2 text-slate-300 hover:text-white transition"
              >
                {session.data.user.name}
              </Link>
              <button
                onClick={async () => {
                  await signOut();
                }}
                className="px-4 py-2 text-slate-300 hover:text-white transition"
              >
                Sign Out
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
    </nav>
  );
};

export default navbar;
