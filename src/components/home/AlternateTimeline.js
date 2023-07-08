/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import "./timeline.css";

const AlternateTimeline = () => {
  return (
    <div className="bg-white py-12 lg:py-16 max-w-5xl mx-auto !px-4">
      <div className="text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          KIIRA COLLEGE BUTIKI
        </h3>
        <div className="text-xl md:text-2xl mb-16">
          The <span className="text-green-500">HILL</span> of intellectuals.
        </div>
      </div>
      <div className="history-container max-w-5xl mx-auto !px-4 alternate-timeline mt-8">
        <div className="history-timeline !px-4">
          <ul>
            <li>
              <div className="content">
                <h6 className="font-bold">Motto:</h6>
                <p>"Discipline and Hardwork"</p>
              </div>
            </li>
            <li>
              <div className="content">
                <h6 className="font-bold">Mission:</h6>
                <p>
                  "To provide wholesome education that transforms young men into
                  morally upright, responsible and sociable citizens."
                </p>
              </div>
            </li>
            <li>
              <div className="content">
                <h6 className="font-bold">Vision:</h6>
                <p>
                  "To produce multi-skilled men of virtue, able to achieve their
                  highest potential in a diverse changing world"
                </p>
              </div>
            </li>
            <li>
              <div className="content">
                <h6 className="font-bold">School Philosophy</h6>
                <p>
                  KC-Philosophy looks at education as a tool for liberating and
                  broadening horizons of learners. Education must produce
                  tolerant, adaptable and innovative individuals who fit into a
                  changing global village.
                  <br />
                  For this to happen, the education delivered at KC-Butiki must
                  be wholesome and of high quality.
                </p>
              </div>
            </li>
            <li>
              <div className="content">
                <h6 className="font-bold">School Mandate</h6>
                <p>
                  KC-Butiki's Mandate is derived from the foundation body and
                  government policy on education as set out by MOESTS. The
                  School Mandate is to offer O'level & A'level secondary school
                  education to boys during the 2016-2026 strategic framework.
                  KCB will execute this mandate through a rigorous curriculum
                  that will promote its Vision, mission and core Values.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AlternateTimeline;
