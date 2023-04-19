import Link from "next/link";
import React from "react";

const signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7FAFC]">
      <div className="px-5 py-6 lg:px-6 lg:py-8 w-full md:w-8/12 lg:w-6/12 xl:w-4/12 relative">
        <div className="mb-6 text-center">
          <h3 className="text-3xl inline-flex items-center">REPLIO</h3>
          <p>Create your own account in one single step</p>
        </div>

        <div className="rounded  p-6 lg:p-10 shadow-md bg-white">
          <form>
            <label class="block">
              Name
              <input
                type="text"
                class="appearance-none border rounded px-4 py-3 mt-1 block w-full outline-none focus:border-blue"
                placeholder="Enter your first name"
              />
            </label>
            <label className="block">
              Email
              <input
                type="email"
                className="appearance-none border rounded px-4 py-3 mt-1 block w-full outline-none focus:border-blue"
                placeholder="Enter your email"
              />
            </label>
            <label className="block  mt-4">
              Password
              <input
                type="password"
                className="appearance-none border rounded px-4 py-3 mt-1 block w-full outline-none focus:border-blue"
                placeholder="Enter your password"
              />
            </label>
            <label className="block  mt-4">
              Confirm Password
              <input
                type="password"
                className="appearance-none border rounded px-4 py-3 mt-1 block w-full outline-none focus:border-blue"
                placeholder="Enter your password"
              />
            </label>
            <label class="block mt-4">
              <input type="checkbox" class="mr-1 leading-none" />
              <span class="text-sm text-gray">
                I accept terms &amp; conditions
              </span>
            </label>
            <div className="mt-6">
              <button
                type="submit"
                className="px-4 py-3 bg-primary text-white rounded  focus:outline-none focus:shadow-outline block w-full"
              >
                Sign UP
              </button>
            </div>
          </form>
          <div class="mt-6 text-center text-sm">
            <Link
              class="text-gray  underline block md:inline-block"
              href="/signin"
            >
              Return to log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
