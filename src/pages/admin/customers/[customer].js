import { useRouter } from "next/router";
import React from "react";
import { data } from "../../../../adminData/data";

const CutomerDetails = () => {
  const router = useRouter();
  const { customer } = router.query;
  const customerPerson = data.find(
    (cus) => customer == (cus.name.first + cus.name.last).toLowerCase()
  );
  console.log(customerPerson);
  return (
    <div className="bg-[#D3D3D3] min-h-screen">
      <p className="text-center text-2xl py-3">
        {customerPerson?.name.first + customerPerson?.name.last} Details
      </p>
      <div className="flex  justify-center">
        <div className="flex flex-col gap-y-3 my-5 bg-white px-4 shadow-lg rounded-md py-5 max-w-sm ">
          <p> ID : {customerPerson?.id}</p>
          <p>Name : {customerPerson?.name.first + customerPerson?.name.last}</p>
          <p>Email :{customerPerson?.name.first}@gmail.com</p>
          <p> Status : {customerPerson?.status}</p>
          <p> Total Cost : {customerPerson?.total}</p>
          <p> Payment Method :{customerPerson?.method}</p>
        </div>
      </div>
    </div>
  );
};

export default CutomerDetails;
