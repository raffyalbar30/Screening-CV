"use client";

import { useState, useEffect } from "react";
import React from 'react';
import { useRouter } from 'next/router';
import { usePathname, useSearchParams } from 'next/navigation';
import { FecthingQuery } from "@/Services/CRUD";


export default function Index() {
  const [isData, setIsData] = useState([]);
  const Searchparams = useSearchParams();
  const Pathname = usePathname();
  const { replace } = useRouter;


  const { data } = FecthingQuery();

  
  

  // useEffect(() => {
  //   if (Response?.data) {
  //     setIsData(Response.data);
  //   }
  // }, [Response]);
   
  // console.log(isData);
  return (
    <>
      <div className="flex justify-center mt-24">
        <div className="relative w-1/2 overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Avatar</th>
                <th scope="col" className="px-6 py-3">First Name</th>
                <th scope="col" className="px-6 py-3">Last Name</th>
                <th scope="col" className="px-6 py-3">Email</th>
              </tr>
            </thead>
            <tbody>
              {isData?.map((item) => (
                <tr key={item.id} className="text-slate-500 bg-slate-50">
                  <td>
                     <img src={item.avatar} className="rounded-full w-[50px]" />
                  </td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>

           <button> + </button>
        </div>
      </div>
    </>
  );
}
