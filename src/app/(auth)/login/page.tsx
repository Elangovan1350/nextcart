"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import { toast } from "sonner";
import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(20),
});
type LoginData = z.infer<typeof loginSchema>;
const login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <div className="min-h-screen  bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Welcome Back to
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                  {" "}
                  NextCart
                </span>
              </h1>
              <p className="text-xl text-slate-400">
                Sign in to access your account, view orders, and enjoy exclusive
                deals.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-9xl animate-bounce">🔐</div>
          </div>
        </div>
      </div> */}

      <section className="max-w-7xl  mx-auto  px-4 py-5 sm:px-6 lg:px-8 ">
        <div className="bg-slate-800 bg-opacity-50 backdrop-blur border border-slate-700 rounded-2xl p-8 md:p-12 w-full max-w-md mx-auto">
          <form
            onSubmit={handleSubmit(async (data) => {
              setIsLoading(true);
              const result = await signIn.email({
                email: data.email,
                password: data.password,
              });
              if (result.error) {
                toast.error(result.error.message);
              } else {
                toast.success("Logged in successfully!");
                router.push("/");
              }
              setIsLoading(false);
            })}
            className="space-y-6"
          >
            <div>
              <label className="block mb-2 font-medium text-white">Email</label>
              <input
                type="email"
                {...register("email")}
                className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-400 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition"
                placeholder="Enter your email"
                disabled={isLoading}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-2 font-medium text-white">
                Password
              </label>
              <input
                type="password"
                {...register("password")}
                className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-400 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition"
                placeholder="Enter your password"
                disabled={isLoading}
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-3 rounded-lg font-semibold transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? "Logging In..." : "Login"}
              {!isLoading && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>
          <div className="mt-6 pt-6 border-t border-slate-600 text-center">
            <p className="text-slate-300 mb-4">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-blue-400 hover:text-blue-300 font-semibold transition"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default login;
