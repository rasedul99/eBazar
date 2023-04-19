import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete, AiOutlineShopping } from "react-icons/ai";
import { data } from "../../../adminData/data.js";
import Layout from "../../../components/admin/Layout.jsx";

const orders = () => {
  return (
    <Layout>
      <div className="container justify-center mx-auto flex flex-col p-4  bg-white overflow-y-auto">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle ">
            <div className="p-4 ">
              <p className="text-xl">Order List</p>
            </div>

            <div className="overflow-hidden">
              <table className="min-w-full table-fixed  divide-y divide-purple ">
                <thead>
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <AiOutlineShopping />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-sm font-semibold tracking-wider text-left  uppercase"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-sm font-semibold tracking-wider text-left  uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-sm font-semibold tracking-wider text-left  uppercase"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-sm font-semibold tracking-wider text-left  uppercase"
                    >
                      Method
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-sm font-semibold tracking-wider text-left  uppercase"
                    >
                      Status
                    </th>

                    <th
                      scope="col"
                      className="py-3 px-6 text-sm font-semibold tracking-wider text-left  uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray">
                  {data?.map((order, index) => {
                    return (
                      <tr key={index} className="hover:bg-[#D7D7D7]">
                        <td className="p-4 w-4">
                          <div className="flex items-center">
                            <AiOutlineShopping />
                          </div>
                        </td>
                        <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap ">
                          ${order.total.toLocaleString()}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap ">
                          {order.name.first}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap ">
                          <p className="hidden md:flex">{order.date}</p>
                        </td>
                        <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap ">
                          <p>{order.method}</p>
                        </td>
                        <td
                          className={`py-4 px-6 text-sm font-medium  whitespace-nowrap ${
                            order.status == "Processing"
                              ? "text-yellow"
                              : order.status == "Completed"
                              ? "text-green"
                              : "text-orange"
                          }`}
                        >
                          {order.status}
                        </td>

                        <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap flex gap-x-2">
                          <BiEdit size={20} />
                          <AiOutlineDelete size={20} className="text-red" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default orders;
