import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "FoodTuck",
  description: "Explore a wide range of tasty and fresh food options at FoodTuck. Order online for quick delivery and enjoy your favorite meals today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
