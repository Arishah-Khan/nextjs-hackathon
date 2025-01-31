
import HeroSection from "@/components/menu/heroSec";
import WishlistCartPage from "@/components/wishlistPage";

function ShoppingCart() {


  return (
    <main className="max-w-full mx-auto">
    <div className="bg-[#0d0d0d]">
      <HeroSection pageTitle="Wishlist" page="Wishlist" />
    </div>
    <WishlistCartPage />
  </main>
  
  );
}

export default ShoppingCart;
