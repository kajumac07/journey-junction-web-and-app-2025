"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Join Community Banner */}
      <div className="bg-mysecondary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <button className="bg-white text-[#FFC107] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
            Sign Up Now
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              About JourneyJunction
            </h3>
            <p className="text-gray-600 mb-4">
              JourneyJunction is your go-to platform to share and explore travel
              stories from around the world.
            </p>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-gray-600 hover:text-myprimary"
              >
                About Us
              </Link>
              <Link
                href="/privacy"
                className="block text-gray-600 hover:text-myprimary"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-gray-600 hover:text-myprimary"
              >
                Home
              </Link>
              <Link
                href="/explore"
                className="block text-gray-600 hover:text-myprimary"
              >
                Explore
              </Link>
              <Link
                href="/community"
                className="block text-gray-600 hover:text-myprimary"
              >
                Community
              </Link>
              <Link
                href="/contact"
                className="block text-gray-600 hover:text-myprimary"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <Link
                href="/blog"
                className="block text-gray-600 hover:text-myprimary"
              >
                Blog
              </Link>
              <Link
                href="/faqs"
                className="block text-gray-600 hover:text-myprimary"
              >
                FAQs
              </Link>
              <Link
                href="/terms"
                className="block text-gray-600 hover:text-myprimary"
              >
                Terms of Service
              </Link>
              <Link
                href="/support"
                className="block text-gray-600 hover:text-myprimary"
              >
                Support
              </Link>
            </div>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-600 hover:text-myprimary">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-myprimary">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-myprimary">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-myprimary">
                <FaLinkedin size={24} />
              </a>
            </div>
            <div>
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <p className="text-sm text-gray-600 mb-2">
                Subscribe to get the latest travel stories and tips!
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-myprimary"
                />
                <button className="px-4 py-2 bg-myprimary text-white rounded-r-md hover:bg-opacity-90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-600">
            <p>© 2024 JourneyJunction. All Rights Reserved.</p>
            <p className="mt-1">Made with ❤️ for travelers worldwide.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
