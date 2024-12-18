import Dessert from "@/components/menu/dessert";
import Drink from "@/components/menu/drinks";
import Main from "@/components/menu/main";
import Course from "@/components/menu/main-course";
import Partners from "@/components/menu/partners";
import Starter from "@/components/menu/starter";
import Card from "@/components/restaurant/cards";

export default function Menu() {
  return (
    <main className="max-w-[1440px] mx-auto">
        <Main />
      <Starter />
      <Course />
      <Card />
      <Dessert />
      <Drink />
      <Partners />
    </main>
  );
}
