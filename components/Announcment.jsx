import Image from "next/image";
import React from "react";
import banner1 from "../public/images/banner-1.png";
import banner2 from "../public/images/banner-2.png";

const Announcment = () => {
  return (
    <div>
      <section className="bg-[#F6F9FC] flex justify-center gap-x-4 px-6 md:px-20 py-10">
        <div>
          <Image src={banner1} alt="banner" />
        </div>
        <div>
          <Image src={banner2} alt="banner" />
        </div>
      </section>
    </div>
  );
};

export default Announcment;
