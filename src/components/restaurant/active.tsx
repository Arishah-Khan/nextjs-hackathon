import Image from "next/image";
import Button from "../button";

export default function Active() {
  return (
    <section
      className="relative w-full h-full bg-cover bg-center bg-no-repeat py-4"
      style={{ backgroundImage: "url('/images/activebg.png')" }} // Replace with your image path
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-6 md:p-6">
        {/* Left Image */}

        {/* Right Text Content */}
        <div className="w-full flex flex-col justify-center items-center md:items-end space-y-4 md:space-y-6 text-white z-10 max-w-[700px] md:mx-0 md:text-right md:ml-auto">

          {/* Heading */}
          <h4
            className="text-[#FF9F0D] font-[GreatVibes] text-center md:text-right text-xl sm:text-2xl lg:text-3xl"
            style={{ fontFamily: "Great Vibes" }}
          >
            Restaurant Active Process
          </h4>

          <h1
            className="font-bold font-[Helvetica] max-w-[600px] text-xl sm:text-3xl lg:text-4xl text-center md:text-left"
            style={{ fontFamily: "Helvetica" }}
          >
            <span className="text-[#FF9F0D] ">We</span> Document Every Food
            Bean Process until it is Saved
          </h1>

          <p className="font-medium max-w-[600px] text-sm sm:text-md lg:text-lg text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>

          {/* Button */}
          <div className="text-center md:text-left pt-6">
            <Button text="See More" bg="#000000" />
          </div>
        </div>
      </div>
    </section>
  );
}
