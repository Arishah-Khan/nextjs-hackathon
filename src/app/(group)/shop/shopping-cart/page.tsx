
import HeroSection from "@/components/menu/heroSec";
import ShoppingCartPage from "@/components/shoppingCartTest";

function ShoppingCart() {


  return (
    <main className="max-w-full mx-auto">
    <div className="bg-[#0d0d0d]">
      <HeroSection pageTitle="Shopping Cart" page="Shopping Cart" />
    </div>
    <ShoppingCartPage />
  </main>
  
  );
}

export default ShoppingCart;
