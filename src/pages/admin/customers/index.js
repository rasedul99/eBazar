import React from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { data } from "../../../../adminData/data.js";
import Layout from "../../../../components/admin/Layout.jsx";
import Link from "next/link.js";

const customers = () => {
  return (
    <Layout>
      <div className="container justify-center mx-auto flex flex-col p-4  bg-white overflow-y-auto">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle ">
            <div className="p-4 flex justify-between items-center ">
              <p className="text-xl">Customer List</p>
              <button className="bg-purple text-white px-4 py-2 rounded-md">
                Add Customer
              </button>
            </div>

            <div className="overflow-hidden">
              <table className="min-w-full table-fixed  divide-y divide-purple ">
                <thead>
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <BsPersonFill />
                      </div>
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
                      Email
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-sm font-semibold tracking-wider text-left  uppercase"
                    >
                      Last Order
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
                      Details
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
                  {data?.map((order) => {
                    return (
                      <tr className="hover:bg-[#D7D7D7]">
                        <td className="p-4 w-4">
                          <div className="flex items-center">
                            <BsPersonFill />
                          </div>
                        </td>
                        <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap ">
                          {order.name.first + " " + order.name.last}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap ">
                          {order.name.first}@gmail.com
                        </td>
                        <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap ">
                          <p className="hidden md:flex">{order.date}</p>
                        </td>
                        <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap ">
                          <p>{order.method}</p>
                        </td>
                        <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap ">
                          <Link
                            href={`/admin/customers/${(
                              order.name.first + order.name.last
                            ).toLowerCase()}`}
                            className="text-blue  hover:underline"
                          >
                            Details
                          </Link>
                        </td>

                        <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap flex gap-x-2">
                          <BiEdit size={20} />
                          <AiOutlineDelete size={20} />
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

export default customers;
