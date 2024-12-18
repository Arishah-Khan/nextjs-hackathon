import AboutDiv from "@/components/about/about";
import Choose from "@/components/about/choose";
import Client from "@/components/about/client";
import Items from "@/components/about/items";
import Menu from "@/components/about/menu";
import Team from "@/components/about/team";
import HeroSection from "@/components/menu/heroSec";

export default function About() {
  return (
    <main className="max-w-[1340px] mx-auto">
      {/* Product Section */}
      <HeroSection pageTitle="About Us" page="About"/>
      <AboutDiv />
      <Choose />
      <Items />
      <Team />
      <Client />
      <Menu />
    </main>
  );
}
