/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/home/Footer";
import React from "react";

const Gallery = () => {
  return (
    <>
      <div className="pt-36 pb-12 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">BUTIKI GALLERY</h1>
          <p className="text-muted mt-3">
            Explore our memories at Butiki as we share the happiness and strive
            for success
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3">
          {Array.apply(null, { length: 20 }).map((_, i) => (
            <div
              className="overflow-hidden group cursor-pointer relative"
              key={i}
            >
              <img
                src="/images/students_1.jpg"
                alt=""
                className="w-full object-cover h-[250px] group-hover:scale-125 transition-a"
              />
              <div className="absolute w-full h-full flex-center-center gap-3 bg-primary/50 top-0 left-0 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-a">
                <p className="text-center text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Autem aliquid iste esse, vitae vero vel explicabo illo iure
                  sequi animi.
                </p>
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

export default Gallery;
