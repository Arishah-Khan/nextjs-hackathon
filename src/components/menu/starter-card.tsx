import Image from "next/image";

interface Card {
  cardHeading: string;
  description: string;
  calories: string;
  price: string;
}

interface SectionProps {
  mainImage: string;
  pageTitle: string;
  cards: Card[];
  order?: 1 | 2; // Optional prop to control the order
}

const Section = ({ mainImage, pageTitle, cards, order = 1 }: SectionProps) => {
  return (
    <section className="py-10 md:py-12 px-3 md:px-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Image section */}
        <div
          className={`flex justify-center items-center flex-1 ${
            order === 1 ? "order-1 md:order-2" : "order-2 md:order-1"
          }`}
        >
          <Image
            src={mainImage}
            alt="Main"
            width={350}
            height={450}
            className="h-[350px] w-[280px] sm:w-[350px] md:h-[400px] lg:h-[450px] object-cover rounded-lg"
          />
        </div>

        {/* Content section */}
        <div
          className={`flex-1 flex flex-col items-center md:items-start max-w-[600px] px-4 md:px-0 ${
            order === 1 ? "order-2 md:order-1" : "order-1 md:order-2"
          }`}
        >
          <div className="flex justify-start items-start w-full mb-4">
            <Image
              src="/images/cup.png"
              alt="Small Image"
              width={30}
              height={30}
              className="w-[30px] h-[30px] object-cover rounded-full"
            />
          </div>
          <h2 className="text-3xl font-bold text-center md:text-left mb-6">
            {pageTitle}
          </h2>

          {/* Cards section */}
          <div className="grid grid-cols-1 gap-1 w-full">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start gap-1 p-3"
              >
                {/* Card content */}
                <div className="flex-1">
                  <h3 className="text-lg lg:text-2xl font-semibold mb-2">
                    {card.cardHeading}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{card.description}</p>
                  <p className="text-sm text-gray-500">Calories: {card.calories}</p>
                </div>
                {/* Price */}
                <div className="flex items-center justify-center text-lg lg:text-2xl font-semibold text-[#FF9F0D]">
                  ${card.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;