import React from "react";
import Layout from "../../../components/Layout";
import { AiOutlineDelete } from "react-icons/ai";
import { BsArrowLeftCircle } from "react-icons/bs";
import { UseCartContext } from "../../../ctx/cartContext";
import Link from "next/link";

const cart = () => {
  const { cartItems, removeCartItem } = UseCartContext();
  const subtotal = cartItems?.reduce((total, item) => {
    return (
      parseInt(item.quantity) *
        (parseInt(item.price) -
          (parseInt(item.price) / 100) * parseInt(item.discount)) +
      total
    );
  }, 0);
  return (
    <Layout>
      <div className="h-full">
        <div className="py-12">
          <div className="max-w-md mx-auto bg-[#F6F9FC] shadow-lg rounded-lg  md:max-w-5xl">
            <div className="md:flex ">
              <div className="w-full p-4 px-5 py-5">
                {cartItems.length <= 0 ? (
                  <p className="text-center">Your Cart have no items</p>
                ) : (
                  <div>
                    <div className="md:grid md:grid-cols-3 gap-2 ">
                      <div className="col-span-2 p-5">
                        <h1 className="text-xl font-medium ">Shopping Cart</h1>
                        {cartItems.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="flex justify-between items-center mt-6 pt-6"
                            >
                              <div className="flex  items-center">
                                <img
                                  src={item.img}
                                  width="60"
                                  className="rounded-full "
                                />

                                <div className="flex flex-col ml-3">
                                  <span className="md:text-md font-medium">
                                    {item.name}
                                  </span>
                                  <span className="text-xs font-light text-gray-400">
                                    {item.brand}
                                  </span>
                                </div>
                              </div>

                              <div className="flex justify-center items-center">
                                <div className="pr-8 flex ">
                                  <span className="font-semibold">-</span>
                                  <input
                                    type="text"
                                    className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                                    value={item.quantity}
                                  />
                                  <span className="font-semibold">+</span>
                                </div>

                                <div className="pr-8 ">
                                  <span className="text-xs font-medium">
                                    $
                                    {parseInt(item.price) -
                                      (parseInt(item.price) / 100) *
                                        parseInt(item.discount)}
                                  </span>
                                </div>

                                <AiOutlineDelete
                                  onClick={() => removeCartItem(item)}
                                />
                              </div>
                            </div>
                          );
                        })}

                        <div className="flex justify-between items-center mt-6 pt-6 border-t">
                          <div className="flex items-center gap-x-2">
                            <BsArrowLeftCircle className="text-primary" />
                            <Link
                              href="/fashion"
                              className="text-md  font-medium text-primary"
                            >
                              Continue Shopping
                            </Link>
                          </div>

                          <div className="flex justify-center items-end">
                            <span className="text-sm font-medium  ">
                              Subtotal :
                            </span>
                            <span className="text-sm font-medium  ">
                              ${subtotal}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className=" p-5 bg-[#1F2937] text-white rounded overflow-visible">
                        <span className="text-xl font-medium  block pb-3">
                          Card Details
                        </span>

                        <span className="text-xs">Card Type</span>

                        <div className="overflow-visible flex justify-between items-center mt-2">
                          <div className="rounded w-52 h-28  py-2 px-4 ">
                            <span className="italic text-lg font-medium  underline">
                              VISA
                            </span>

                            <div className="flex justify-between items-center pt-4 ">
                              <span className="text-xs  font-medium">****</span>
                              <span className="text-xs  font-medium">****</span>
                              <span className="text-xs  font-medium">****</span>
                              <span className="text-xs  font-medium">****</span>
                            </div>

                            <div className="flex justify-between items-center mt-3">
                              <span className="text-xs  ">Rasedul</span>
                              <span className="text-xs  ">12/18</span>
                            </div>
                          </div>

                          <div className="flex justify-center  items-center flex-col">
                            <img
                              src="https://img.icons8.com/color/96/000000/mastercard-logo.png"
                              width="40"
                              className="relative right-5"
                            />
                            <span className="text-xs font-medium  bottom-2 relative right-5">
                              mastercard.
                            </span>
                          </div>
                        </div>

                        <div className="flex justify-center flex-col pt-3">
                          <label className="text-xs  ">Name on Card</label>
                          <input
                            type="text"
                            className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                            placeholder="Rasedul Islam"
                          />
                        </div>

                        <div className="flex justify-center flex-col pt-3">
                          <label className="text-xs  ">Card Number</label>
                          <input
                            type="text"
                            className="focus:outline-none w-full h-6    text-sm border-b  py-4"
                            placeholder="****     ****      ****      ****"
                          />
                        </div>

                        <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
                          <div className="col-span-2 ">
                            <label className="text-xs text-gray-400">
                              Expiration Date
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                              <input
                                type="text"
                                className="focus:outline-none w-full h-6 bg-gray-800 text-white  text-sm border-b  py-4"
                                placeholder="mm"
                              />
                              <input
                                type="text"
                                className="focus:outline-none w-full h-6 bg-gray-800 text-white  text-sm border-b  py-4"
                                placeholder="yyyy"
                              />
                            </div>
                          </div>

                          <div className="">
                            <label className="text-xs text-gray-400">CVV</label>
                            <input
                              type="text"
                              className="focus:outline-none w-full h-6  text-white placeholder-gray-300 text-sm border-b  py-4"
                              placeholder="XXX"
                            />
                          </div>
                        </div>

                        <button className="h-12 w-full bg-primary rounded focus:outline-none text-white  ">
                          Check Out
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default cart;
