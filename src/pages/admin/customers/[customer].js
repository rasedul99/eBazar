import { useRouter } from "next/router";
import React from "react";
import { data } from "../../../../adminData/data";
import Layout from "../../../../components/admin/Layout";

const CutomerDetails = () => {
  const router = useRouter();
  const { customer } = router.query;
  const customerPerson = data.find(
    (cus) => customer == (cus.name.first + cus.name.last).toLowerCase()
  );
  console.log(customerPerson);
  return (
    <Layout>
      <div className="min-h-screen flex  justify-center bg-[#F7FAFC]">
        <div className="px-5 py-6 lg:px-6 lg:py-8 w-full md:w-8/12 lg:w-6/12 xl:w-4/12 ">
          <div className="mb-6 text-center">
            <h3 className="text-3xl inline-flex items-center">
              {" "}
              {customerPerson?.name.first + customerPerson?.name.last} Details
            </h3>
          </div>

          <div className="rounded  p-6 lg:p-10 shadow-md bg-white">
            <div className="flex flex-col gap-y-2">
              <p> ID : {customerPerson?.id}</p>
              <p>
                Name : {customerPerson?.name.first + customerPerson?.name.last}
              </p>
              <p>Email : {customerPerson?.name.first}@gmail.com</p>
              <p> Status : {customerPerson?.status}</p>
              <p> Total Cost : ${customerPerson?.total}</p>
              <p> Payment Method : {customerPerson?.method}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CutomerDetails;
