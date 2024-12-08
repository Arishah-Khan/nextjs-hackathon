"use client";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Alamin Hasan",
    role: "Food Specialist",
    image: "/images/client1.png",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla.",
  },
  {
    id: 2,
    name: "Sarah Parker",
    role: "Chef",
    image: "/images/client1.png",
    feedback:
      "Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus.",
  },
  {
    id: 3,
    name: "John Doe",
    role: "Restaurant Owner",
    image: "/images/client1.png",
    feedback:
      "Lacus nisi, et ac dapibus sit eu velit in consequat. Quisque diam pellentesque bibendum non dui volutpat fringilla.",
  },
  {
    id: 4,
    name: "Emily Stone",
    role: "Food Blogger",
    image: "/images/client1.png",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices mattis sed vitae mus risus.",
  },
  {
    id: 5,
    name: "Michael Lee",
    role: "Nutritionist",
    image: "/images/client1.png",
    feedback:
      "Urna, elit augue urna, vitae feugiat pretium donec id elementum. Lacus nisi, et ac dapibus sit eu velit in consequat.",
  },
];

export default function Client() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex flex-col items-center space-y-8 py-4 sm:py-8 px-4 sm:px-8">
      {/* Header */}
      <div className="text-center">
        <h4
          className="text-[#FF9F0D] font-[GreatVibes] text-xl sm:text-2xl lg:text-3xl"
          style={{ fontFamily: "Great Vibes" }}
        >
          Testimonials
        </h4>
        <h2
          className="text-white font-bold pt-4 pb-10 font-[Helvetica] text-lg sm:text-2xl lg:text-4xl mt-2"
          style={{ fontFamily: "Helvetica" }}
        >
          What our clients are saying
        </h2>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-4xl flex flex-col items-center space-y-8">
  {/* Active Testimonial */}
  <div className="relative bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-lg">
    {/* Client Image */}
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[#FF9F0D]">
      <Image
        src={testimonials[activeIndex].image}
        alt={testimonials[activeIndex].name}
        width="20"
        height="20"
        className="object-cover w-full h-full object-top"
      />
    </div>

    <div className="flex flex-col items-center space-y-4 mt-10">
      <div>
        <Image
          src="/images/quote.png"
          alt="quote"
          width={40}
          height={40}
          className="sm:w-10 sm:h-10"
        />
      </div>

      {/* Client Feedback */}
      <p className="text-gray-700 text-sm sm:text-base text-center sm:px-6">
        {testimonials[activeIndex].feedback}
      </p>
      <Image
        src="/images/star.png"
        alt="star"
        width={100}
        height={20}
        className="sm:w-28 sm:h-6"
      />

      {/* Client Name */}
      <h5 className="text-gray-900 font-bold text-base sm:text-lg">
        {testimonials[activeIndex].name}
      </h5>
      <p className="text-gray-500 text-sm sm:text-base">
        {testimonials[activeIndex].role}
      </p>
    </div>

    {/* Bottom-Right Image */}
    <div className="absolute bottom-0 right-0 ">
      <Image
        src="/images/clientbg.png" 
        alt="decorative image"
        width={200}
        height={200}
        className="object-contain w-[300px] h-[300px] right-0 bottom-0"
      />
    </div>
  </div>

  {/* Navigation Dots */}
  <div className="flex space-x-3 sm:space-x-4">
    {testimonials.map((_, index) => (
      <button
        key={index}
        onClick={() => setActiveIndex(index)}
        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
          index === activeIndex ? "bg-[#FF9F0D]" : "bg-gray-500"
        }`}
      ></button>
    ))}
  </div>
</div>

    </section>
  );
}
