import React from "react";
import Dcard from "./Dcard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import d1 from "../public/images/discount/discount-1.png";
import d2 from "../public/images/discount/discount-2.png";
import d3 from "../public/images/discount/discount-3.png";
import d4 from "../public/images/discount/discount-4.png";
import d5 from "../public/images/discount/discount-5.png";
import d6 from "../public/images/discount/discount-6.png";
import d7 from "../public/images/discount/discount-7.png";
import d8 from "../public/images/discount/discount-8.png";
import d9 from "../public/images/discount/discount-9.png";

const Discount = () => {
  const discountData = [
    {
      cover: d1,
      name: "BenuX 2022",
      price: "$250",
    },
    {
      cover: d2,
      name: "Sony TV 1080p",
      price: "$450",
    },
    {
      cover: d3,
      name: "Sony PS4",
      price: "$50",
    },
    {
      cover: d4,
      name: "Setgearr 2022",
      price: "$100",
    },
    {
      cover: d5,
      name: "Tony BGB",
      price: "$20",
    },
    {
      cover: d6,
      name: "RG products",
      price: "$200",
    },
    {
      cover: d7,
      name: "Ranasonic 2022",
      price: "$300",
    },
    {
      cover: d8,
      name: "Pune HD",
      price: "$30",
    },
    {
      cover: d9,
      name: "Sony CCTV",
      price: "$80",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
    <section className="bg-[#F6F9FC] px-8 md:px-20 pt-10">
      <div className="flex gap-x-3 items-center py-2">
        <img src="https://img.icons8.com/windows/32/fa314a/gift.png" />
        <h2 className="font-semibold text-lg">Big Discounts</h2>
      </div>

      <Slider {...settings}>
        {discountData.map((discount) => (
          <Dcard discount={discount} />
        ))}
      </Slider>
    </section>
  );
};

export default Discount;
