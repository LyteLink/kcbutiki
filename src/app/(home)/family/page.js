/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/home/Footer";
import React from "react";

const Family = () => {
  const familyCategories = ["PTA", "BOG", "Staff", "KICOBA", "Student Leaders"];

  return (
    <>
      <div className="pt-36 pb-12 max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Butiki Family</h1>
          <p className="text-muted mt-3">The Hill is made up of families</p>
          <div className="mt-4 border-b flex-center-center overflow-auto hide-scrollbar gap-x-2">
            {familyCategories.map((category, i) => (
              <div
                key={i}
                className={`px-4 py-2 border border-green-600 rounded-t-md cursor-pointer ${
                  i === 0 && "bg-green-600 text-white"
                }`}
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.apply(null, { length: 15 }).map((_, i) => (
            <div className="rounded-lg border" key={i}>
              <img
                src="/images/default.png"
                alt=""
                className="w-full object-cover h-[250px]"
              />
              <div className="p-4 text-center">
                <h1 className="text-2xl font-bold text-green-500">John Doe</h1>
                <h1 className="text-xl">Chairman PTA</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-10 bg-primary">
        <Footer />
      </div>
    </>
  );
};

export default Family;
