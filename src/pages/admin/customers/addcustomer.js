import React from "react";
import Layout from "../../../../components/admin/Layout";

const addcustomer = () => {
  return (
    <Layout>
      <div className="min-h-screen flex  justify-center bg-[#F7FAFC]">
        <div className="px-5 py-6 lg:px-6 lg:py-8 w-full md:w-8/12 lg:w-6/12 xl:w-4/12 ">
          <div className="mb-6 text-center">
            <h3 className="text-3xl inline-flex items-center">Add Customer</h3>
          </div>

          <div className="rounded  p-6 lg:p-10 shadow-md bg-white">
            <form>
              <label className="block">
                Name
                <input
                  type="text"
                  class="appearance-none border rounded px-4 py-3 mt-1 block w-full outline-none focus:border-blue"
                  placeholder="Customer name"
                />
              </label>
              <label className="block mt-1">
                Email
                <input
                  type="text"
                  class="appearance-none border rounded px-4 py-3 mt-1 block w-full outline-none focus:border-blue"
                  placeholder="Customer email"
                />
              </label>

              <label class=" block mt-1">Address</label>
              <textarea
                class="appearance-none border rounded px-4 py-3 mt-1 block w-full outline-none focus:border-blue"
                rows="3"
                placeholder="Customer Address"
              ></textarea>

              <div className="mt-6">
                <button
                  type="submit"
                  className="px-4 py-3 bg-blue text-white rounded uppercase focus:outline-none focus:shadow-outline block w-full"
                >
                  Add Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default addcustomer;
