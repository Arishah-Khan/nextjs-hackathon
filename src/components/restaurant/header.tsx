"use client";

import { useEffect, useState } from "react";
import { auth, db } from "../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { BiShoppingBag } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";

// Apply the Inter font to the list items
const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { cartCount = 0 } = useShoppingCart();

  const [userImage, setUserImage] = useState<string | null>(null);
  const [user, setUser] = useState<any | null>(null);
  const [showLogoutOption, setShowLogoutOption] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        const userDocRef = doc(db, "users", user.uid);

        getDoc(userDocRef)
          .then((docSnap) => {
            if (docSnap.exists()) {
              const profileImageUrl = docSnap.data()?.profileImageUrl;
              setUserImage(profileImageUrl || null);
            }
          })
          .catch(console.error);
      } else {
        setUser(null);
        setUserImage(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignInClick = () => {
    router.push("/signUp");
  };

  const handleLogoutClick = () => {
    auth.signOut().then(() => {
      setUser(null);
      setShowLogoutOption(false);
      router.push("/"); 
    });
  };

  const handleCartClick = () => {
    router.push("/shop/shopping-cart");
  };
  return (
    <header className="shadow-md max-w-[1240px] mx-auto">
      {/* Desktop Navigation (Left side) */}
      <div className="hidden text-white md:flex items-center justify-between md:px-5 lg:px-10 py-8">
        <nav className="flex space-x-6">
          <ul className="flex space-x-1 lg:space-x-3 text-sm lg:text-base">
            {["Home", "Menu", "Blog", "About", "Shop", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={`relative text-white transition-colors duration-300 px-2 lg:px-4 py-2 rounded-md hover:shadow-lg
                    ${
                      (pathname === "/" && item === "Home") ||
                      pathname === `/${item.toLowerCase()}`
                        ? "text-[#FF9F0D] font-semibold"
                        : ""
                    }`}
                  >
                    {item}
                    {/* Active Dot */}
                    {(pathname === "/" && item === "Home") ||
                    pathname === `/${item.toLowerCase()}` ? (
                      <span className="absolute bottom-0 mt-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#FF9F0D] rounded-full"></span>
                    ) : null}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <div
          className="flex-1 flex justify-start items-center"
          style={{ marginTop: "-10px" }}
        >
          <h1
            className="text-lg lg:text-2xl ml-[40px] lg:ml-[80px] mt-[-20px] lg:mt-[-25px]"
            style={{
              fontFamily: "'Helvetica', 'Arial', sans-serif",
              fontWeight: "bold",
            }}
          >
            <span className="text-[#FF9F0D]">Food</span>tuck
          </h1>
        </div>

        <div className="flex items-center md:space-x-3 lg:space-x-4">
          <div className="relative">
            <FiSearch
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              size="20"
            />
            <input
              type="text"
              placeholder="Search..."
              className="search-bar px-3 py-1 lg:px-4 lg:py-2 border-[1.5px] border-[#FF9F0D] rounded-full bg-[#0d0d0d] placeholder-white focus:outline-none"
            />
          </div>

          {/* Shopping Bag Icon */}
          <button
            className="relative text-white hover:text-gray-300"
            onClick={handleCartClick}
          >
            <BiShoppingBag size="24" />

            {cartCount > 0 && (
              <span className="absolute top-[-5px] right-[-5px] text-xs text-white bg-[#FF9F0D] rounded-full w-4 h-4 flex justify-center items-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="text-white hover:text-gray-300 flex justify-center items-center"
            onClick={() => {
              if (user) {
                setShowLogoutOption(!showLogoutOption);
              } else {
                handleSignInClick();
              }
            }}
          >
            {user ? (
              showLogoutOption ? (
                <div
                  className="absolute bg-white text-black rounded shadow-md p-2"
                  onClick={handleLogoutClick}
                >
                  Logout
                </div>
              ) : userImage ? (
                <Image
                  src={userImage}
                  alt="User"
                  width="20"
                  height="20"
                  className="w-6 h-6 border-[1.5px] border-white rounded-full object-contain"
                />
              ) : (
                <FaUser size="22" />
              )
            ) : (
              <SiGnuprivacyguard size="22" />
            )}
          </button>
        </div>
      </div>

      <div className="md:hidden flex items-center justify-between px-2 sm:px-5 py-4">
        <div className="flex-1">
          <h1
            className="text-xl lg:text-2xl text-white"
            style={{
              fontFamily: "'Helvetica', 'Arial', sans-serif",
              fontWeight: "bold",
            }}
          >
            <span className="text-[#FF9F0D]">Food</span>tuck
          </h1>
        </div>

        <Sheet>
          <SheetTrigger>
            <IoMenu size="30" className="text-white cursor-pointer" />
          </SheetTrigger>

          <SheetContent side="left" className="bg-[#0d0d0d] text-white">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <ul className={`pt-6 space-y-3 text-center ${inter.className}`}>
              {["Home", "Menu", "Blog", "About", "Shop", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className={`relative text-white transition-colors duration-300 px-4 py-2 rounded-md  hover:shadow-lg
                      ${
                        (pathname === "/" && item === "Home") ||
                        pathname === `/${item.toLowerCase()}`
                          ? "text-[#FF9F0D] font-semibold"
                          : ""
                      }`}
                    >
                      {item}
                      {/* Active Dot */}
                      {(pathname === "/" && item === "Home") ||
                      pathname === `/${item.toLowerCase()}` ? (
                        <span className="absolute bottom-0 mt-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#FF9F0D] rounded-full"></span>
                      ) : null}
                    </Link>
                  </li>
                )
              )}
            </ul>

             <div className="flex items-center justify-center  pt-4 space-x-6 ml-auto">
                          {" "}
                          {/* ml-auto to push icons to the right */}
                          {/* Search Icon */}
                          <button className="text-white hover:text-gray-300">
                            <FiSearch size="20" />
                          </button>
                          {/* User Icon */}
                          <button
                            className="text-white hover:text-gray-300 flex justify-center items-center"
                            onClick={() => {
                              if (user) {
                                setShowLogoutOption(!showLogoutOption);
                              } else {
                                handleSignInClick();
                              }
                            }}
                          >
                            {user ? (
                              showLogoutOption ? (
                                <div
                                  className="absolute bg-white text-black rounded shadow-md p-2"
                                  onClick={handleLogoutClick}
                                >
                                  Logout
                                </div>
                              ) : userImage ? (
                                <Image
                                  src={userImage}
                                  alt="User"
                                  width="20"
                                  height="20"
                                  className="w-6 h-6 border-[1.5px] border-white rounded-full object-contain"
                                />
                              ) : (
                                <FaUser size="22" />
                              )
                            ) : (
                              <SiGnuprivacyguard size="22" />
                            )}
                          </button>
                          {/* Shopping Bag Icon */}
                          <button
                            className="relative text-white hover:text-gray-300"
                            onClick={handleCartClick}
                          >
                            <BiShoppingBag size="24" />
            
                            {cartCount > 0 && (
                              <span className="absolute top-[-5px] right-[-5px] text-xs text-white bg-[#FF9F0D] rounded-full w-4 h-4 flex justify-center items-center">
                                {cartCount}
                              </span>
                            )}
                          </button>
                        </div>
                        
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
