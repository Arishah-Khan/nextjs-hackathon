import Button from "../button";

interface Card {
  cardHeading: string;
  description: string;
  calories: string;
  price: string;
  optionalColor?: string;
}

const cards1: Card[] = [
  {
    cardHeading: "Alder Grilled Chinook Salmon",
    description: "Salmon, Toasted French bread topped with romano, cheddar",
    calories: "560 CAL",
    price: "32$",
    optionalColor: "#FF9F0D",
  },
  {
    cardHeading: "Honey Glazed Duck",
    description: "Tender duck with honey glaze and fresh herbs",
    calories: "720 CAL",
    price: "28$",
  },
  {
    cardHeading: "Garlic Butter Shrimp",
    description: "Served with steamed vegetables and garlic butter sauce",
    calories: "480 CAL",
    price: "22$",
  },
  {
    cardHeading: "Vegetarian Platter",
    description: "Grilled veggies, hummus, and fresh pita bread",
    calories: "430 CAL",
    price: "18$",
  },
];

const cards2: Card[] = [
  {
    cardHeading: "Classic Cheeseburger",
    description: "Beef patty with cheddar cheese, lettuce, and tomato",
    calories: "650 CAL",
    price: "15$",
  },
  {
    cardHeading: "Margherita Pizza",
    description: "Classic Italian pizza with fresh basil and mozzarella",
    calories: "800 CAL",
    price: "20$",
  },
  {
    cardHeading: "Caesar Salad",
    description: "Crisp romaine lettuce, croutons, and parmesan cheese",
    calories: "320 CAL",
    price: "12$",
  },
  {
    cardHeading: "Spaghetti Carbonara",
    description: "Creamy pasta with pancetta, egg, and parmesan",
    calories: "600 CAL",
    price: "24$",
  },
];

export default function Menu() {
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
    <main className="px-2 sm:px-4 py-10">
      <h2
        className="text-[#333333] font-bold text-xl sm:text-2xl lg:text-4xl text-center mb-6"
        style={{ fontFamily: "Helvetica" }}
      >
        Our Food Menu
      </h2>
      <p className="text-[#4F4F4F] text-center mb-4 max-w-[600px] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
        pharetra dictum neque massa congue
      </p>

      <ul className="text-center mb-6 flex flex-wrap justify-center items-center border-b border-[#d1d1d1]">
        {list.map((item, index) => (
          <li
            key={index}
            className={`inline-block px-4 py-3 sm:px-8 sm:py-6 ${
              index === 0 ? "text-[#FF9F0D] font-semibold" : "text-black"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10">
        {/* First Section */}
        <div className="gap-6 w-full">
          {cards1.map((card, index) => (
            <div
              key={card.cardHeading}
              className="flex flex-col sm:flex-row justify-between border-b border-[#d1d1d1] p-2 sm:p-4"
            >
              <div className="bg-white flex flex-col">
                <h3
                  className={`sm:text-lg md:text-base lg:text-xl font-semibold mb-2 ${
                    index === 0 && card.optionalColor
                      ? `text-[${card.optionalColor}]`
                      : ""
                  }`}
                  style={{ fontFamily: "Helvetica, sans-serif" }}
                >
                  {card.cardHeading}
                </h3>
                <p className="text-gray-600 mb-2">{card.description}</p>
                <p className="text-gray-500 mb-4">{card.calories}</p>
              </div>
              <div className="font-bold text-[#FF9F0D]">{card.price}</div>
            </div>
          ))}
        </div>

        {/* Second Section */}
        <div className="gap-6 w-full">
          {cards2.map((card, index) => (
            <div
              key={card.cardHeading}
              className="flex flex-col sm:flex-row justify-between border-b border-[#d1d1d1] p-2 sm:p-4"
            >
              <div key={index} className="bg-white flex flex-col">
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "Helvetica, sans-serif" }}
                >
                  {card.cardHeading}
                </h3>
                <p className="text-gray-600 mb-2">{card.description}</p>
                <p className="text-gray-500 mb-4">{card.calories}</p>
              </div>
              <div className="font-bold text-[#FF9F0D]">{card.price}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center py-8">
        <button
          className={`px-8 py-2 text-[#FF9F0D] hover:text-white border-2 border-[#FF9F0D] hover:bg-[#e6891a] focus:outline-none`}
        >
          View Menu
        </button>
      </div>
    </main>
  );
}
