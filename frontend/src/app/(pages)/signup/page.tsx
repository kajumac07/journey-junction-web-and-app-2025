"use client";

import { ApiLists } from "@/common/Api";
import { Axios } from "../../../utils/Axios";
import Link from "next/link";
import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { HashLoader } from "react-spinners";
import { IUser } from "@/types/UserTypes";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const [data, setData] = useState<IUser>({
    email: "",
    userName: "",
    name: "",
    password: "",
    socialLinks: [],
    profilePicture: "",
    bio: "",
    _id: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    role: "user",
    location: "",
    website: "",
    followers: [],
    following: [],
    blogs: [],
  });
  const [errors, setErrors] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (value.length < 3 || value.length > 50) {
          return "Name must be between 3 and 50 characters";
        }
        break;
      case "userName":
        if (value.length < 3 || value.length > 30) {
          return "Username must be between 3 and 30 characters";
        }
        if (!/^[a-zA-Z0-9_]+$/.test(value)) {
          return "Username can only contain letters, numbers and underscores";
        }
        break;
      case "email":
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
          return "Please enter a valid email address";
        }
        break;
      case "password":
        if (value.length < 8) {
          return "Password must be at least 8 characters long";
        }
        if (!/\d/.test(value)) {
          return "Password must contain a number";
        }
        if (!/[a-z]/.test(value)) {
          return "Password must contain a lowercase letter";
        }
        if (!/[A-Z]/.test(value)) {
          return "Password must contain an uppercase letter";
        }
        if (!/[!@#$%^&*]/.test(value)) {
          return "Password must contain a special character";
        }
        break;
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const isFormValid = () => {
    return (
      Object.values(errors).every((error) => error === "") &&
      Object.entries(data)
        .filter(([key]) =>
          ["name", "userName", "email", "password"].includes(key)
        )
        .every(([, value]) => value !== "")
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent submission if form is invalid
    if (!isFormValid()) {
      toast.error("Please fill in all fields correctly.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await Axios({
        method: ApiLists.register.method,
        url: ApiLists.register.api,
        data: {
          email: data.email,
          userName: data.userName,
          name: data.name,
          password: data.password,
        },
      });

      // Success response
      toast.success("Account created successfully!");
      console.log("Register response:", response);

      // Redirect to login after successful registration
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    } catch (error: string | any | unknown | never) {
      // Extract error message from server response
      if (error.response) {
        const serverMessage =
          error.response.data.message || "Something went wrong";

        // Check for "User already exists" message
        if (
          error.response.status === 400 &&
          serverMessage.includes("User already exists")
        ) {
          toast.error("User already exists. Please try logging in.");
        } else {
          toast.error(serverMessage);
        }
      } else {
        // Fallback for other errors (e.g., network issues)
        toast.error("An unexpected error occurred. Please try again later.");
      }
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="relative">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`mt-1 w-full p-3 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded focus:ring-myprimary focus:border-myprimary outline-none transition`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="username"
              className="text-sm font-semibold text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={data.userName}
              onChange={handleChange}
              placeholder="example_45"
              className={`mt-1 w-full p-3 border ${
                errors.userName ? "border-red-500" : "border-gray-300"
              } rounded focus:ring-myprimary focus:border-myprimary outline-none transition`}
            />
            {errors.userName && (
              <p className="mt-1 text-xs text-red-500">{errors.userName}</p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-600"
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
              className={`mt-1 w-full p-3 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded focus:ring-myprimary focus:border-myprimary outline-none transition`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-600"
            >
              Password
            </label>
            <div
              className={`mt-1 w-full p-3 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded flex items-center focus-within:ring-myprimary focus-within:border-myprimary`}
            >
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
                className="cursor-pointer ml-2 text-gray-500"
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isFormValid() || isLoading}
            className={`w-full py-3 rounded-md text-white font-semibold tracking-wide ${
              isFormValid() ? "bg-myprimary" : "bg-gray-400 cursor-not-allowed"
            } transition-all flex justify-center items-center`}
          >
            {isLoading ? <HashLoader color="#fff" size={24} /> : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-mysecondary mt-5">
          Already have an account?{" "}
          <Link href="/login" className="text-myprimary font-semibold">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
