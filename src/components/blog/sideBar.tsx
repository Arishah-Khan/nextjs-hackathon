"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function SideBar() {
  const [selectedTag, setSelectedTag] = useState("");
  const [search, setSearch] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("Pinterest");

  const socialIcons = [
    { name: "Twitter", icon: <FaTwitter className="text-lg" /> },
    { name: "YouTube", icon: <FaYoutube className="text-lg" /> },
    { name: "Pinterest", icon: <FaPinterest className="text-lg" /> },
    { name: "Instagram", icon: <FaInstagram className="text-lg" /> },
    { name: "Facebook", icon: <FaFacebookF className="text-lg" /> },
  ];

  const recentPosts = [
    "/images/post1.png",
    "/images/post2.png",
    "/images/post3.png",
    "/images/post4.png",
  ];

  const tags = [
    "Sandwich",
    "Tikka",
    "Bbq",
    "Restaurant",
    "Chicken Shawarma",
    "Health",
    "Fast Food",
    "Pizza",
    "Burger",
    "Chicken",
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleIconClick = (iconName: string) => {
    setSelectedIcon(iconName);
  };

  return (
    <div className="flex py-4">
      {/* Sidebar */}
      <div className="md:w-[300px] lg:w-[370px] p-6 bg-white">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Your Keyword.."
              value={search}
              onChange={handleSearchChange}
              className="w-full p-3 pr-12 border border-[#E0E0E0] placeholder-[#E0E0E0] text-black focus:border-gray-300 focus:ring-gray-300 focus:ring-1 focus:outline-none"
            />
            <div className="bg-[#FF9F0D] absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12">
              <FiSearch className="text-white text-xl" />
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="text-center mb-6 border border-[#E0E0E0] py-4 px-2">
          <Image
            src="/images/profile.png"
            width={100}
            height={100}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-lg font-bold text-[#333333]">Prince Miyako</h3>
          <h6 className="text-[#828282] py-1 text-base">
            Blogger/Photographer
          </h6>
          <p className="text-sm text-[#828282] py-2">
            <span className="text-[#FF9F0D] ">★★★★☆</span> (1 Review)
          </p>
          <p className="text-[#828282] text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis
            distinctio, odio eligendi suscipit reprehenderit atque{" "}
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mt-4">
            {socialIcons.map((social, index) => (
              <Link
                href="#"
                key={index}
                className="text-black hover:text-[#FF9F0D]"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-4 border border-[#E0E0E0] md:p-2 lg:p-4">
          <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
          {recentPosts.map((post, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b py-2 mb-4"
            >
              <Image
                src={post}
                alt="Post Image"
                width={60}
                height={60}
                className="md:w-16 md:h-16 lg:w-20 lg:h-20 md:mr-4 lg:mr-6 rounded-md object-cover"
              />
              <div>
                <p className="text-[#828282] text-xs pb-2 lg:pb-4">June 22, 2020</p>
                <p className="text-xs text-[#4F4F4F] font-semibold">
                  Lorem ipsum dolor sit cing elit, sed do.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-6 border border-[#E0E0E0] px-2 py-4">
          <h3 className="text-xl font-bold mb-4">Filter by Menu</h3>
          <div className="grid lg:gap-2">
            {[
              {
                image: "/images/chickenfry.png",
                name: "Chicken Fry",
                count: 26,
              },
              {
                image: "/images/taste5.png",
                name: "Burger Food",
                count: 46,
              },
              { image: "/images/pizza.png", name: "Pizza", count: 16 },
              { image: "/images/shop13.png", name: "Fresh Fruits", count: 36 },
              { image: "/images/eggimg3.png", name: "Vegetables", count: 16 },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="md:w-12 md:h-12 lg:w-14 lg:h-14 object-cover rounded-md"
                />
                <div className="flex-grow">
                  <span className="block font-semibold text-sm lg:text-base">
                    {item.name}
                  </span>
                </div>
                <span className="text-[#333333] font-semibold text-sm lg:text-base">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags Section */}
        <div className="mb-6 border border-[#E0E0E0] px-3 lg:px-4 py-4">
          <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
          {tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setSelectedTag(tag)}
              className={`inline-block mr-3 mb-3 px-2 py-1 lg:px-4 lg:py-2 text-sm border border-[#E0E0E0] ${
                selectedTag === tag ? "bg-[#FF9F0D] text-white" : "bg-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="mb-6 border border-[#E0E0E0] px-4 py-4">
          <h3 className="text-xl font-bold mb-4">Photo Gallery</h3>
          <div className="grid grid-cols-3  gap-2">
            {[
              "/images/menu3.png",
              "/images/menu4.png",
              "/images/menu5.png",
              "/images/gallery1.png",
              "/images/gallery2.png",
              "/images/gallery3.png",
            ].map((img, index) => (
              <Image
                key={index}
                src={img}
                width={60}
                height={60}
                alt={`Gallery ${index + 1}`}
                className="w-20 h-20 lg:w-24 lg:h-20 object-cover rounded-md"
              />
            ))}
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="mt-6 border border-[#E0E0E0] px-4 py-4">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center gap-4">
            {socialIcons.map((social, index) => (
              <div
                key={index}
                onClick={() => handleIconClick(social.name)}
                className={`w-10 h-8 lg:w-12 lg:h-10 flex items-center justify-center cursor-pointer ${
                  selectedIcon === social.name
                    ? "bg-[#FF9F0D] text-white"
                    : "bg-[#FAF7F2] text-black"
                }`}
              >
                {social.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
