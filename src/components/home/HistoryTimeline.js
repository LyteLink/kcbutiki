/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import "./timeline.css";

const HistoryTimeline = () => {
  return (
    <div className="history-container max-w-5xl mx-auto !px-4">
      <div className="history-timeline !px-4">
        <ul>
          <li>
            <div className="content">
              <h4 className="font-bold text-3xl">2018</h4>
              <img
                src="/images/staff_2.jpg"
                alt="Photo"
                className="h-[180px] w-full object-cover my-4"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                nostrum eos dignissimos amet tenetur a incidunt similique itaque
                deserunt eius?
              </p>
            </div>
          </li>
          <li>
            <div className="content">
              <h4 className="font-bold text-3xl">2015</h4>
              <img
                src="/images/students_1.jpg"
                alt="Photo"
                className="h-[180px] w-full object-cover my-4"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                nostrum eos dignissimos amet tenetur a incidunt similique itaque
                deserunt eius?
              </p>
            </div>
          </li>
          <li>
            <div className="content">
              <h4 className="font-bold text-3xl">2014</h4>
              <img
                src="/images/students.jpg"
                alt="Photo"
                className="h-[180px] w-full object-cover my-4"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                nostrum eos dignissimos amet tenetur a incidunt similique itaque
                deserunt eius?
              </p>
            </div>
          </li>
          <li>
            <div className="content">
              <h4 className="font-bold text-3xl">2012</h4>
              <img
                src="/images/content.jpg"
                alt="Photo"
                className="h-[180px] w-full object-cover my-4"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                nostrum eos dignissimos amet tenetur a incidunt similique itaque
                deserunt eius?
              </p>
            </div>
          </li>
          <li>
            <div className="content">
              <h4 className="font-bold text-3xl">2010</h4>
              <img
                src="/images/staff_3.jpg"
                alt="Photo"
                className="h-[180px] w-full object-cover my-4"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                nostrum eos dignissimos amet tenetur a incidunt similique itaque
                deserunt eius?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HistoryTimeline;
