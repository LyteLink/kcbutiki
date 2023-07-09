/* eslint-disable react/no-unescaped-entities */
"use client";

/* eslint-disable @next/next/no-img-element */
import Watermark from "@/components/common/Watermark";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { FiEdit, FiTrash } from "react-icons/fi";
import useSWR from "swr";

const Slides = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: slides,
    mutate,
    error,
    isLoading,
  } = useSWR(`/api/slides`, fetcher);

  if (isLoading) {
    return (
      <div className="flex-center-center mt-20">
        <img
          src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
          alt=""
        />
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1 className="text-3xl text-center mt-20">Something went wrong...</h1>
      </div>
    );
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/slides/${id}`);
      toast.success("Slide deleted successfully!");
      mutate();
    } catch (error) {
      console.log("Some thing went wrong!");
      toast.error("Something went wrong!");
    }
  };

  return (
    <div>
      <Watermark />
      <div className="flex-center-between">
        <h1 className="text-2xl">These slides appear on your home page</h1>
        <Link
          href="/dashboard/slides/create"
          className="btn !mt-0 flex-shrink-0"
        >
          + Add Slide
        </Link>
      </div>
      {/* Slides */}

      {slides.length ? (
        slides?.map((slide) => (
          <div
            key={slide._id}
            class="p-4 border rounded-lg shadow bg-white mt-4 flex-col md:flex-row flex-center-between gap-4"
          >
            <div className="flex-align-center gap-4 flex-col sm:flex-row">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-[250px] h-auto"
              />
              <div>
                <h1 className="text-2xl font-semibold">{slide.title}</h1>
                <p className="text-muted">{slide.description}</p>
              </div>
            </div>
            <div className="flex md:flex-col gap-4">
              <button
                className="btn !bg-red-600 flex-center-center gap-x-2 hover:!bg-red-500 !mt-0"
                onClick={() => handleDelete(slide._id)}
              >
                <FiTrash /> <span>Delete</span>
              </button>
              <div>
                <Link
                  href={`/dashboard/slides/edit/${slide._id}`}
                  className="px-5 py-2 rounded-md ring-2 ring-primary shadow shadow-primary/40 flex-center-center gap-x-2 text-primary flex-shrink-0"
                >
                  <FiEdit /> <span>Edit</span>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h1 className="text-center text-4xl font-semibold my-10 opacity-70">
            You have'nt create any slides
          </h1>
        </div>
      )}
    </div>
  );
};

export default Slides;
