import HeroSection from "@/components/menu/heroSec";
import SignUpPage from "@/components/signUp";

export default function Shop(){
    return(
        <main className="max-w-[1340px]  mx-auto">
<div className="bg-[#0d0d0d]">
             <HeroSection pageTitle="Sign Up Page" page="Sign Up" /></div>
        <SignUpPage />
        </main>
    )
}