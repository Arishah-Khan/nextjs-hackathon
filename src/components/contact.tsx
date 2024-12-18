// src/app/contact/page.tsx
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing social media icons from react-icons

const ContactPage = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-20 py-10 max-w-screen-xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#ff9f0d] mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mb-8">
        {`  If you have any questions about our services or products, feel free to reach out. We're always here to help.`}
        </p>
      </section>

      {/* Contact Form */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#ff9f0d] mb-4 text-center">Contact Form</h2>
        <form className="space-y-6  max-w-[700px] mx-auto">
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
            Send Message
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
