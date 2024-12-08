import Image from "next/image";
import Button from "../button";
import { IoMdCheckmark } from "react-icons/io";

export default function AboutSec() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-2 sm:px-4 md:px-8 py-6 md:py-8">
      {/* Text Section */}
      <div className="w-full flex flex-col justify-center items-center md:items-start space-y-4 lg:space-y-6 z-10 max-w-[500px] mx-auto p-1 sm:p-3">
        {/* Text Content */}
        <h5
          className="text-[#FF9F0D] font-[GreatVibes] text-center md:text-start text-xl sm:text-2xl lg:text-3xl"
          style={{ fontFamily: "Great Vibes" }}
        >
          About us
        </h5>
        <h2
          className="text-white font-bold font-[Helvetica] text-xl sm:text-2xl lg:text-4xl text-center md:text-left"
          style={{ fontFamily: "Helvetica" }}
        >
          <span className="text-[#FF9F0D]">We</span> Create the best foody product
        </h2>
        <p className="text-white max-w-[400px] text-xs sm:text-sm lg:text-base text-center md:text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>

        {/* Tick Points */}
        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <IoMdCheckmark className="text-[#FF9F0D] text-lg" />
            <p className="text-white text-sm">
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <IoMdCheckmark className="text-[#FF9F0D] text-lg" />
            <p className="text-white text-sm">
              Quisque diam pellentesque bibendum non dui volutpat fringilla.
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <IoMdCheckmark className="text-[#FF9F0D] text-lg" />
            <p className="text-white text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Button */}
        <Button text="Read More" bg="#FF9F0D" />
      </div>

      {/* Image Section */}
      <div className="w-full flex flex-col items-center md:items-start space-y-6">
        {/* Large Image */}
        <div className="w-full flex justify-center md:justify-start">
          <Image
            src="/images/eggimg1.png"
            alt="egg1"
            width={500}
            height={500}
            className="object-contain w-[300px] h-auto sm:w-[400px] md:w-[500px] "
            
          />
        </div>

        {/* Small Images */}
        <div className="w-full flex justify-center md:justify-start space-x-4">
          <Image
            src="/images/eggimg2.png"
            alt="egg2"
            width={250}
            height={250}
            className="object-contain w-[145px] h-auto sm:w-[195px] md:w-[240px]"
          />
          <Image
            src="/images/eggimg3.png"
            alt="egg3"
            width={250}
            height={250}
            className="object-contain w-[145px] h-auto sm:w-[195px] md:w-[240px]"
          />
        </div>
      </div>
    </section>
  );
}
