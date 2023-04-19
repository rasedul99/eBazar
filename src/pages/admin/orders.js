import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../../../adminData/data.js";
import Layout from "../../../components/admin/Layout.jsx";

const orders = () => {
  return (
    <Layout>
      <div className="bg-[#D7D7D7] min-h-screen">
        <div className="flex justify-between px-4 pt-4">
          <h2>Orders</h2>
          <h2>Welcome Back</h2>
        </div>
        <div className="p-4">
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
              <span>Order</span>
              <span className="sm:text-left text-right">Status</span>
              <span className="hidden md:grid">Last Order</span>
              <span className="hidden sm:grid">Method</span>
            </div>
            <ul>
              {data.map((order, id) => (
                <li
                  key={id}
                  className="hover:bg-[#D7D7D7] rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
                >
                  <div className="flex">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <FaShoppingBag />
                    </div>
                    <div className="pl-4">
                      <p className=" font-bold">
                        ${order.total.toLocaleString()}
                      </p>
                      <p className=" text-sm">{order.name.first}</p>
                    </div>
                  </div>
                  <p className=" sm:text-left text-right text-white">
                    <span
                      className={
                        order.status == "Processing"
                          ? "bg-yellow p-2 rounded-lg"
                          : order.status == "Completed"
                          ? "bg-green p-2 rounded-lg"
                          : "bg-orange p-2 rounded-lg"
                      }
                    >
                      {order.status}
                    </span>
                  </p>
                  <p className="hidden md:flex">{order.date}</p>
                  <div className="sm:flex hidden justify-between items-center">
                    <p>{order.method}</p>
                    <BsThreeDotsVertical />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default orders;
