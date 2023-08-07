import Image from "next/image";
import Link from "next/link";
import React from "react";

const Dcard = ({ discount }) => {
  return (
    <Link href="/fashion" className="bg-white rounded-lg ">
      <Image src={discount.cover} height={200} width={200} />
      <p className="pl-2">{discount.name}</p>
      <p className="pl-2 text-primary">{discount.price}</p>
    </Link>
  );
};

export default Dcard;
