import React from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../../../../adminData/data.js";
import Layout from "../../../../components/admin/Layout.jsx";
import Link from "next/link.js";

const customers = () => {
  return (
    <Layout>
      <div className="bg-[#D7D7D7] min-h-screen">
        <div className="flex justify-between p-4">
          <h2>Customers</h2>
          <h2>Welcome Back</h2>
        </div>
        <div className="p-4">
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
              <span>Name</span>
              <span className="sm:text-left text-right">Email</span>
              <span className="hidden md:grid">Last Order</span>
              <span className="hidden sm:grid">Method</span>
            </div>
            <ul>
              {data.map((order, id) => (
                <Link
                  href={`/admin/customers/${(
                    order.name.first + order.name.last
                  ).toLowerCase()}`}
                  key={id}
                  className="hover:bg-[#D7D7D7] rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className=" p-3 rounded-lg">
                      <BsPersonFill />
                    </div>
                    <p className="pl-4">
                      {order.name.first + " " + order.name.last}
                    </p>
                  </div>
                  <p className=" sm:text-left text-right">
                    {order.name.first}@gmail.com
                  </p>
                  <p className="hidden md:flex">{order.date}</p>
                  <div className="sm:flex hidden justify-between items-center">
                    <p>{order.method}</p>
                    <BsThreeDotsVertical />
                  </div>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default customers;
