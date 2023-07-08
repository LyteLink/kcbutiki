/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FiCheck } from "react-icons/fi";

const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4">
      <div className="section-title row text-center">
        <div className="mt-2">
          <h1 className="font-bold text-4xl md:text-5xl">
            Kiira College Butiki (KC-BUTIKI)
          </h1>
          <p className="text-xl mt-4">
            KC-Butiki is a boys, science-based Academic institution with both
            O'Level and A'Level.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap mt-20 gap-10">
        <div className="flex-1 basis-[25rem]">
          <div className="message-box">
            <h4 className="font-bold text-green-600">
              BEST EASTERN AND SOUTHERN REGION SCHOOL
            </h4>
            <h2 className="text-2xl mb-4 font-semibold mt-3">Our Location</h2>
            <p className="text-lg">
              Kiira College Butiki (KCB), commonly referred to as Butiki, is an
              all-boys boarding public secondary school located in Jinja
              district, in the Eastern region of Uganda.
            </p>
            <p className="text-lg">
              The school is located on Butiki hill, in Namulesa trading center,
              along the Jinja-Kamuli Highway. It is approximately 14 kilometers
              (approx. 8.7 miles) from Jinja town.
            </p>
          </div>
        </div>

        <div className="flex-1 basis-[25rem]">
          <div className="w-full">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.417644191421!2d33.19858327239681!3d0.4930792375259933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177e7d91a73e4889%3A0x92d4b1bb50355630!2sKiira%20College%20Butiki!5e0!3m2!1sen!2sug!4v1688732094541!5m2!1sen!2sug"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="text-center mt-4">
                <a
                  id="largeMapLink"
                  target="_blank"
                  href="https://maps.google.com/maps?ll=0.493004,33.19919&z=18&t=m&hl=en&gl=UG&mapclient=embed&q=Kiira%20College%20Butiki"
                  className="text-blue-500 underline"
                >
                  View Larger Map
                </a>
                &nbsp; | &nbsp;
                <a
                  id="dirMapLink"
                  target="_blank"
                  href="https://maps.google.com/maps/dir//Kiira+College+Butiki/@0.4929934,33.1992316,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x177e7d91a73e4889:0x92d4b1bb50355630"
                  className="text-blue-500 underline"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-center-center flex-wrap mt-28 gap-10">
        <div className="flex-1 basis-[25rem]">
          <div className="post-media">
            <img
              src="/images/content.jpg"
              alt="KCB"
              className="w-full rounded"
            />
          </div>
        </div>

        <div className="flex-1 basis-[25rem]">
          <div className="message-box">
            <h2 className="text-3xl font-semibold">Our Vision and Motto</h2>
            <div className="p-4 border-l-4 border-green-500 bg-green-500/20 text-primary/70 mt-4">
              <p className="text-lg">
                <strong>College Vision: </strong>To produce multi-skilled men of
                virtue, able to achieve their highest potential in a diverse
                changing world.
              </p>
            </div>
            <div className="p-4 border-l-4 border-green-500 mt-4 bg-green-500/20 text-primary/70">
              <p className="text-lg">
                <strong>College Mission: </strong>To provide wholesome education
                that transforms young men into morally upright, responsible, and
                sociable citizens.
              </p>
            </div>
            <p className="text-lg border-2 border-green-500 shadow shadow-green-500/40 mt-4 p-2">
              College Motto: <strong>"Discipline and Hardwork"</strong>
            </p>
            <div className="mt-6">
              <strong>College Core Values:</strong>
              <div className="flex-align-center gap-x-4 flex-wrap">
                <div className="flex-align-center gap-x-3 mt-4">
                  <div className="p-3 rounded-full bg-slate-200">
                    <FiCheck />
                  </div>
                  <span>God Fearing</span>
                </div>
                <div className="flex-align-center gap-x-3 mt-4">
                  <div className="p-3 rounded-full bg-slate-200">
                    <FiCheck />
                  </div>
                  <span>Self-discipline</span>
                </div>
                <div className="flex-align-center gap-x-3 mt-4">
                  <div className="p-3 rounded-full bg-slate-200">
                    <FiCheck />
                  </div>
                  <span>Commitment to achieve set goals</span>
                </div>
                <div className="flex-align-center gap-x-3 mt-4">
                  <div className="p-3 rounded-full bg-slate-200">
                    <FiCheck />
                  </div>
                  <span>Respect for Diversity</span>
                </div>
                <div className="flex-align-center gap-x-3 mt-4">
                  <div className="p-3 rounded-full bg-slate-200">
                    <FiCheck />
                  </div>
                  <span>Integrity</span>
                </div>
                <div className="flex-align-center gap-x-3 mt-4">
                  <div className="p-3 rounded-full bg-slate-200">
                    <FiCheck />
                  </div>
                  <span>Academic Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
