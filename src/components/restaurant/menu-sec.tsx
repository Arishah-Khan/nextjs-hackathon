import Image from "next/image";

interface Card {
  title: string;
  image: string;
  price: string;
  description: string;
}

const cards1: Card[] = [
  {
    title: "Lettuce Leaf",
    image: "/images/menu3.png",
    price: "12.5$",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
  },
  {
    title: "Fresh Breakfast",
    image: "/images/menu4.png",
    price: "14.5$",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
  },
  {
    title: "Mild Butter",
    image: "/images/menu5.png",
    price: "12.5$",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
  },
  {
    title: "Fresh Bread",
    image: "/images/menu6.png",
    price: "14.5$",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
  },
];

const cards2: Card[] = [
  {
    title: "Glow Cheese",
    image: "/images/menu7.png",
    price: "12.5$",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
  },
  {
    title: "Italian Pizza",
    image: "/images/menu8.png",
    price: "14.5$",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
  },
  {
    title: "Slice Bread",
    image: "/images/menu9.png",
    price: "12.5$",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
  },
  {
    title: "Mushroom Pizza",
    image: "/images/menu10.png",
    price: "12.5$",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
  },
];

export default function MenuSec() {
  const list = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Drink",
    "Snack",
    "Soup",
  ];

  return (
    <section className="pt-8">
      {/* Heading Section */}
      <h5
        className="text-[#FF9F0D] font-[GreatVibes] text-center pt-8 text-xl sm:text-2xl lg:text-3xl mb-4"
        style={{ fontFamily: "Great Vibes" }}
      >
        Choose & pick
      </h5>
      <h2
        className="text-white font-bold font-[Helvetica] text-xl sm:text-2xl lg:text-4xl text-center mb-6"
        style={{ fontFamily: "Helvetica" }}
      >
        <span className="text-[#FF9F0D]">Fr</span>om Our Menu
      </h2>

      {/* List Section */}
      <ul className="text-center mb-6 flex flex-wrap justify-center items-center">
        {list.map((item, index) => (
          <li
            key={index}
            className={`inline-block px-8 py-2 ${
              index === 0 ? "text-[#FF9F0D] font-bold" : "text-white"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Image and Card Layout Section */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-0 lg:gap-4">
        {/* Left Side (Images) */}
        <div className="flex  items-center justify-center gap-4 w-full lg:w-1/2">
          {/* Stacked Images */}
          <div className="relative w-full py-10 md:h-[70vh] lg:h-[100vh] flex justify-center items-center">
            {/* Background Image */}
            <div className="absolute inset-0 flex justify-center items-center z-0">
              <Image
                src="/images/menu1.png"
                alt="menuPlate"
                width={350}
                height={350}
                className="w-[300px] h-[300px] sm:w-[370px] sm:h-[370px]"
              />
            </div>

            {/* Foreground Image (Centered vertically and horizontally) */}
            <div className="relative flex justify-center items-center z-10">
              <Image
                src="/images/menu2.png"
                alt="menuPlate"
                width={320}
                height={320}
                className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px]"
              />
            </div>
          </div>
        </div>

        {/* Right Side (Cards) */}
        <div className="flex flex-col pt-8 sm:flex-row gap-0 lg:gap-2 w-full lg:w-1/2">
          {/* First Card Group */}
          <div className="w-full mb-4 lg:mb-0">
            {cards1.map((card, index) => (
              <div key={index} className="mb-4">
                <div className="w-full p-2 rounded-xl gap-2 flex flex-row items-center justify-center">
                  <div>
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={80}
                      height={80}
                      className="object-contain w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]"
                    />
                  </div>
                  <div>
                    <h3 className="text-white text-sm lg:text-base font-bold mt-2">{card.title}</h3>
                    <p className="text-white text-xs lg:text-sm">{card.description}</p>
                    <p className="text-[#FF9F0D] text-sm lg:text-base font-bold">{card.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Card Group */}
          <div className="w-full mb-4 lg:mb-0">
            {cards2.map((card, index) => (
              <div key={index} className="mb-4">
                <div className="w-full p-2 rounded-xl gap-2 flex flex-row items-center justify-center">
                  <div>
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={80}
                      height={80}
                      className="object-contain w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]"
                    />
                  </div>
                  <div>
                    <h3 className="text-white text-sm lg:text-base font-bold mt-2">{card.title}</h3>
                    <p className="text-white text-xs lg:text-sm">{card.description}</p>
                    <p className="text-[#FF9F0D] text-sm lg:text-base font-bold">{card.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
