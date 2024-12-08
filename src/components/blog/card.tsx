import Link from "next/link";
import Image from "next/image";

interface BlogCard {
  id: string;
  image: string;
  title: string;
  date: string;
  comments: number;
  author: string;
  excerpt: string;
}

const blogCards: BlogCard[] = [
  {
    id: "1",
    image: "/images/taste1.png",
    title: "10 Reasons To Do A Digital Detox Challenge",
    date: "Feb 14, 2022",
    comments: 3,
    author: "Admin",
    excerpt: "Digital detox has become a popular trend as people seek to disconnect from the constant barrage of notifications and digital content...",
  },
  {
    id: "2",
    image: "/images/shop3.png",
    title: "Traditional Soft Pretzels with Sweet Beer Cheese",
    date: "Feb 12, 2022",
    comments: 5,
    author: "Chef John",
    excerpt: "Soft pretzels are a delicious snack that can be paired with a variety of dips, but when paired with a sweet beer cheese, they become irresistible...",
  },
  {
    id: "3",
    image: "/images/shop2.png",
    title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
    date: "Feb 10, 2022",
    comments: 2,
    author: "Foodie Jane",
    excerpt: "This ultimate hangover burger is exactly what you need to cure that post-party headache, with a perfect blend of flavors and textures...",
  },
  {
    id: "4",
    image: "/images/shop1.png",
    title: "My Favorite Easy Black Pizza Toast Recipe",
    date: "Feb 8, 2022",
    comments: 4,
    author: "Home Cook",
    excerpt: "Pizza toast is a quick and satisfying snack that brings together crispy bread and delicious toppings, a perfect option for a light meal...",
  },
];

const BlogPage = () => {
  return (
    <section className="py-10 px-5 grid grid-cols-1  justify-center items-center gap-6">
      {blogCards.map((card) => (
        <div key={card.id} className="p-4 rounded-lg cursor-pointer hover:shadow-lg max-w-[500px] mx-auto">
          <Image
            src={card.image}
            alt={card.title}
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-[300px]"
          />
          <div className="mt-4 text-sm text-gray-500 flex justify-between items-center">
            <span>{card.date}</span> | 
            <span>{card.comments} Comments</span> | 
            <span>By {card.author}</span>
          </div>
          <Link href={`/blog/card/${card.id}`}> <h3 className="mt-4 text-lg font-bold">{card.title}</h3></Link>
          <p className="mt-2 text-gray-700 text-sm py-2">{card.excerpt}</p>
          <Link href={`/blog/card/${card.id}`}>
            <button className="mt-4 py-2 px-4 border-[1px] border-[#FF9F0D] text-[#FF9F0D] rounded-md">
              Read More
            </button>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default BlogPage;

export {blogCards}
