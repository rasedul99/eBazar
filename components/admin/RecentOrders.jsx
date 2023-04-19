import React from "react";
import { data } from "../../adminData/data.js";

import { AiOutlineShopping } from "react-icons/ai";

const RecentOrders = () => {
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1>Recent Orders</h1>
      <ul>
        {data.map((order, index) => (
          <li
            key={index}
            className=" my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="p-3">
              <AiOutlineShopping className="text-purple" size={20} />
            </div>
            <div className="pl-4">
              <p className="text-gray-800 font-bold">${order.total}</p>
              <p className="text-gray-400 text-sm">{order.name.first}</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">
              {order.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
