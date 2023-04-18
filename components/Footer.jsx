import Link from "next/link";
import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaGooglePlay, FaFacebook } from "react-icons/fa";
import { RiAppStoreLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#0F3460] px-6 md:px-20 text-white">
      <div className="   py-24 ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-2">
          <div>
            <h1 className="text-primary font-extrabold italic text-2xl">
              <Link href="/">eBazar</Link>
            </h1>
            <p className=" my-5 opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              pariatur accusamus
            </p>
            <div className="flex gap-x-2">
              <div className="bg-[#0c2a4d] py-4 px-4 rounded flex items-center gap-x-2">
                <FaGooglePlay size={25} />
                <p>Google Play</p>
              </div>
              <div className="bg-[#0c2a4d] py-4 px-4 rounded flex items-center gap-x-2">
                {" "}
                <RiAppStoreLine size={25} />
                <p>App Store</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-5">About Us</h3>
            <ul>
              <li className="mb-2 opacity-50">Careers</li>
              <li className="mb-2 opacity-50">Our Stores</li>
              <li className="mb-2 opacity-50">Our Cares</li>
              <li className="mb-2 opacity-50">Terms & Conditions</li>
              <li className="mb-2 opacity-50">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5">Customer Care</h3>
            <ul>
              <li className="mb-2 opacity-50">Help Center</li>
              <li className="mb-2 opacity-50">How to Buy</li>
              <li className="mb-2 opacity-50">Track</li>
              <li className="mb-2 opacity-50">TCorporate & Bulk Puchasing</li>
              <li className="mb-2 opacity-50">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5">Contact Us</h3>
            <ul>
              <li className="mb-2 opacity-50">
                Location: Danmonddi 32, Dhaka 1207, Bangladesh
              </li>
              <li className="mb-2 opacity-50">Email: mdrased1015@gmail.com</li>
              <li className="mb-2 opacity-50">Phone: +880 162275 4705</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:justify-between py-5">
        <div>
          <p className="text-xs opacity-70">
            Copyright - 2023, website made by Rasedul Islam. All Rights
            Reserved.
          </p>
        </div>
        <div className="flex flex-row items-center gap-5">
          <p>Follow:</p>
          <div className=" p-2 rounded-full ">
            <FaFacebook size={25} className="text-white " />
          </div>
          <div className=" p-2 rounded-full ">
            <AiOutlineGithub size={25} className="text-white" />
          </div>
          <div className=" p-2 rounded-full ">
            <AiOutlineYoutube size={25} className="text-white" />
          </div>
          <div className=" p-2 rounded-full ">
            <AiOutlineLinkedin size={25} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
