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
              Statistics
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
                  dignissimos adipisci, perspiciatis, quo minima veritatis
                  deleniti sequi iusto reiciendis! Obcaecati minus repudiandae
                  doloremque nulla accusamus nesciunt, minima rerum pariatur
                  qui, quidem, porro ad! Deleniti ad, alias accusamus possimus,
                  ea ullam magni perferendis quas consequuntur molestiae
                  corporis sint magnam nulla commodi quos ipsa aperiam
                  laudantium. Quisquam sequi dolore voluptatum, dolores quas aut
                  at amet illum rem sunt pariatur tempora. Labore culpa
                  architecto ipsam saepe nemo, maiores pariatur dolores iure
                  doloribus ratione modi aperiam maxime nostrum ipsum, eveniet
                  harum quas accusamus fuga molestias ullam minus in.
                  Voluptates.
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
