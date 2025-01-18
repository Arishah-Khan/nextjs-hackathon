import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface Card {
  _id: string;
  id: string;
  image: any; // Sanity image type
  title: string;
  oldPrice: number;
  newPrice: number;
}

const CardsPage = async () => {
  const cards = await client
    .fetch(`*[_type == "product"]{
      _id,
      id,
      image,
      title,
      oldPrice,
      newPrice
    }`)
    .catch((error) => {
      console.error("Failed to fetch products:", error);
      return []; // Fallback to empty array
    });

  return (
    <section className="py-10 px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-4 sm:gap-6">
      <div>
     {cards.map((card:Card) => (
  <Link href={`/shop/card/${card.id || card._id}`} key={card._id}>
    <div className="sm:p-4 rounded-lg cursor-pointer hover:shadow-lg">
      <Image
        src={urlFor(card.image).url()}
        alt={card.title}
        width={300}
        height={200}
        className="rounded-lg object-cover w-[140px] h-[100px] sm:w-[250px] sm:h-[200px]"
      />
      <h3 className="mt-4 text-lg font-bold">{card.title}</h3>
      <div className="flex items-center gap-2 mt-2">
        <p className="text-[#FF9F0D] text-lg font-semibold">${card.newPrice}</p>
        <p className="line-through text-gray-500">${card.oldPrice}</p>
      </div>
    </div>
  </Link>
))}
</div>
    </section>
  );
};

export default CardsPage;
