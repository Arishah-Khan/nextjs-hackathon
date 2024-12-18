import Image from "next/image";

interface Card {
  cardHeading: string;
  description: string;
  calories: string;
  price: string;
  optionalColor?: string;
}

interface SectionProps {
  mainImage: string;
  pageTitle: string;
  direction: string;
  cards: Card[];
  order?: 1 | 2; // Optional prop to control the order
}

const Section = ({ mainImage, pageTitle , direction , cards, order = 1 }: SectionProps) => {
  return (
    <section className="py-8 sm:py-10 md:py-12 px-0 sm:px-3 lg:px-10 2xl:px-2">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-2">
        {/* Image section */}
        <div
          className={`flex justify-center md:${direction} items-center flex-1 md:max-w-[370px] ${
            order === 1 ? "order-1 md:order-1" : "order-1 md:order-2"
          }`}
        >
          <Image
            src={mainImage}
            alt="Main"
            width={350}
            height={450}
            className="h-[370px] w-[280px] sm:w-[350px] 2xl:w-[450px] sm:h-[470px] lg:h-[480px] object-cover rounded-base"
          />
        </div>

        {/* Content section */}
        <div
          className={`flex-1 flex flex-col items-center sm:items-start md:max-w-[650px] 2xl:max-w-[800px] px-4 md:px-0 ${
            order === 1 ? "order-1 md:order-1" : "order-2 md:order-1"
          }`}
        >
          <div className="flex justify-start items-start  mb-4">
            <Image
              src="/images/cup.png"
              alt="Small Image"
              width={30}
              height={30}
              className="w-[30px] h-[30px] object-cover rounded-full"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left mb-2 sm:mb-6">
            {pageTitle}
          </h2>

          {/* Cards section */}
          <div className="grid grid-cols-1 gap-1 w-full">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start gap-1 py-1 sm:py-3 border-b border-dotted border-gray-300"
              >
                {/* Card content */}
                <div className="flex-1">
                  <h3
                    className={`sm:text-lg md:text-base lg:text-xl font-semibold mb-2 ${
                      index === 1 && card.optionalColor
                        ? `text-[${card.optionalColor}]`
                        : ""
                    }`} style={{ fontFamily: 'Helvetica, sans-serif' }}
                  >
                    {card.cardHeading}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {card.description}
                  </p>
                  <p className="text-sm text-gray-500">{card.calories}</p>
                </div>
                {/* Price */}
                <div className="flex items-center justify-center text-lg lg:text-2xl font-semibold text-[#FF9F0D]" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                  {card.price}
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
