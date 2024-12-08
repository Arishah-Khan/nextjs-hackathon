import Image from "next/image";

interface Card {
    image: string;
    heading: string;
    numbers: string;
  }
  
  const cards: Card[] = [
    {
      image: '/images/card1.png',
      heading: 'Professional Chefs',
      numbers: '420',
    },
    {
      image: '/images/card2.png',
      heading: 'Items Of Food',
      numbers: '320',
    },
    {
      image: '/images/card3.png',
      heading: 'Years Of Experienced',
      numbers: '30+',
    },
    {
      image: '/images/card4.png',
      heading: 'Happy Customers',
      numbers: '220',
    },
  ];
  
  export default function Card() {
    return (
      <section
        className="relative flex justify-center items-center gap-6 px-1 md:px-4 py-8 flex-wrap bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/card-bg.png')",
        }}
      >
        {/* Darker Overlay on Background */}
        <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
  
        {/* Cards Content */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-6 px-2 md:px-4 py-2 md:py-8  z-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center flex-wrap text-center space-y-2 md:space-y-4 bg-opacity-90 rounded-md p-4 shadow-lg"
            >
              {/* Image */}
              <Image
                src={card.image}
                alt={card.heading}
                width={40}
                height={40}
                className="w-16 h-16 object-contain"
              />
              {/* Heading */}
              <h3 className="text-lg font-semibold text-white">{card.heading}</h3>
              {/* Numbers */}
              <p className="text-white text-2xl font-bold">{card.numbers}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  