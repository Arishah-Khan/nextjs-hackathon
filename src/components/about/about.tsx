import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";

export default function AboutDiv() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 px-2 sm:px-4 md:px-8 py-10 md:py-20">
      {/* Image Section */}
      <div className="w-full flex items-center justify-center md:items-start gap-1 sm:gap-3">
        {/* Large Image */}
        <div className="flex justify-center items-center md:justify-start">
          <Image
            src="/images/diet1.png"
            alt="egg1"
            width={500}
            height={500}
            className=" w-[200px] h-auto md:w-[200px] lg:w-[240px] "
          />
        </div>

        {/* Small Images */}
        <div className="flex flex-col gap-2 mt-16 md:mt-8">
          <div className="">
            <Image
              src="/images/diet2.png"
              alt="egg2"
              width={250}
              height={250}
              className="w-[150px] h-auto md:w-[180px] lg:w-[200px]"
            />
            <div />
            <div className="mt-1 sm:mt-3">
              <Image
                src="/images/diet3.png"
                alt="egg3"
                width={250}
                height={250}
                className="w-[150px] md:h-[200px] lg:h-[250px] md:w-[180px] lg:w-[200px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center md:items-start space-y-4 lg:space-y-6 z-10 max-w-[600px] mx-auto p-1 sm:p-3">
        {/* Text Content */}
        <h5 className="text-[#FF9F0D] font-[Miniver] text-center md:text-start text-xl sm:text-2xl lg:text-3xl flex items-end justify-center md:justify-start">
          About us
          <div className="ml-2 w-8 h-[2px] bg-[#FF9F0D] mb-3"></div>
        </h5>
        <h2
          className="text-blsck font-bold  text-xl sm:text-2xl lg:text-4xl text-center md:text-left"
          style={{ fontFamily: "Helvetica" }}
        >
          Food is an important part Of a balanced Diet
        </h2>
        <p className="text-black max-w-[500px] text-xs sm:text-sm lg:text-base text-center md:text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        {/* Button */}
        <div className="flex flex-wrap justify-center items-center gap-3">
          <button
            className={`px-8 py-2 bg-[#ff9f0d] text-white rounded-lg border-2 border-[#e6891a] hover:bg-[#e6891a] focus:outline-none`}
          >
            Show more
          </button>

          <button className="lg:px-8 py-2 text-black font-bold rounded-lg focus:outline-none flex items-center justify-center space-x-3">
            <div className="flex justify-center items-center w-10 h-10 bg-[#ff9f0d] rounded-full">
              <IoPlayOutline className="text-white text-2xl text-center" />
            </div>
            <span>Watch Video</span>
          </button>
        </div>{" "}
      </div>
    </section>
  );
}
