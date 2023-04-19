import React from "react";
import Brand from "./Brand";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import shop1 from "../public/images/shops/shops-1.png";
import shop2 from "../public/images/shops/shops-2.png";
import shop3 from "../public/images/shops/shops-3.png";
import shop4 from "../public/images/shops/shops-4.png";
import shop5 from "../public/images/shops/shops-5.png";
import shop6 from "../public/images/shops/shops-6.png";
import shop7 from "../public/images/shops/shops-7.png";
import shop8 from "../public/images/shops/shops-8.png";
import shop9 from "../public/images/shops/shops-9.png";
import Link from "next/link";

const Phone = () => {
  const shopItems = [
    {
      id: 7,
      cover: shop1,
      name: "Mapple Earphones",
      price: "180",
      discount: "25",
    },
    {
      id: 8,
      cover: shop2,
      name: "Vivo android one",
      price: "120",
      discount: "10",
    },
    {
      id: 9,
      cover: shop3,
      name: "Sony Light",
      price: "20",
      discount: "50 ",
    },
    {
      id: 10,
      cover: shop4,
      name: "Iphone",
      price: "999",
      discount: "10 ",
    },
    {
      id: 11,
      cover: shop5,
      name: "Ceats wireless earphone",
      price: "80",
      discount: "20 ",
    },
    {
      id: 12,
      cover: shop6,
      name: "Redimi Phone",
      price: "400",
      discount: "20 ",
    },
    {
      id: 13,
      cover: shop7,
      name: "Xeats Bluetooth earphones",
      price: "60",
      discount: "5 ",
    },
    {
      id: 14,
      cover: shop8,
      name: "Airpod",
      price: "120",
      discount: "10",
    },
    {
      id: 15,
      cover: shop9,
      name: "Silver Cap",
      price: "5",
      discount: "2",
    },
    {
      id: 16,
      cover: shop5,
      name: "Silver Cap",
      price: "5",
      discount: "2",
    },
    {
      id: 17,
      cover: shop7,
      name: "Xeats Bluetooth earphones",
      price: "5",
      discount: "2",
    },
    {
      id: 18,
      cover: shop1,
      name: "Mapple Earphones",
      price: "5",
      discount: "2",
    },
  ];

  return (
    <div className="bg-[#F6F9FC] flex flex-col  md:flex-row gap-x-5 px-6 md:px-20 pt-10">
      <div className="flex-grow-0 flex-shrink-0 basis-52">
        <Brand />
      </div>
      <div className="">
        <div className="flex items-center justify-between py-2">
          <p className="font-semibold text-xl text-center">Mobile Phones </p>
          <Link href="/fashion" className="font-normal  text-red">
            View All
          </Link>
        </div>
        <div className="flex justify-center md:justify-between  flex-wrap gap-3">
          {shopItems.slice(0, 8).map((item, index) => {
            return (
              <div key={index} className="shadow-lg p-5 rounded-md bg-white ">
                <p className="bg-primary rounded-md px-2 text-white inline-block">
                  {item.discount}% Off
                </p>
                <Image
                  src={item.cover}
                  height={200}
                  width={200}
                  className="mx-auto"
                />
                <div className="flex flex-col gap-2">
                  <p>{item.name}</p>

                  <div className="flex gap-x-1 text-[#FFCD4E]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <div className="flex justify-between">
                    <p className="text-primary font-semibold">
                      ${item.price}.00
                    </p>
                    <button className="border rounded px-2 text-primary hover:bg-primary hover:text-white">
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Phone;
