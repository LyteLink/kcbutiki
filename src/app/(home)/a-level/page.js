/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/home/Footer";
import React from "react";
import { BiBookReader } from "react-icons/bi";
import { BsPersonVideo2, BsTable } from "react-icons/bs";
import { FaDownload, FaScroll } from "react-icons/fa";

const Alevel = () => {
  return (
    <>
      <section className="pt-36 pb-12 bg-white max-w-7xl mx-auto px-4">
        <div className="container text-center">
          <div className="section-title">
            <h3 className="text-4xl text-center my-6 font-semibold">
              A-level statistics
            </h3>
          </div>
          <p className="text-muted text-lg mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis rerum
            soluta in non, perferendis provident odio, eaque possimus repellat
            debitis repudiandae illum quas, deserunt reprehenderit nostrum rem
            dignissimos earum. Consectetur!
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center border-l-[12px] border-green-600 bg-green-600 ">
              <div className="text-5xl md:text-8xl  flex-1 bg-white p-2">
                <BiBookReader />
              </div>
              <div className="flex-3 gap-4 px-3">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  1200
                </h1>
                <p className="text-white text-muted">Students</p>
              </div>
            </div>
            <div className="flex items-center border-l-[12px] border-green-600 bg-green-600 ">
              <div className="text-5xl md:text-8xl flex-1 bg-white p-2">
                <BsPersonVideo2 />
              </div>
              <div className="flex-3 gap-4 px-3">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  350
                </h1>
                <p className="text-white text-muted">Candidates</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="section-title text-center">
            <h3 className="text-4xl text-center my-6 font-semibold">
              Resources
            </h3>
          </div>
          <hr className="invis" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8">
            <div className="border relative">
              <div className="flex-align-center gap-x-3 p-4">
                <span className="text-4xl md:text-6xl absolute -top-2 -left-2 bg-white p-4">
                  <BiBookReader />
                </span>

                <h2 className="text-2xl ml-28">
                  <a href="#" title="">
                    Syllabus
                  </a>
                </h2>
              </div>
              <div className="mt-3">
                <div className="p-3">
                  <p>
                    Lorem ipsum door sit amet, fugiat deicata avise id cum, no
                    quo maiorum intel ogrets geuiat operts elicata libere avisse
                    id cumlegebat, liber regione eu sit....
                  </p>
                </div>
              </div>
              <div className="border-t p-2">
                <a
                  href="#"
                  className="btn !bg-green-600 hover:!bg-green-500 flex-center-center gap-2 w-fit"
                  role="button"
                >
                  Download
                  <div>
                    <FaDownload className="ml-1" />
                  </div>
                </a>
              </div>
            </div>
            <div className="border relative">
              <div className="flex-align-center gap-x-3 p-4">
                <span className="text-4xl md:text-6xl absolute -top-2 -left-2 bg-white p-4">
                  <BsTable />
                </span>

                <h2 className="text-2xl ml-28">
                  <a href="#" title="">
                    Timetable
                  </a>
                </h2>
              </div>
              <div className="mt-3">
                <div className="p-3">
                  <p>
                    Lorem ipsum door sit amet, fugiat deicata avise id cum, no
                    quo maiorum intel ogrets geuiat operts elicata libere avisse
                    id cumlegebat, liber regione eu sit....
                  </p>
                </div>
              </div>
              <div className="border-t p-2">
                <a
                  href="#"
                  className="btn !bg-green-600 hover:!bg-green-500 flex-center-center gap-2 w-fit"
                  role="button"
                >
                  Download
                  <div>
                    <FaDownload className="ml-1" />
                  </div>
                </a>
              </div>
            </div>
            <div className="border relative">
              <div className="flex-align-center gap-x-3 p-4">
                <span className="text-4xl md:text-6xl absolute -top-2 -left-2 bg-white p-4">
                  <FaScroll />
                </span>

                <h2 className="text-2xl ml-28">
                  <a href="#" title="">
                    Last Circular
                  </a>
                </h2>
              </div>
              <div className="mt-3">
                <div className="p-3">
                  <p>
                    Lorem ipsum door sit amet, fugiat deicata avise id cum, no
                    quo maiorum intel ogrets geuiat operts elicata libere avisse
                    id cumlegebat, liber regione eu sit....
                  </p>
                </div>
              </div>
              <div className="border-t p-2">
                <a
                  href="#"
                  className="btn !bg-green-600 hover:!bg-green-500 flex-center-center gap-2 w-fit"
                  role="button"
                >
                  Download
                  <div>
                    <FaDownload className="ml-1" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="pt-36 pb-12 bg-white max-w-7xl mx-auto px-4">
  <div className="container">
    <div className="section-title">
      <h3 className="text-4xl text-center my-6 font-semibold">
        Old and New Curriculum for A Level in Uganda
      </h3>
    </div>
    <p className="text-gray-600 text-lg mt-3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis rerum
      soluta in non, perferendis provident odio, eaque possimus repellat
      debitis repudiandae illum quas, deserunt reprehenderit nostrum rem
      dignissimos earum. Consectetur!
    </p>
    <div className="mt-10">
      <h2 className="text-2xl font-semibold">The Old Curriculum</h2>
      <p className="text-gray-700 mt-2">
        The old curriculum for A level in Uganda was based on the 6-3-3 system,
        which means that students would spend 6 years in primary school, 3 years
        in lower secondary school, and 3 years in upper secondary school. The
        curriculum was designed to prepare students for university or other higher
        education.
      </p>
      <ul className="list-disc list-inside mt-4 bg-gray-100 p-4 items-start">
        <li className="text-gray-700 items-start">Mathematics</li>
        <li className="text-gray-700 items-start">Physics</li>
        <li className="text-gray-700 items-start">Chemistry</li>
        <li className="text-gray-700 items-start">Biology</li>
        <li className="text-gray-700 items-start">History</li>
        <li className="text-gray-700 items-start">Geography</li>
        <li className="text-gray-700 items-start">English Literature</li>
        <li className="text-gray-700 items-start">French</li>
        <li className="text-gray-700 items-start">
          <a
            href="https://www.unicef.org/uganda/education/national-curriculum"
            className="text-primary hover:underline"
          >
            More information on the old curriculum
          </a>
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8">The New Curriculum</h2>
      <p className="text-gray-700 mt-2">
        The new curriculum for A level in Uganda is based on the 9-3-4 system,
        which means that students will spend 9 years in primary school, 3 years
        in lower secondary school, and 4 years in upper secondary school. The
        curriculum is designed to provide students with a more comprehensive
        education, including both academic and vocational subjects.
      </p>
      <ul className="list-disc list-inside mt-4 bg-gray-100 p-4">
        <li className="text-gray-700">Mathematics</li>
        <li className="text-gray-700">Physics</li>
        <li className="text-gray-700">Chemistry</li>
        <li className="text-gray-700">Biology</li>
        <li className="text-gray-700">History</li>
        <li className="text-gray-700">Geography</li>
        <li className="text-gray-700">English Literature</li>
        <li className="text-gray-700">French</li>
        <li className="text-gray-700">Art</li>
        <li className="text-gray-700">Music</li>
        <li className="text-gray-700">
          <a
            href="https://www.unesco.org/themes/education/school-curriculum/"
            className="text-primary hover:underline"
          >
            More information on the new curriculum
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>


        <div className="mt-20 pt-6">
          <hr className="hr3" />
          <h1 className="text-2xl my-2 font-semibold text-center">
            Word from DOS.......
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center mt-4">
            <div className="md:col-span-1">
              <img
                src="/images/dosA.jpg"
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
                  dignissimos adipisci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-10 bg-primary">
        <Footer />
      </div>
    </>
  );
};

export default Alevel;
