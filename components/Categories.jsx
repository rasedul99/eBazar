import React from "react";
import tcone from "../public/images/top/category-1.png";
import tcTwo from "../public/images/top/category-2.png";
import tcThree from "../public/images/top/category-3.png";
import Image from "next/image";
import Slider from "react-slick";
import { BiBorderAll, BiChevronDown } from "react-icons/bi";

const Categories = () => {
  const Tdata = [
    {
      cover: tcone,
      para: "headphone",
      desc: "3k orders this week",
    },
    {
      cover: tcTwo,
      para: "watch",
      desc: "4k orders this week",
    },
    {
      cover: tcThree,
      para: "sunglass",
      desc: "6k orders this week",
    },
    {
      cover: tcTwo,
      para: "watch",
      desc: "4k orders this week",
    },
    {
      cover: tcone,
      para: "sunglass",
      desc: "6k orders this week",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=" bg-[#F6F9FC] px-6 md:px-20 pt-10 ">
      <div className="flex items-center gap-x-3 py-3">
        <BiBorderAll className="text-primary" size={25} />
        <p className="font-semibold text-lg">Top Categories</p>
      </div>

      {/* slider  */}

      <Slider {...settings}>
        {Tdata.map((data, index) => {
          return (
            <div key={index} className="relative bg-white p-3">
              <div className=" absolute top-4 mx-3 w-full">
                <div className="flex justify-between mt-1">
                  <p className="bg-[#0f3460] rounded-md px-2  text-white">
                    {data.para}
                  </p>
                  <p className="mr-12 bg-[#F0F8FF] rounded-md px-2">
                    {data.desc}
                  </p>
                </div>
              </div>
              <Image
                src={data.cover}
                height={1000}
                width={1000}
                className="rounded-md"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Categories;
