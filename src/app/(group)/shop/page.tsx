import BlogPage from "@/components/blog/card";
import HeroSection from "@/components/menu/heroSec";

export default function Shop(){
    return(
        <main className="max-w-[1340px]  mx-auto">
<div className="bg-[#0d0d0d]">
             <HeroSection pageTitle="Shop" page="Shop"/></div>
             <BlogPage />
        </main>
    )
}