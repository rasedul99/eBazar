import React from "react";
import apple from "../public/images/category/cat-1.png";
import samsung from "../public/images/category/cat-2.png";

import Image from "next/image";

const Brand = () => {
  return (
    <div className="bg-white ">
      <p className="py-4 text-center font-semibold text-xl">Brands</p>
      <div className="flex justify-between  flex-wrap md:flex-col  gap-y-4 mx-3 py-3">
        <div className="flex gap-x-3  bg-[#F6F9FC] hover:bg-white hover:shadow-sm transition-all py-3 px-2 cursor-pointer  rounded-md ">
          <Image src={apple} height={25} width={25} />
          <p className="">Apple</p>
        </div>
        <div className="flex gap-x-3 bg-[#F6F9FC] hover:bg-white hover:shadow-sm transition-all py-3 px-2 cursor-pointer rounded-md">
          <Image src={samsung} height={25} width={25} />
          <p>Sony</p>
        </div>
        <div className="flex gap-x-3 bg-[#F6F9FC] hover:bg-white hover:shadow-sm transition-all py-3 px-2 cursor-pointer rounded-md">
          <Image src={apple} height={25} width={25} />
          <p>Samsung</p>
        </div>
        <div className="flex gap-x-3 bg-[#F6F9FC] hover:bg-white hover:shadow-sm transition-all py-3 px-2 cursor-pointer rounded-md">
          <Image src={samsung} height={25} width={25} />
          <p>Oppo</p>
        </div>
        <div className="flex gap-x-3 bg-[#F6F9FC] hover:bg-white hover:shadow-sm transition-all py-3 px-2 cursor-pointer rounded-md">
          <Image src={apple} height={25} width={25} />
          <p>Vivo</p>
        </div>
        <div className="flex gap-x-3 bg-[#F6F9FC] hover:bg-white hover:shadow-sm transition-all py-3 px-2 cursor-pointer rounded-md">
          <Image src={samsung} height={25} width={25} />
          <p>Redmi</p>
        </div>
      </div>
    </div>
  );
};

export default Brand;
