import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import Layout from "../../../../components/admin/Layout";
import Link from "next/link";

const Prodcuts = () => {
  const [products, setProducts] = useState();
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  useEffect(() => {
    fetch("https://rasedul99.github.io/repliq_fake_data/fashion.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.fashion));
  }, [inputText]);
  return (
    <Layout>
      <div className="container justify-center mx-auto flex flex-col p-4  bg-white overflow-y-auto">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle ">
            <div className="p-4 flex justify-between items-center">
              <p className="text-xl">Product List</p>
              <div>
                {" "}
                <label for="table-search" className="sr-only">
                  Search
                </label>
                <div className="relative mt-1">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <RiSearchLine />
                  </div>
                  <input
                    type="text"
                    id="table-search"
                    className=" border border-gray text-gray text-sm rounded-lg focus:ring-blue-500 focus:border-blue block w-80 pl-10 p-2.5  "
                    placeholder="Search for Brand"
                    onChange={handleChange}
                    value={inputText}
                  />
                </div>
              </div>
              <Link
                href="/admin/products/addproduct"
                className="bg-purple text-white px-4 py-2 rounded-md"
              >
                Add Product
              </Link>
            </div>

            <div className="overflow-hidden">
              <table className="min-w-full table-fixed  divide-y divide-purple ">
                <thead>
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-search-all"
                          type="checkbox"
                          className="w-4 h-4 text-blue bg-gray rounded border-gray"
                        />
                        <label for="checkbox-search-all" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-sm font-semibold tracking-wider text-left  uppercase"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-sm font-semibold tracking-wider text-left  uppercase"
                    >
                      Brand
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-sm font-semibold tracking-wider text-left  uppercase"
                    >
                      AVAILABILITY
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-sm font-semibold tracking-wider text-left  uppercase"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-sm font-semibold tracking-wider text-left  uppercase"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-sm font-semibold tracking-wider text-left  uppercase"
                    >
                      Stock
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-sm font-semibold tracking-wider text-left  uppercase "
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-sm font-semibold tracking-wider text-left  uppercase "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray">
                  {products
                    ?.filter((product) =>
                      product.brand.toLowerCase().includes(inputText)
                    )
                    .map((product, index) => {
                      return (
                        <tr key={index} className="hover:bg-[#D7D7D7] ">
                          <td className="p-4 w-4">
                            <div className="flex items-center">
                              <input
                                id="checkbox-search-1"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray rounded border-gray focus:ring-blue "
                              />
                              <label
                                for="checkbox-search-1"
                                className="sr-only"
                              >
                                checkbox
                              </label>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap ">
                            {product.name}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap ">
                            {product.brand}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap ">
                            Available
                          </td>
                          <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap ">
                            {product.category}
                          </td>
                          <td className="py-4 px-6  whitespace-nowrap">
                            <img
                              src={product.img}
                              className="w-10 h-10 rounded-full"
                            />
                          </td>
                          <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap ">
                            {Math.floor(Math.random() * 100) + 1}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap ">
                            ${product.price}
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

export default Prodcuts;
