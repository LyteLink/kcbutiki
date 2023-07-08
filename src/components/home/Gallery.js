"use client";

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";
import LinearGradient from "./LinearGradient";
const rowOne = [
  "/images/tank.jpg",
  "/images/timeline_bg.jpg",
  "/images/staff.jpg",
  "/images/staff_2.jpg",
];
const rowTwo = [
  "/images/studen-leaders.jpg",
  "/images/npl2.jpg",
  "/images/students.jpg",
  "/images/students_1.jpg",
];

const Gallery = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  let animationId1 = null;
  let animationId2 = null;

  const scrollStep = 2;

  function scrollRight(timestamp) {
    if (!row1Ref.current) return;

    row1Ref.current.scrollLeft += scrollStep;
    if (row1Ref.current.scrollLeft >= row1Ref.current.scrollWidth / 2) {
      row1Ref.current.scrollLeft = 0;
    }

    animationId1 = requestAnimationFrame(scrollRight);
  }

  function scrollLeft(timestamp) {
    if (!row2Ref.current) return;

    row2Ref.current.scrollLeft -= scrollStep;
    if (row2Ref.current.scrollLeft <= 0) {
      row2Ref.current.scrollLeft = row2Ref.current.scrollWidth / 2;
    }

    animationId2 = requestAnimationFrame(scrollLeft);
  }

  useEffect(() => {
    animationId1 = requestAnimationFrame(scrollRight);
    animationId2 = requestAnimationFrame(scrollLeft);

    return () => {
      if (animationId1) {
        cancelAnimationFrame(animationId1);
      }
      if (animationId2) {
        cancelAnimationFrame(animationId2);
      }
    };
  }, []);

  return (
    <div className="overflow-hidden mt-2">
      <div className="relative">
        <LinearGradient />
        <div
          ref={row1Ref}
          className="relative flex overflow-x-auto py-2 hide-scrollbar space-x-5"
        >
          {rowOne.map((image, i) => (
            <img
              src={image}
              alt={`Image ${i}`}
              className="w-[400px] h-auto"
              key={i}
            />
          ))}
          {rowOne.map((image, i) => (
            <img
              src={image}
              alt={`Image ${i}`}
              className="w-[400px] h-auto"
              key={i}
            />
          ))}
        </div>
      </div>

      <div className="relative">
        <LinearGradient />
        <div
          ref={row2Ref}
          className="relative flex overflow-x-auto py-2 hide-scrollbar space-x-5"
        >
          {rowTwo.map((image, i) => (
            <img
              src={image}
              alt={`Image ${i}`}
              className="w-[400px] h-auto"
              key={i}
            />
          ))}

          {rowTwo.map((image, i) => (
            <img
              src={image}
              alt={`Image ${i}`}
              className="w-[400px] h-auto"
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
