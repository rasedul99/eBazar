import React from "react";

import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Layout from "../../../components/Layout";
import Link from "next/link";

const Fashion = ({ fashion }) => {
  return (
    <div>
      <Layout>
        <div className="bg-[#F6F9FC] px-8 md:px-20 py-10">
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-3">
            {fashion.map((data, index) => {
              return (
                <Link
                  href={`/fashion/${data.id}`}
                  passHref
                  className="p-5 rounded-md bg-white flex flex-col gap-5"
                  key={index}
                >
                  <p className="bg-primary self-start rounded-md px-2 text-white">
                    {data.discount}% Off
                  </p>

                  <Image
                    src={data.img}
                    height={200}
                    width={200}
                    className="mx-auto"
                  />
                  <p>{data.name}</p>

                  <div className="flex gap-x-1 text-[#FFCD4E]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <div className="flex justify-between">
                    <p className="text-primary font-semibold">
                      ${data.price}.00
                    </p>
                    <button className="border rounded px-2 text-primary hover:bg-primary hover:text-white">
                      +
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    "https://rasedul99.github.io/repliq_fake_data/fashion.json"
  );
  const { fashion } = await res.json();

  return {
    props: { fashion },
  };
}
export default Fashion;
