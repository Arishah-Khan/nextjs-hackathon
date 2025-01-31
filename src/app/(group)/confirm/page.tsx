
import HeroSection from "@/components/menu/heroSec";
import StripePayment from "@/components/stripe/stripe-payment";
  


export default function Confirm(){
    return(
        <main className="max-w-[1340px]  mx-auto">
<div className="bg-[#0d0d0d]">
             <HeroSection pageTitle="Payment Page" page="Payment" /></div>
<StripePayment />
        </main>
    )
}