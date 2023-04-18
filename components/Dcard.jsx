import Image from "next/image";
import React from "react";

const Dcard = ({ discount }) => {
  return (
    <div className="bg-white rounded-lg ">
      <Image src={discount.cover} height={200} width={200} />
      <p className="pl-2">{discount.name}</p>
      <p className="pl-2 text-primary">{discount.price}</p>
    </div>
  );
};

export default Dcard;
