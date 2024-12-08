import Image from 'next/image';
import { FaThumbsUp, FaCommentAlt, FaShare } from 'react-icons/fa'; // Importing icons from Font Awesome

interface Blog {
  title: string;
  image: string;
}

const blogPosts: Blog[] = [
  {
    title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
    image: "/images/food2.png",
  },
  {
    title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
    image: "/images/pizza.png",
  },
  {
    title: "Curabitur rutrum velit ac congue malesuada",
    image: "/images/taste1.png",
  },
];

export default function Blog() {
  return (
    <section className="py-10 md:pt-20 md:pb-10 px-4">
      {/* Heading */}
      <h5
        className="text-[#FF9F0D] font-[GreatVibes] text-center text-xl sm:text-2xl lg:text-3xl mb-4"
        style={{ fontFamily: "Great Vibes" }}
      >
        Blog Post
      </h5>
      <h2
        className="text-white font-bold font-[Helvetica] text-xl sm:text-2xl lg:text-4xl text-center mb-8"
        style={{ fontFamily: "Helvetica" }}
      >
        <span className="text-[#FF9F0D]">La</span>test News & Blog
      </h2>

      {/* Blog Cards */}
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-[#0d0d0d] rounded-lg overflow-hidden shadow-md"
          >
            {/* Image */}
            <div className="">
              <Image
                src={post.image}
                alt={post.title}
               width="300"
                height="200"
                className="rounded-t-lg w-[250px] h-[180px] sm:w-[280px] sm:h-[200px]"
              />
            </div>

            {/* Blog Content */}
            <div className="px-2 py-4 md:p-4 border-l-[1.5px] border-r-[1.5px] border-b-[1.5px] border-white w-[250px] h-auto sm:w-[280px] ">
              {/* Date */}
              <p className="text-[#FF9F0D] text-sm mb-2">10 February 2022</p>

              {/* Title */}
              <h3 className="text-white font-bold text-base mb-4">{post.title}</h3>

              {/* Learn More and Icons */}
              <div className="flex justify-between items-center text-white">
                <button className="text-[#FF9F0D] text-sm">Learn More</button>
                <div className="flex space-x-4">
                  <span className="text-white">
                    <FaThumbsUp size={18} />
                  </span>
                  <span className="text-[#FF9F0D]">
                    <FaCommentAlt size={18} />
                  </span>
                  <span className="text-white">
                    <FaShare size={18} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
