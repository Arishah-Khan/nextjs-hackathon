import Image from "next/image";
import Button from "../button";
import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa"; // Social media icons

export default function HeroSec() {
  return (
    <section className="relative grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6 px-4 md:px-10 py-6 md:py-10">
      {/* Left Side Text & Button */}
      <div className="w-full flex flex-col justify-center items-center md:items-start space-y-4 md:space-y-6 z-10 md:pl-4 max-w-[500px] mx-auto p-3">
        {/* Text */}
        <h4
          className="text-[#FF9F0D] font-[GreatVibes] text-center md:text-start text-xl sm:text-2xl lg:text-3xl"
          style={{ fontFamily: "Great Vibes" }}
        >
          {`It's Quick & Amusing!`}
        </h4>
        <h1
          className="text-white font-bold font-[Helvetica] text-2xl sm:text-3xl lg:text-5xl text-center md:text-left"
          style={{ fontFamily: "Helvetica" }}
        >
          <span className="text-[#FF9F0D]">Th</span>e Art of Speed Food Quality
        </h1>
        <p className="text-white font-medium max-w-[400px]  text-sm sm:text-md lg:text-lg text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue.
        </p>

        {/* Button */}
        <Button text="See Menu" bg="#FF9F0D" />
      </div>

      {/* Right Side Image */}
      <div className="w-full flex justify-center">
        <Image
          src="/images/hersec.png"
          alt="Sidebar Image"
          width={500} // Default width for larger screens
          height={500} // Default height for larger screens
          className="object-contain md:w-full md:h-auto w-[300px] sm:w-[400px] sm:h-auto"
        />
      </div>

      {/* Vertical Line + Icons in the Center */}
      <div className="absolute left-3 sm:left-8 top-4 sm:top-0 bottom-0 flex flex-col items-center justify-start md:justify-center transform -translate-x-1/2 space-y-4 md:space-y-6 z-20">
        {/* Top Vertical Line */}
        <div className="w-[1px] bg-white h-20 md:h-32"></div>

        {/* Social Media Icons */}
        <div className="flex flex-col space-y-4">
          <FaFacebook size={10} className="text-white hover:text-[#FF9F0D]" />
          <FaTwitter size={10} className="text-[#FF9F0D] hover:text-white" />
          <FaPinterest size={10} className="text-white hover:text-[#FF9F0D]" />
        </div>

        {/* Bottom Vertical Line */}
        <div className="w-[1px] bg-white h-20 md:h-32"></div>
      </div>
    </section>
  );
}
