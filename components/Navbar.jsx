import Link from "next/link";
import React from "react";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { useRouter } from "next/router";
import { useCartContext } from "../ctx/cartContext";

const Navbar = () => {
  const router = useRouter();
  const { cartItems } = useCartContext();

  return (
    <div className="bg-white shadow-md sticky top-0 overflow-hidden z-20 ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center  md:mx-2 pt-5 pb-1 md:pb-0 ">
          {/* logo */}
          <h2 className="text-[#E94560] font-extrabold text-2xl">
            <Link href="/">eBazar</Link>
          </h2>
          {/* logo end */}

          {/* input box start */}

          <div className="hidden border border-[#808080] md:flex items-center  gap-x-3 rounded-3xl w-1/3">
            <AiOutlineSearch size={20} className="mx-2" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none py-2 "
            />
          </div>
          {/* input box end */}
          {/* menu item for mobile screen */}
          <div className=" flex justify-center md:hidden">
            <ul className="flex  md:items-center gap-x-2">
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
          {/* menu item for mobile screen end */}

          {/* user section and cart start */}
          <div className="flex justify-between items-center ">
            <Link
              href="/signin"
              className="md:hidden bg-primary py-1 px-2 rounded-xl text-white"
            >
              Sign In
            </Link>
            <div className="hidden md:flex bg-gray rounded-full p-2 group">
              <AiOutlineUser size={20} className="text-white" />
              <div className="hidden   bg-[#F6F9FC] md:px-40 px-10   py-2 group-hover:flex flex-col items-center justify-center gap-y-1 transition-all rounded-xl absolute right-2  md:right-10 overflow-visible z-50 ">
                <Link
                  href="/signin"
                  className="bg-primary py-1 px-10 rounded-xl text-white"
                >
                  Sign In
                </Link>
                <p className="text-sm">
                  new to eBazar{" "}
                  <Link href="/signup" className="text-primary">
                    Create an account
                  </Link>
                </p>
              </div>
            </div>

            <Link
              href="/cart"
              passHref
              className="bg-gray rounded-full p-2 mx-2"
            >
              <FaShoppingBag size={20} className="text-white" />
              <div className="relative">
                <span className="absolute top-[-48px] right-[-14px] bg-[#E94560] p-1  rounded-full  text-sm text-white">
                  {cartItems?.length}
                </span>
              </div>
            </Link>
          </div>
          {/* user section and cart end */}
        </div>

        {/* menu item start */}
        <div className=" hidden md:flex justify-center md:justify-end pt-6 pb-4">
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
      </div>
    </div>
  );
};

export default Navbar;
