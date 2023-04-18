import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import sliderone from "../public/images/SlideCard/slide-1.png";
import slidertwo from "../public/images/SlideCard/slide-2.png";
import sliderthree from "../public/images/SlideCard/slide-3.png";
import sliderfour from "../public/images/SlideCard/slide-4.png";
const Hero = () => {
  const silderData = [
    {
      id: 1,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: sliderone,
    },
    {
      id: 2,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: slidertwo,
    },
    {
      id: 3,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: sliderthree,
    },
    {
      id: 4,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: sliderfour,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="max-w-7xl mx-auto">
      <Slider {...settings}>
        {silderData?.map((value, index) => {
          return (
            <>
              <div
                className="flex justify-between items-center   px-4"
                key={index}
              >
                <div className="flex flex-col justify-center py-3 gap-y-4">
                  <h1 className="font-bold text-4xl">{value.title}</h1>
                  <p className="max-w-md">{value.desc}</p>
                  <button className="bg-primary text-white rounded-md p-2 w-40">
                    Visit Collections
                  </button>
                </div>
                <div className="flex items-center">
                  <Image src={value.cover} width={300} height={300} priority />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default Hero;
