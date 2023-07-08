/* eslint-disable react/no-unescaped-entities */
"use client";

import Tooltip from "@/components/common/Tooltip";
/* eslint-disable @next/next/no-img-element */
import Watermark from "@/components/common/Watermark";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { FiEdit, FiTrash } from "react-icons/fi";
import useSWR from "swr";

const Family = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: family,
    mutate,
    error,
    isLoading,
  } = useSWR(`/api/family`, fetcher, {revalidateOnMount: true});

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
      await axios.delete(`/api/family/${id}`);
      toast.success("Family member deleted successfully!");
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
        <h1 className="text-2xl">Butiki Family</h1>
        <Link href="/dashboard/family/create" className="btn !mt-0">
          + Add Family Member
        </Link>
      </div>
      <div className="p-4 rounded-lg shadow border bg-white mt-4">
        <div className="flex flex-align-center md:flex-center-center gap-4 overflow-auto hide-scrollbar">
          <div className="px-2 py-1 rounded-full bg-primary text-white cursor-pointer flex-shrink-0">
            All
          </div>
          <div className="px-2 py-1 rounded-full bg-slate-200 cursor-pointer flex-shrink-0">
            PTA
          </div>
          <div className="px-2 py-1 rounded-full bg-slate-200 cursor-pointer flex-shrink-0">
            Board Members
          </div>
          <div className="px-2 py-1 rounded-full bg-slate-200 cursor-pointer flex-shrink-0">
            Lead Staff
          </div>
          <div className="px-2 py-1 rounded-full bg-slate-200 cursor-pointer flex-shrink-0">
            Student Leaders
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {family.length ? (
            family.map((member) => (
              <div
                className="border rounded-lg text-center relative group"
                key={member._id}
              >
                <div className="relative overflow-hidden cursor-pointer">
                  <img
                    src={`${
                      member.imageUrl ? member.imageUrl : "/images/default.png"
                    }`}
                    alt={member.name}
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="absolute w-full h-full flex-center-center gap-3 bg-primary/50 top-0 left-0 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-a">
                    <Tooltip text="Edit">
                      <Link
                        href={`/dashboard/family/edit/${member._id}`}
                        className="w-10 h-10 flex-center-center bg-white shadow-md border rounded "
                      >
                        <FiEdit className="text-green-500" />
                      </Link>
                    </Tooltip>
                    <Tooltip text="Delete">
                      <button
                        className="w-10 h-10 flex-center-center bg-white shadow-md border rounded"
                        onClick={() => handleDelete(member._id)}
                      >
                        <FiTrash className=" text-red-500" />
                      </button>
                    </Tooltip>
                  </div>
                </div>
                <div className="p-4">
                  <h1 className="text-2xl text-green-600 font-semibold">
                    {member.name}
                  </h1>
                  <h1 className="text-muted">{member.position}</h1>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full">
              <h1 className="text-center text-4xl font-semibold my-10 opacity-60">
                You have'nt added any member to the family yet
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Family;
