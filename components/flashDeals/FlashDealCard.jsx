import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import flshone from "../../public/images/flash/flash-1.png";
import flshtwo from "../../public/images/flash/flash-2.png";
import flshthree from "../../public/images/flash/flash-3.png";
import flshfour from "../../public/images/flash/flash-4.png";
import flshfive from "../../public/images/flash/flash-5.png";
import Slider from "react-slick";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const FlashDealCard = () => {
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="absolute top-[40%] left-[-20px] w-[50px] h-[50px] bg-[#0f3460] rounded-full z-10 flex items-center justify-center">
          <BsArrowLeftShort size={35} className="text-white" />
        </button>
      </div>
    );
  };
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="absolute top-[40%] right-[0px] w-[50px] h-[50px] bg-[#0f3460] rounded-full z-10 flex items-center justify-center">
          <BsArrowRightShort size={35} className="text-white" />
        </button>
      </div>
    );
  };
  const flashDeals = [
    {
      id: 1,
      discount: 50,
      cover: flshone,
      name: "Shoes",
      price: 100,
    },
    {
      id: 2,
      discount: 40,
      cover: flshtwo,
      name: "Watch",
      price: 20,
    },
    {
      id: 3,
      discount: 40,
      cover: flshthree,
      name: "Smart Mobile Black",
      price: 200,
    },
    {
      id: 4,
      discount: 40,
      cover: flshfour,
      name: "Smart Watch Black",
      price: 50,
    },
    {
      id: 5,
      discount: 50,
      cover: flshfive,
      name: "Shoes",
      price: 100,
    },
    {
      id: 6,
      discount: 50,
      cover: flshthree,
      name: "Shoes",
      price: 100,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {flashDeals.map((flashDeal) => {
          return (
            <div className="p-5 rounded-md bg-white flex gap-5">
              <p className="bg-primary rounded-md px-2 text-white inline-block">
                {flashDeal.discount}% Off
              </p>

              <Image
                src={flashDeal.cover}
                height={200}
                width={200}
                className="mx-auto"
              />
              <p>{flashDeal.name}</p>

              <div className="flex gap-x-1 text-[#FFCD4E]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="flex justify-between">
                <p className="text-primary font-semibold">
                  ${flashDeal.price}.00
                </p>
                <button className="border rounded px-2 text-primary hover:bg-primary hover:text-white">
                  +
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default FlashDealCard;
