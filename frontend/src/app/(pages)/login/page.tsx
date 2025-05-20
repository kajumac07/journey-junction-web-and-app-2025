"use client";

import Link from "next/link";
import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { HashLoader } from "react-spinners";

export default function LoginPage() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => ({
      ...preve,
      [name]: value,
    }));
  };

  const valideValue = Object.values(data).every((el) => el);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <section className="min-h-[80vh] flex justify-center items-center px-4 py-3">
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-2xl w-96">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Welcome Back
          </h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative group">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700 mb-1 block"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-myprimary focus:border-transparent outline-none transition-all duration-300 hover:border-myprimary"
              />
            </div>

            <div className="relative group">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-700 mb-1 block"
              >
                Password
              </label>
              <div className="relative">
                <div className="mt-1 w-full p-3 border-2 border-gray-200 rounded-lg flex items-center transition-all duration-300 hover:border-myprimary focus-within:ring-2 focus-within:ring-myprimary focus-within:border-transparent">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full outline-none"
                  />
                  <div
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="cursor-pointer ml-2 text-gray-500 hover:text-myprimary transition-colors"
                  >
                    {showPassword ? (
                      <FaRegEye size={20} />
                    ) : (
                      <FaRegEyeSlash size={20} />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-2">
                <Link
                  href="/forgot-password"
                  className="text-sm text-myprimary hover:text-mysecondary transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={!valideValue || isLoading}
              className={`w-full py-4 rounded-lg text-white font-semibold tracking-wide text-lg transform hover:translate-y-[-2px] active:translate-y-0 transition-all duration-300 ${
                valideValue
                  ? "bg-mysecondary"
                  : "bg-gray-400 cursor-not-allowed"
              } flex justify-center items-center`}
            >
              {isLoading ? <HashLoader color="#fff" size={24} /> : "Sign In"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-8">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-myprimary hover:text-mysecondary font-semibold transition-colors"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
