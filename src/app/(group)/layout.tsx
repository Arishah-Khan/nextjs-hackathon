import type { Metadata } from "next";
import "../globals.css";
import Main from "@/components/menu/main";
import Footer from "@/components/menu/footer";
import Header from "@/components/menu/header";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <div>
  <Header />
{children}
<Footer />
 </div>
  );
}
