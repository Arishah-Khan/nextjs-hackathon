import Link from "next/link";
import Image from "next/image";

interface Card {
  id: string;
  image: string;
  title: string;
  price: string;
  originalPrice: string;
}

const cards: Card[] = [
  { id: "1", image: "/images/shop1.png", title: "Fresh Lime", price: "$5.99", originalPrice: "$8.99" },
  { id: "2", image: "/images/shop2.png", title: "Burger", price: "$4.49", originalPrice: "$6.49" },
  { id: "3", image: "/images/shop3.png", title: "Pizza", price: "$7.99", originalPrice: "$10.99" },
  { id: "4", image: "/images/shop4.png", title: "Sandwiches", price: "$3.99", originalPrice: "$5.99" },
  { id: "5", image: "/images/shop6.png", title: "Drink", price: "$6.99", originalPrice: "$9.99" },
  { id: "6", image: "/images/shop7.png", title: "Cheese Butter", price: "$8.49", originalPrice: "$12.49" },
  { id: "7", image: "/images/shop9.png", title: "Country Burger", price: "$14.99", originalPrice: "$18.99" },
  { id: "8", image: "/images/shop10.png", title: "Chicken Burger", price: "$5.49", originalPrice: "$7.49" },
  { id: "9", image: "/images/shop11.png", title: "ICe Cream", price: "$6.99", originalPrice: "$9.49" },
  { id: "10", image: "/images/shop14.png", title: "Chicken Chup", price: "$1.99", originalPrice: "$3.99" },
  { id: "11", image: "/images/shop15.png", title: "Chocolate Muffin", price: "$2.49", originalPrice: "$4.49" },
  { id: "12", image: "/images/shop16.png", title: "Pizza", price: "$15.99", originalPrice: "$19.99" },
  { id: "13", image: "/images/shop17.png", title: "Cake", price: "$5.99", originalPrice: "$8.49" },
  { id: "14", image: "/images/shop18.png", title: "Club Sandwich", price: "$4.49", originalPrice: "$6.49" },
];

const CardsPage = () => {
  return (
    <section className="py-10 px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-6">
      {cards.map((card) => (
        <Link href={`/shop/card/${card.id}`} key={card.id}>
          <div className=" p-4 rounded-lg cursor-pointer hover:shadow-lg">
            <Image
              src={card.image}
              alt={card.title}
              width={300}
              height={200}
              className="rounded-lg object-cover w-[140px] h-[100px] sm:w-[250px] sm:h-[200px] "
            />
            <h3 className="mt-4 text-lg font-bold">{card.title}</h3>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-[#FF9F0D] text-lg font-semibold">{card.price}</p>
              <p className="line-through text-gray-500">{card.originalPrice}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default CardsPage;