import AboutSec from "@/components/restaurant/about-sec";
import Active from "@/components/restaurant/active";
import Blog from "@/components/restaurant/blog-sec";
import Card from "@/components/restaurant/cards";
import Chef from "@/components/restaurant/chef";
import Client from "@/components/restaurant/clents";
import FoodCategory from "@/components/restaurant/food-category";
import Footer from "@/components/restaurant/footer";
import Header from "@/components/restaurant/header";
import HeroSec from "@/components/restaurant/heroSec";
import MenuSec from "@/components/restaurant/menu-sec";
import TasteSec from "@/components/restaurant/taste";

export default function Home() {
  return(
    <main className="bg-[#0d0d0d]">
      <Header />
      <div className="max-w-[1240px] mx-auto">
      <HeroSec />
      <AboutSec />
      <FoodCategory />
      <TasteSec />
      <Card />
      <MenuSec />
      <Chef />
      <Client />
      <Active />
      <Blog />
      <Footer />
      </div>
    </main>
        
  );
}
