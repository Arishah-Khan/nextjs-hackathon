import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa"; // Importing social media icons

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white pt-12 relative">
      <div className="container max-w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center md:w-1/2 space-y-4">
          <h2 className="text-white text-xl sm:text-2xl lg:text-[3xl] font-bold">
            <span className="text-[#FF9F0D]">St</span>ill You Need Our Support?
          </h2>
          <p className="text-white text-center sm:text-left text-sm sm:text-md py-3">
            {` Don’t wait, make a smart & logical quote here. It’s pretty easy.`}
          </p>
        </div>

        {/* Right Section - Email Input & Button */}
        <div className="flex flex-row justify-center items-center md:items-end md:w-1/2 md:space-y-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-2 py-2 sm:py-3 sm:px-4 bg-[#FF9F0D] text-white placeholder-white"
          />
          <button className="bg-white text-[#FF9F0D] px-2 py-2 sm:py-3 sm:px-6 flex items-center">
            <span>Subscribe Now</span>
          </button>
        </div>
      </div>
      <div className="w-full border-t-[1px] border-[#FF9F0D] max-w-[1000px] mx-auto mt-6"></div>

      {/* New Div for 4 Columns */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center px-10 gap-8">
        {/* About Us */}
        <div className="space-y-4">
          <h3 className="text-white  text-base font-semibold">About Us</h3>
          <p className="text-white text-sm">
            We are a team dedicated to providing the best services. Learn more
            about our mission and vision.
          </p>
          <div className="flex justify-center items-center gap-4">
            <div className="bg-[#FF9F0D] p-3 w-[50px] h-[50px] rounded-md">
              <Image
                src="/images/clock.png"
                alt="cookie"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <h5>Opening Hours</h5>
              <p>Mon - Sat(8.00 - 6.00)</p>
              <p>Sunday - Closed</p>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4  text-center md:text-left">
          <h3 className="text-white text-base font-semibold">Help?</h3>
          <ul className="space-y-2 text-white">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/pages">Pages</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="space-y-4  text-center md:text-left">
          <h3 className="text-white text-base font-semibold">Help?</h3>
          <ul className="space-y-4 text-white">
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/terms-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/reporting">Reporting</Link>
            </li>
            <li>
              <Link href="/documentation">Documentation</Link>
            </li>
            <li>
              <Link href="/support-policy">Support Policy</Link>
            </li>
            <li>
              <Link href="/privacy-help">Privacy Help</Link>
            </li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div className="space-y-4">
          <h3 className="text-white text-base font-bold">Recent Posts</h3>
          <div className="text-white text-sm">
            <div className="flex  items-center gap-3 py-2">
              <div>
                <Image
                  src="/images/taste2.png"
                  alt="blog post 1"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="text-gray-400">20 Feb 2022</p>
                <h4 className="text-base font-semibold">Keep Your Business </h4>
              </div>
            </div>
            <div className="flex  items-center gap-3 py-2">
              <div>
                <Image
                  src="/images/footer2.png"
                  alt="blog post 1"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="text-gray-400">20 Feb 2022</p>
                <h4 className="text-base font-semibold">Keep Your Business </h4>
              </div>
            </div>
            <div className="flex  items-center gap-3 py-2">
              <div>
                <Image
                  src="/images/footer3.png"
                  alt="blog post 1"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="text-gray-400">20 Feb 2022</p>
                <h4 className="text-base font-semibold">Keep Your Business </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Icons & Copyright */}
      <div className="mt-8 flex flex-col md:flex-row items-center py-2 px-8 justify-between border-t-[1px] border-[#FF9F0D] bg-[#FF9F0D] relative">
        {/* Copyright */}
        <div className="text-white text-sm">
          <p className="flex justify-center items-center">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 py-4">
          <Link href="https://facebook.com" target="_blank" className="bg-white p-1">
            <FaFacebookF className="text-black  hover:text-[#FF9F0D]" />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="bg-white p-1">
            <FaTwitter className="text-black hover:text-[#FF9F0D]" />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="bg-white p-1">
            <FaInstagram className="text-black hover:text-[#FF9F0D]" />
          </Link>
          <Link href="https://youtube.com" target="_blank" className="bg-white p-1">
            <FaYoutube className="text-[#FF9F0D] hover:text-black" />
          </Link>
          <Link href="https://pinterest.com" target="_blank" className="bg-white p-1">
            <FaPinterest className="text-black hover:text-[#FF9F0D]" />
          </Link>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[200px] opacity-20">
        <Image
          src="/images/leaf.png"
          alt="footer background"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </footer>
  );
}
