import Image from "next/image";
import Button from "../button";

export default function Chef() {
  return (
    <section className="py-4 md:pb-8 md:pt-4 px-4">
      {/* Heading */}
      <h5
        className="text-[#FF9F0D] font-[GreatVibes] text-center text-xl sm:text-2xl lg:text-3xl mb-4"
        style={{ fontFamily: "Great Vibes" }}
      >
        Chefs
      </h5>
      <h2
        className="text-white font-bold font-[Helvetica] text-xl sm:text-2xl lg:text-4xl text-center mb-6"
        style={{ fontFamily: "Helvetica" }}
      >
        <span className="text-[#FF9F0D]">Me</span>et Our Chef
      </h2>

      {/* Image Grid */}
      <div className="flex flex-wrap gap-6 justify-center items-center max-w-[1200px] mx-auto">
        <div className="flex justify-center">
          <Image
            src="/images/chef1.png"
            alt="food1"
            width={200} // Adjusted width
            height={200} // Adjusted height
            className="object-contain"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/chef2.png"
            alt="food2"
            width={200} // Adjusted width
            height={200} // Adjusted height
            className="object-contain"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/chef3.png"
            alt="food3"
            width={200} // Adjusted width
            height={200} // Adjusted height
            className="object-contain"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/chef4.png"
            alt="food4"
            width={200} // Adjusted width
            height={200} // Adjusted height
            className="object-contain"
          />
        </div>


      </div>
      <div className="text-center pt-6">
      <Button text="See More" bg="#000000" />
      </div>
    </section>
  );
}
