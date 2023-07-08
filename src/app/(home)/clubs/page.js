/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/home/Footer";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Clubs = () => {
  return (
    <>
      <div className="pt-36 pb-12 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Clubs and Societies</h1>
          <p className="text-muted mt-3">
            The college has a number of clubs and societies which enables the
            students to develop their aspects of the real world. This gives the
            students a chance to participate in various activities otside class
            work.
          </p>
          <h1 className="mt-4 pb-3 text-2xl border-b">
            These are some of the clubs at Butiki
          </h1>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.apply(null, { length: 10 }).map((_, i) => (
            <div
              className="p-4 shadow-lg shadow-slate-200 rounded-lg border group"
              key={i}
            >
              <div className="flex-align-center gap-3">
                <div className="flex-shrink-0">
                  <img
                    src="/images/su.png"
                    alt=""
                    className="w-20 h-20 mx-auto rounded-lg"
                  />
                </div>
                <Link
                  href="/clubs/123"
                  className="text-2xl font-semibold group-hover:text-green-600 transition-a"
                >
                  Computer Science Club
                </Link>
              </div>
              <p className="text-muted mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis nemo culpa cumque esse ea reiciendis magnam accusamus
                sit, placeat quod ratione perferendis ducimus fugit harum ex
                sunt modi labore amet!
              </p>
              <Link
                href="clubs/123"
                className="mt-3 flex-align-center justify-end gap-x-2 text-green-600"
              >
                <span>Read More</span>
                <div className="flex-shrink-0">
                  <FiArrowRight />
                </div>
              </Link>
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

export default Clubs;
