"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth-client";
import { toast } from "sonner";
import Link from "next/link";

const signUpSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(20),
  name: z.string().min(2).max(100),
});
type SignUpData = z.infer<typeof signUpSchema>;

export default function SignUpPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
  });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form
          onSubmit={handleSubmit(async (data) => {
            setIsLoading(true);
            const result = await signUp.email({
              email: data.email,
              password: data.password,
              name: data.name,
            });
            if (result.error) {
              toast.error(result.error.message);
            } else {
              toast.success("Account created successfully!");
              router.push("/");
            }
            setIsLoading(false);
          })}
          className="space-y-4"
        >
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              {...register("name")}
              className="w-full border border-gray-300 p-2 rounded"
              disabled={isLoading}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full border border-gray-300 p-2 rounded"
              disabled={isLoading}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full border border-gray-300 p-2 rounded"
              disabled={isLoading}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
            disabled={isLoading}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
