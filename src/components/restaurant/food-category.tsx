import Image from "next/image";

export default function FoodCategory() {
  return (
    <section className="py-8 md:py-12 px-4">
      {/* Heading */}
      <h5
        className="text-[#FF9F0D] font-[GreatVibes] text-center text-xl sm:text-2xl lg:text-3xl mb-4"
        style={{ fontFamily: "Great Vibes" }}
      >
        Food Category
      </h5>
      <h2
        className="text-white font-bold font-[Helvetica] text-xl sm:text-2xl lg:text-4xl text-center mb-6"
        style={{ fontFamily: "Helvetica" }}
      >
        <span className="text-[#FF9F0D]">Ch</span>oose Food Item
      </h2>

      {/* Image Grid */}
      <div className="flex flex-wrap gap-6 justify-center items-center max-w-[1200px] mx-auto">
        <div className="flex justify-center">
          <Image
            src="/images/food1.png"
            alt="food1"
            width={200} // Adjusted width
            height={200} // Adjusted height
            className="object-cover rounded-md w-[250px] h-[200px] md:h-[250px] md:w-[280px]"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/food2.png"
            alt="food2"
            width={200} // Adjusted width
            height={200} // Adjusted height
            className="object-cover rounded-md w-[250px] h-[200px] md:h-[250px] md:w-[280px]"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/food3.png"
            alt="food3"
            width={200} // Adjusted width
            height={200} // Adjusted height
            className="object-cover rounded-md w-[250px] h-[200px] md:h-[250px] md:w-[280px]"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/food4.png"
            alt="food4"
            width={200} // Adjusted width
            height={200} // Adjusted height
            className="object-cover rounded-md w-[250px] h-[200px] md:h-[250px] md:w-[280px]"
          />
        </div>
      </div>
    </section>
  );
}
