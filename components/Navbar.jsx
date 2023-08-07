import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { TbShoppingBag } from "react-icons/tb";
import { useRouter } from "next/router";
import { UseCartContext } from "../ctx/cartContext";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const router = useRouter();
  const { cartItems } = UseCartContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md sticky top-0 overflow-hidden z-20 ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center  mx-2 pt-5 pb-1 md:pb-0 ">
          <RxHamburgerMenu
            size={24}
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />

          {/*brand logo */}
          <h2 className="text-[#E94560] font-extrabold text-2xl">
            <Link href="/">eBazar</Link>
          </h2>
          {/* brand logo end */}

          {/* menu item start */}

          <div className=" hidden md:flex justify-center  pt-6 pb-4">
            <ul className="flex  md:items-center gap-x-6">
              <li
                className={`cursor-pointer transition-all hover:text-primary ${
                  router.pathname == "/" ? "text-primary " : ""
                }`}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={`cursor-pointer transition-all hover:text-primary ${
                  router.pathname == "/fashion" ? "text-primary " : ""
                }`}
              >
                <Link href="/fashion">Fashion</Link>
              </li>
              <li className="cursor-pointer transition-all hover:text-primary">
                <Link href="/admin">Dashboard</Link>
              </li>
            </ul>
          </div>
          {/* menu item end  */}

          {/* input box start */}

          {/* <div className="hidden border border-[#808080] md:flex items-center  gap-x-3 rounded-3xl w-1/3">
            <AiOutlineSearch size={20} className="mx-2" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none py-2 "
            />
          </div> */}
          {/* input box end */}

          {/* user section and cart start */}
          <div className="flex justify-between items-center ">
            <div className="hidden md:flex hover:bg-[#F1F5F9] rounded-full p-3">
              <FiSearch size={24} />
            </div>
            <Link
              href="/signin"
              className=" hover:bg-[#F1F5F9] rounded-full p-3 "
            >
              <AiOutlineUser size={24} />
            </Link>

            <Link
              href="/cart"
              passHref
              className=" hover:bg-[#F1F5F9] rounded-full p-3 "
            >
              <TbShoppingBag size={24} />
              <div className="relative ">
                <span className="absolute top-[-35px] right-[-8px] text-lg text-primary">
                  {cartItems?.length}
                </span>
              </div>
            </Link>
          </div>
          {/* user section and cart end */}
        </div>
        {/* mobile navbar */}
        {isOpen && (
          <div className="md:hidden flex flex-col px-2  pb-4">
            <ul className="flex flex-col gap-y-4">
              <li
                className={`cursor-pointer transition-all hover:text-primary ${
                  router.pathname === "/" ? "text-primary " : ""
                }`}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={`cursor-pointer transition-all hover:text-primary ${
                  router.pathname === "/fashion" ? "text-primary " : ""
                }`}
              >
                <Link href="/fashion">Fashion</Link>
              </li>
              <li className="cursor-pointer transition-all hover:text-primary">
                <Link href="/admin">Dashboard</Link>
              </li>
            </ul>
          </div>
        )}

        {/* mobile navbar */}
      </div>
    </div>
  );
};

export default Navbar;
