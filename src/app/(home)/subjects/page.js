/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/home/Footer";
import React from "react";

const Subjects = () => {
  return (
    <>
      <div className="pt-36 pb-10 max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Subjects</h1>
          <p className="text-muted mt-3">
            There are 15+ Subjects in O'level and 12+ in A' <br />
            This give them a chance to choose among the different subjects that
            enables them to develop various skills to enable the survive in the
            diverse changing world
          </p>
          <h1 className="mt-4 pb-3 text-2xl border-b">
            These are some of the subjects offered
          </h1>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.apply(null, { length: 15 }).map((_, i) => (
            <div className="p-4 shadow-lg shadow-slate-200 rounded-lg" key={i}>
              <h1>Mathematics</h1>
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

export default Subjects;
