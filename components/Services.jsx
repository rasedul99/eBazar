import Image from "next/image";
import React from "react";
import { FaTruck, FaShieldAlt, FaHeadset } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

const Services = () => {
  const data = [
    {
      cover: <FaTruck size={30} />,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <MdPayment size={30} />,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <FaShieldAlt size={30} />,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <FaHeadset size={30} />,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];
  return (
    <div className="bg-[#F6F9FC] px-6 md:px-20 py-10">
      <section className="grid  md:grid-cols-4 gap-3">
        {data.map((val, index) => {
          return (
            <div
              className="product bg-white flex flex-col gap-y-3 items-center justify-center  py-4 rounded-md"
              key={index}
            >
              <p className="bg-[#F6F9FC] p-4 rounded-full">{val.cover}</p>
              <h3 className="text-lg font-medium">{val.title}</h3>
              <p className="text-center mx-5 text-slate">{val.decs}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Services;
