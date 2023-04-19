import Link from "next/link";
import React from "react";
import Layout from "../../../../components/admin/Layout";

const AddProduct = () => {
  return (
    <Layout>
      <div className="min-h-screen flex  justify-center bg-[#F7FAFC]">
        <div className="px-5 py-6 lg:px-6 lg:py-8 w-full md:w-8/12 lg:w-6/12 xl:w-4/12 ">
          <div className="mb-6 text-center">
            <h3 className="text-3xl inline-flex items-center">Add Product</h3>
          </div>

          <div className="rounded  p-6 lg:p-10 shadow-md bg-white">
            <form>
              <label className="block">
                Product Name
                <input
                  type="text"
                  class="appearance-none border rounded px-4 py-3 mt-1 block w-full outline-none focus:border-blue"
                  placeholder="Product name"
                />
              </label>
              <label className="block">
                Price
                <input
                  type="number"
                  class="appearance-none border rounded px-4 py-3 mt-1 block w-full outline-none focus:border-blue"
                  placeholder="Price"
                />
              </label>
              <label className="block">
                Image Url
                <input type="file" className="border w-full  mt-1 " />
              </label>

              <label class=" block">Message</label>
              <textarea
                class="appearance-none border rounded px-4 py-3 mt-1 block w-full outline-none focus:border-blue"
                rows="3"
                placeholder="Leave a message"
              ></textarea>

              <div className="mt-6">
                <button
                  type="submit"
                  className="px-4 py-3 bg-blue text-white rounded uppercase focus:outline-none focus:shadow-outline block w-full"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddProduct;
