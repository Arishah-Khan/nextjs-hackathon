"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { BiShoppingBag } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa"; // Importing the user icon
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";
import { auth, db } from "../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { SiGnuprivacyguard } from "react-icons/si";

// Apply the Inter font to the list items
const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  const pathname = usePathname();
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
      router.push("/"); // Redirect to homepage after logout
    });
  };

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Menu", link: "/menu" },
    { name: "Blog", link: "/blog" },
    { name: "Pages", link: "/pages" },
    { name: "About", link: "/about" },
    { name: "Shop", link: "/shop" },
    { name: "Contact", link: "/contact" },
  ];

  const router = useRouter();

  const handleCartClick = () => {
    router.push("/shop/shopping-cart");
  };

  return (
    <header className="shadow-md  bg-[#0d0d0d] max-w-[1340px] mx-auto">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between md:px-5 lg:px-10 py-4">
        {/* Logo (Left side) */}
        <div className="flex justify-start">
          <h1
            className="text-lg lg:text-2xl text-white"
            style={{
              fontFamily: "'Helvetica', 'Arial', sans-serif",
              fontWeight: "bold",
            }}
          >
            <span className="text-[#FF9F0D]">Food</span>tuck
          </h1>
        </div>

        {/* Navigation (Center) */}
        <nav className="flex-1 text-center text-white">
          <ul
            className={`flex md:space-x-4 text-sm lg:text-base justify-center ${inter.className}`}
          >
            {["Home", "Menu", "Blog", "About", "Shop", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={`relative text-white transition-colors duration-300 px-4 py-2 rounded-md hover:shadow-lg
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

        {/* Icons (Right side) */}
        <div className="flex items-center space-x-6 ml-auto">
          {" "}
          {/* ml-auto to push icons to the right */}
          {/* Search Icon */}
          <button className="text-white hover:text-gray-300">
            <FiSearch size="24" />
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
      </div>

      {/* Mobile Navigation (Hamburger Menu) */}
      <div className="md:hidden flex items-center justify-between px-2 sm:px-5 py-4">
        {/* Logo (Left side) */}
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

        {/* Hamburger Menu Trigger */}
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
                      className={`relative text-white transition-colors duration-300 px-4 py-2 rounded-md hover:shadow-lg
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
