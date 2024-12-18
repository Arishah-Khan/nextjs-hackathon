import HeroSection from "@/components/menu/heroSec";
import SignInPage from "@/components/signIn";

export default function Shop(){
    return(
        <main className="max-w-[1340px]  mx-auto">
<div className="bg-[#0d0d0d]">
             <HeroSection pageTitle="Sign In Page" page="Sign In"/></div>
        <SignInPage />
        </main>
    )
}