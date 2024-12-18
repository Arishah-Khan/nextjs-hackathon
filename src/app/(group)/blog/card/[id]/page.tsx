// src/app/(group)/blog/card/[id]/page.tsx
import Image from 'next/image';
import { blogCards } from '@/components/blog/card'; // Assuming this is the correct import path
import HeroSection from '@/components/menu/heroSec';

type BlogDetailProps = {
  post: {
    id: string;
    title: string;
    image: string;
    date: string;
    comments: number;
    author: string;
    excerpt: string;
  };
};

const BlogDetail = async ({ params }: any) => {
  const { id } = params;

  // Fetch the post data (simulating async data fetch)
  const post = blogCards.find((card) => card.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <section className="pb-10 max-w-[1340px] mx-auto" >

<div className="bg-[#0d0d0d]">
             <HeroSection pageTitle="Blog Details" page='Blog Details'/></div>
      <div className="p-4 rounded-lg shadow-lg max-w-[700px] mx-auto mt-4">
        {/* Displaying the image with a smaller size */}
        <Image
          src={post.image}
          alt={post.title}
          width={600} // Adjusted image width
          height={400} // Adjusted image height
          className="rounded-lg object-cover w-[300px] h-[250px] sm:w-[400px] lg:w-[600px] md:h-[400px] mx-auto" // Adjusted height in CSS class
        />
        
        {/* Blog metadata */}
        <div className="mt-4 text-sm text-gray-500 flex justify-between items-center">
          <span>{post.date}</span> | <span>{post.comments} Comments</span> |{' '}
          <span>By {post.author}</span>
        </div>
        
        {/* Title of the blog */}
        <h3 className="mt-4 text-xl md:text-3xl font-bold">{post.title}</h3>
        
        {/* Excerpt text */}
        <p className="mt-4 text-gray-700 text-sm py-2">{post.excerpt}</p>
        
        {/* Full content section with static detailed content */}
        <div className="mt-6 text-gray-900 text-xs sm:text-sm md:text-base">
          <p>
          {`  Here is the full content of your blog post. You can extend the content of the blog by adding more text or rich content for each blog post. 
            For example, you can write multiple paragraphs here to give more details to your readers. 
            Below is a sample of static content:`}
          </p>
          <p>
           {` This is some static content. You can describe the blog topic in more detail, explain concepts, provide examples, or include images or links. 
            This is just a placeholder text that will be visible to users reading the blog post.`}
          </p>
          <p>
           {` Continue adding more static content here. This can include sections like "Conclusion", "Further Readings", or even "Related Posts" if needed. 
            You can also format the text or include any HTML elements for better presentation.`}
          </p>
          <p>
          {`  This is a good place to expand the blog's topic. It's important to keep the content interesting and engaging so the users stay on the page longer.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
