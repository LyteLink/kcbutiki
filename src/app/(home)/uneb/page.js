/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/home/Footer";
import React from "react";
import { BsPeople } from "react-icons/bs";

const Uneb = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-10">
        <h1 className="text-center text-4xl md:text-5xl my-4 uppercase">
          uneb 2022 results
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* O'level */}
          <div>
            <h1 className="text-center text-3xl md:text-4xl mt-4">O'Level</h1>
            <div className="p-4 rounded-lg flex-center-center bg-green-600 text-white mt-4">
              <div>
                <BsPeople className="text-5xl md:text-7xl mx-auto" />
                <h1 className="text-xl text-center mt-2">Total</h1>
                <h1 className="text-center mt-3 text-4xl md:text-6xl font-bold">
                  178
                </h1>
              </div>
            </div>
            {/* Grades */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="shadow border p-4 rounded-lg flex-center-center">
                <div>
                  <BsPeople className="text-5xl md:text-7xl mx-auto" />
                  <h1 className="text-xl text-center mt-2">1st Grade</h1>
                  <h1 className="text-center text-green-600 mt-3 text-4xl md:text-6xl font-bold">
                    234
                  </h1>
                </div>
              </div>
              <div className="shadow border p-4 rounded-lg flex-center-center">
                <div>
                  <BsPeople className="text-5xl md:text-7xl mx-auto" />
                  <h1 className="text-xl text-center mt-2">2nd Grade</h1>
                  <h1 className="text-center text-green-600 mt-3 text-4xl md:text-6xl font-bold">
                    123
                  </h1>
                </div>
              </div>
            </div>
            {/* Best students */}
            <div className="mt-5">
              <h1 className="text-2xl my-2">Best in O'level</h1>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg border">
                  <img
                    src="/images/default.png"
                    alt=""
                    className="w-full object-cover h-[250px]"
                  />
                  <div className="p-4 text-center">
                    <h1 className="text-xl">John Doe</h1>
                    <h1 className="text-3xl font-bold text-green-500">8 AGG</h1>
                  </div>
                </div>
                <div className="rounded-lg border">
                  <img
                    src="/images/default.png"
                    alt=""
                    className="w-full object-cover h-[250px]"
                  />
                  <div className="p-4 text-center">
                    <h1 className="text-xl">Jane Doe</h1>
                    <h1 className="text-3xl font-bold text-green-500">9 AGG</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* A'level */}
          <div>
            <h1 className="text-center text-3xl md:text-4xl mt-4">A'Level</h1>
            <div className="p-4 rounded-lg flex-center-center bg-green-600 text-white mt-4">
              <div>
                <BsPeople className="text-5xl md:text-7xl mx-auto" />
                <h1 className="text-xl text-center mt-2">Total</h1>
                <h1 className="text-center mt-3 text-4xl md:text-6xl font-bold">
                  178
                </h1>
              </div>
            </div>
            {/* Grades */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="shadow border p-4 rounded-lg flex-center-center">
                <div>
                  <BsPeople className="text-5xl md:text-7xl mx-auto" />
                  <h1 className="text-xl text-center mt-2">
                    Three Principal pass
                  </h1>
                  <h1 className="text-center text-green-600 mt-3 text-4xl md:text-6xl font-bold">
                    123
                  </h1>
                </div>
              </div>
              <div className="shadow border p-4 rounded-lg flex-center-center">
                <div>
                  <BsPeople className="text-5xl md:text-7xl mx-auto" />
                  <h1 className="text-xl text-center mt-2">
                    Two Principal pass
                  </h1>
                  <h1 className="text-center text-green-600 mt-3 text-4xl md:text-6xl font-bold">
                    45
                  </h1>
                </div>
              </div>
            </div>
            {/* Best students */}
            <div className="mt-5">
              <h1 className="text-2xl my-2">Best in A'level</h1>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg border">
                  <img
                    src="/images/default.png"
                    alt=""
                    className="w-full object-cover h-[250px]"
                  />
                  <div className="p-4 text-center">
                    <h1 className="text-xl">John Doe</h1>
                    <h1 className="text-3xl font-bold text-green-500">
                      20 points
                    </h1>
                  </div>
                </div>
                <div className="rounded-lg border">
                  <img
                    src="/images/default.png"
                    alt=""
                    className="w-full object-cover h-[250px]"
                  />
                  <div className="p-4 text-center">
                    <h1 className="text-xl">Jane Doe</h1>
                    <h1 className="text-3xl font-bold text-green-500">
                      19 points
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-2xl my-2 font-semibold text-center">
            Word from the examination department
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center mt-4">
            <div className="md:col-span-1">
              <img
                src="/images/exam1.jpg"
                alt=""
                className="h-[250px] md:h-[300px] rounded-lg shadow-md"
              />
            </div>
            <div className="md:col-span-2">
              <div className="p-4 border rounded-lg border-green-600">
                <p className="text-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
                  ab. Et, itaque! Dicta ab dignissimos cupiditate. Unde minima
                  recusandae, cumque nisi enim est nostrum laborum saepe iure
                  repellat porro quam. Reprehenderit, dolorum amet soluta
                  dignissimos adipisci, perspiciatis, quo minima veritatis
                  deleniti sequi iusto reiciendis! Obcaecati minus repudiandae
                  doloremque nulla accusamus nesciunt, minima rerum pariatur
                  qui, quidem, porro ad! Deleniti ad, alias accusamus possimus,
                  ea ullam magni.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 bg-primary">
        <Footer />
      </div>
    </>
  );
};

export default Uneb;
