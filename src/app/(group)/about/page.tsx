import AboutDiv from "@/components/about/about";
import Chef from "@/components/about/chef";
import Client from "@/components/about/client";
import HeroSection from "@/components/menu/heroSec";

export default function About() {
  return (
    <main className="max-w-[1340px] mx-auto">
      {/* Product Section */}
      <HeroSection pageTitle="About Us" />
      <AboutDiv />
<Chef />
      <Client />
    </main>
  );
}
