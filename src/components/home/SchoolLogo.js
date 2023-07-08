/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const SchoolLogo = () => {
  return (
    <div className="flex flex-wrap items-center max-w-7xl mx-auto px-4 gap-10">
      <div className="flex-1 basis-[25rem]">
        <div className="justify-content-center">
          <img
            src={"/images/logo.jpg"}
            alt="KCB"
            className="rounded w-96 mx-auto"
          />
        </div>
      </div>
      <div className="flex-1 basis-[25rem]">
        <div className="message-box">
          <h2 className="text-3xl md:text-5xl mb-4">The School Logo</h2>
          <p className="text-muted">
            The blue symbolizes the River Nile (locally known as Kiyiira/Kiira)
            from which the school derives its name. The hippo is a symbol of
            strength, while the hand hoe and coffee represent agriculture, which
            was then the mainstay of Busoga region whose Lukiikok established
            the school in 1959.
          </p>
          <p className="text-muted mt-4">
            The crested crane is the country's emblem, and the book signifies
            the quest for knowledge. Its background is a shield denoting the
            strength and protection of Busoga Kingdom.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolLogo;
