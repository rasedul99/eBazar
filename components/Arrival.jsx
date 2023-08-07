import Image from "next/image";
import React from "react";
import arr1 from "../public/images/arrivals/arrivals1.png";
import arr2 from "../public/images/arrivals/arrivals2.png";
import arr3 from "../public/images/arrivals/arrivals3.png";
import arr4 from "../public/images/arrivals/arrivals4.png";
import arr5 from "../public/images/arrivals/arrivals5.png";
import arr6 from "../public/images/arrivals/arrivals6.png";
import Link from "next/link";

const Arrival = () => {
  const ArrivalData = [
    {
      cover: arr1,
      name: "Sunglass",
      price: "150",
    },
    {
      cover: arr2,
      name: "Makeup",
      price: "250",
    },
    {
      cover: arr3,
      name: "Smart Watch",
      price: "50",
    },
    {
      cover: arr4,
      name: "Lipstick",
      price: "15",
    },
    {
      cover: arr5,
      name: "Green Plant",
      price: "10",
    },
    {
      cover: arr6,
      name: "Bonsai tree",
      price: "400",
    },
  ];

  return (
    <div className="bg-[#F6F9FC] px-6 md:px-20 pt-10 ">
      <div className="flex gap-x-2 items-center py-2">
        <img
          src="https://img.icons8.com/glyph-neue/64/26e07f/new.png"
          height={25}
          width={25}
        />
        <p className="font-semibold text-lg">New Arrivals</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2  bg-white p-3 ">
        {ArrivalData.map((arrival, index) => {
          return (
            <Link href="/fashion" key={index} className="flex flex-col gap-y-1">
              <Image src={arrival.cover} height={200} width={200} />
              <p>{arrival.name}</p>
              <p className="text-primary">${arrival.price}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Arrival;
