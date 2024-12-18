import Image from "next/image";
import React from "react";

function Choose() {
  return (
    <div>
      <h2
        className="text-black font-bold  text-xl sm:text-2xl lg:text-4xl text-center max-w-[600px] mx-auto"
        style={{ fontFamily: "Helvetica" }}
      >
        Why Choose us
      </h2>
      <p className="text-[#4F4F4F] max-w-[600px] mx-auto text-xs sm:text-sm md:text-base text-center py-3 md:pt-6 md:pb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        pellentesque bibendum non dui volutpat fringilla bibendum.
      </p>
      <div>
        <Image
          src="/images/choose.png"
          alt="Choose"
          width="300"
          height="300"
          className="w-full h-auto object-fill"
        />
      </div>
    </div>
  );
}

export default Choose;
