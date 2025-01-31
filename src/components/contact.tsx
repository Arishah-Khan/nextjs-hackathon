"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing social media icons from react-icons
import { TailSpin } from 'react-loader-spinner'; // Importing the loader spinner

const ContactPage = () => {
  const [loading, setLoading] = useState(false); // Add a loading state

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Start loading when the form is submitted

    // Simulate form submission delay (you can replace it with actual API call)
    setTimeout(() => {
      setLoading(false); // Stop loading after some time (or when your request finishes)
      alert('Message Sent Successfully!');
    }, 2000);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-20 py-10 max-w-screen-xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#ff9f0d] mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mb-8">
{`          If you have any questions about our services or products, feel free to reach out. We're always here to help.
`}        </p>
      </section>

      {/* Contact Form */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#ff9f0d] mb-4 text-center">Contact Form</h2>
        <form onSubmit={handleFormSubmit} className="space-y-6 max-w-[700px] mx-auto">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-2 px-4 py-2 w-full border border-[#ff9f0d] rounded-lg text-black text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-2 px-4 py-2 w-full border border-[#ff9f0d] rounded-lg text-black text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-black">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-2 px-4 py-2 w-full border border-[#ff9f0d] rounded-lg text-black text-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 bg-[#ff9f0d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-400 transition"
          >
            {loading ? (
              <TailSpin color="#fff" height={24} width={24} /> // Show the spinner while loading
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </section>

      {/* Location */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-semibold text-[#ff9f0d] mb-4">Our Location</h2>
        <p className="text-lg text-gray-600">
          Our shop is located on XYZ Road, Karachi. You can easily visit us.
        </p>
      </section>

      {/* Social Media Links */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-semibold text-[#ff9f0d] mb-4">Connect With Us</h2>
        <div className="flex flex-wrap gap-4 justify-center space-x-6">
          <Link href="#" className="flex items-center text-black hover:text-orange-700">
            <FaFacebook className="w-6 h-6 mr-2" /> {/* Facebook icon */}
            Facebook
          </Link>
          <Link href="#" className="flex items-center text-black hover:text-orange-600">
            <FaTwitter className="w-6 h-6 mr-2" /> {/* Twitter icon */}
            Twitter
          </Link>
          <Link href="#" className="flex items-center text-black hover:text-pink-700">
            <FaInstagram className="w-6 h-6 mr-2" /> {/* Instagram icon */}
            Instagram
          </Link>
          <Link href="#" className="flex items-center text-black hover:text-gray-800">
            <FaLinkedin className="w-6 h-6 mr-2" /> {/* LinkedIn icon */}
            LinkedIn
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
