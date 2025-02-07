
import { Inter, Playfair_Display } from "next/font/google";
import CartProvider from "@/providers/cartProvider";
import ToastProvider from "@/providers/toast-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { WishlistProvider } from "@/contexts/wishListContext";
import { PriceProvider } from "@/contexts/payment-context";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ReactNode } from "react";
import SaveUserToSanity from "@/utils/saveUserToSanity";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair-display",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <UserProvider>
          <SaveUserToSanity /> {/* ✅ Yeh component sirf user ka data save karega */}
          <CartProvider>
            <ToastProvider />
            <WishlistProvider>
              <PriceProvider>
                <ToastContainer />
                {children}
              </PriceProvider>
            </WishlistProvider>
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
