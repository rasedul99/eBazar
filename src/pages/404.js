import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="max-w-7xl my-10 mx-auto flex flex-col gap-y-2 justify-center items-center">
        <h1 className="text-xl">404 - Page Not Found</h1>
        <p>Sorry,Dear there is nothing to see here</p>
        <p className="text-center">
          Use the search box or the links below to explore our amazing
          application
        </p>
        <input
          type="search"
          className="w-3/5 py-2 px-4 border rounded-md"
          placeholder="Just a dummy search box..."
        />
        <div className="mt-5">
          <Link
            href="/"
            className="m-2 text-blue underline hover:text-[#ff0000]"
          >
            Homepage
          </Link>
          <Link
            href="/admin"
            className="m-2 text-blue underline hover:text-[#ff0000]"
          >
            Admin
          </Link>
          <Link
            href="/"
            className="m-2 text-blue underline hover:text-[#ff0000]"
          >
            Contact US
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
