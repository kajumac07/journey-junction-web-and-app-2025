"use client";

import { useState } from "react";
import { FaGlobeAmericas, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <FaGlobeAmericas className="h-8 w-8 text-myprimary" />
            <span className="text-2xl font-bold text-mytext">
              Journey<span className="text-myprimary">Junction</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-black">
            <Link
              href="/"
              className="nav-link hover:text-mysecondary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/explore"
              className="nav-link hover:text-mysecondary transition-colors"
            >
              Explore
            </Link>
            <Link
              href="/community"
              className="nav-link hover:text-mysecondary transition-colors"
            >
              Community
            </Link>
            <Link
              href="/about"
              className="nav-link hover:text-mysecondary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="nav-link hover:text-mysecondary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href={"/login"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-md bg-myprimary text-white hover:bg-opacity-90 transition-colors"
              >
                Login
              </motion.button>
            </Link>
            <Link href={"/signup"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-md border border-myprimary text-myprimary hover:bg-myprimary hover:text-white transition-colors"
              >
                Sign Up
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md hover:bg-mybg"
              >
                Home
              </Link>
              <Link
                href="/explore"
                className="block px-3 py-2 rounded-md hover:bg-mybg"
              >
                Explore
              </Link>
              <Link
                href="/community"
                className="block px-3 py-2 rounded-md hover:bg-mybg"
              >
                Community
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-md hover:bg-mybg"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-md hover:bg-mybg"
              >
                Contact
              </Link>
              <div className="pt-4 flex flex-col space-y-2">
                <Link href={"/login"}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-full bg-myprimary text-white hover:bg-opacity-90 transition-colors"
                  >
                    Login
                  </motion.button>
                </Link>
                <Link href={"/signup"}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-full border border-myprimary text-myprimary hover:bg-myprimary hover:text-white transition-colors"
                  >
                    Sign Up
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
