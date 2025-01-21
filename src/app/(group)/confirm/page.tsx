import ShippingForm from "@/components/confirm/confirm";
import HeroSection from "@/components/menu/heroSec";

export default function Confirm(){
    return(
        <main className="max-w-[1340px]  mx-auto">
<div className="bg-[#0d0d0d]">
             <HeroSection pageTitle="Confirm Page" page="Confirm" /></div>
        <ShippingForm />
        </main>
    )
}