import React from "react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
const Header = () => {
  return (
    <div className=" bg-[#0F3460] py-3 text-white px-1">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between gap-x-2">
          <div className="flex gap-x-2  md:gap-x-5 items-center">
            <div className=" hidden md:flex gap-x-2 items-center">
              <BsTelephone />
              <p className="text-sm">+88016-22754705 </p>
            </div>
            <div className="flex gap-x-2 md:gap-x-2 items-center">
              <MdOutlineEmail />
              <p className="text-sm">mdrased1015@gmail.com</p>
            </div>
          </div>

          <ul className="flex gap-x-2 md:gap-x-5 text-sm">
            <li className="cursor-pointer"> Theme FAQ"s</li>
            <li className="cursor-pointer"> Need Help?</li>
            <li className="cursor-pointer">
              {" "}
              <span className="hidden md:inline ">🏳️‍⚧️</span> EN
            </li>
            <li className="cursor-pointer">
              <span className="hidden md:inline">🏳️‍⚧️</span> USD
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
