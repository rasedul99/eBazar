import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import Layout from "../../../../components/admin/Layout";

const Prodcuts = () => {
  const [products, setProducts] = useState();
  console.log(products);
  useEffect(() => {
    fetch("https://rasedul99.github.io/repliq_fake_data/fashion.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.fashion));
  }, []);
  return (
    <Layout>
      <div class="container justify-center mx-auto flex flex-col p-4  bg-white overflow-y-auto">
        <div class="overflow-x-auto shadow-md sm:rounded-lg">
          <div class="inline-block min-w-full align-middle ">
            <div class="p-4 flex justify-between">
              <div>
                {" "}
                <label for="table-search" class="sr-only">
                  Search
                </label>
                <div class="relative mt-1">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <RiSearchLine />
                  </div>
                  <input
                    type="text"
                    id="table-search"
                    class=" border border-gray text-gray text-sm rounded-lg focus:ring-blue-500 focus:border-blue block w-80 pl-10 p-2.5  "
                    placeholder="Search for items"
                  />
                </div>
              </div>
              <button className="bg-purple text-white px-2 py-3 rounded-md">
                Add Product
              </button>
            </div>

            <div class="overflow-hidden">
              <table class="min-w-full table-fixed  divide-y divide-purple ">
                <thead>
                  <tr>
                    <th scope="col" class="p-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-search-all"
                          type="checkbox"
                          class="w-4 h-4 text-blue bg-gray rounded border-gray"
                        />
                        <label for="checkbox-search-all" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase"
                    >
                      AVAILABILITY
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase"
                    >
                      Stock
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase "
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray">
                  {products?.map((product) => {
                    return (
                      <tr class="hover:bg-[#D7D7D7]">
                        <td class="p-4 w-4">
                          <div class="flex items-center">
                            <input
                              id="checkbox-search-1"
                              type="checkbox"
                              class="w-4 h-4 text-blue-600 bg-gray rounded border-gray focus:ring-blue "
                            />
                            <label for="checkbox-search-1" class="sr-only">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td class="py-4 px-6 text-sm font-medium  whitespace-nowrap ">
                          {product.name}
                        </td>
                        <td class="py-4 px-6 text-sm font-medium  whitespace-nowrap ">
                          Available
                        </td>
                        <td class="py-4 px-6 text-sm font-medium  whitespace-nowrap ">
                          {product.category}
                        </td>
                        <td class="py-4 px-6  whitespace-nowrap">
                          <img
                            src={product.img}
                            className="w-10 h-10 rounded-full"
                          />
                        </td>
                        <td class="py-4 px-6 text-sm font-medium  whitespace-nowrap ">
                          {Math.floor(Math.random() * 100) + 1}
                        </td>
                        <td class="py-4 px-6 text-sm font-medium  whitespace-nowrap ">
                          ${product.price}
                        </td>
                        <td class="py-4 px-6 text-sm font-medium  whitespace-nowrap">
                          <a href="#" class="text-blue  hover:underline">
                            Edit
                          </a>
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
