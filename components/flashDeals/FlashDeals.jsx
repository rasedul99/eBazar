import React from "react";

import FlashDealCard from "./FlashDealCard";
import { MdOutlineBolt } from "react-icons/md";
import Link from "next/link";

const FlashDeals = () => {
  return (
    <div className="bg-[#F6F9FC]  px-8 md:px-20 pt-10">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-x-2 py-2">
          <MdOutlineBolt className="text-primary" size={20} />
          <p className="font-semibold text-lg">Flash Deals</p>
        </div>
        <Link href="/fashion" className="font-normal  text-red">
          View All
        </Link>
      </div>

      <FlashDealCard />
    </div>
  );
};

export default FlashDeals;
