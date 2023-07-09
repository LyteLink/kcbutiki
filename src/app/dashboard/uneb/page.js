/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import Watermark from "@/components/common/Watermark";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { FiEdit, FiTrash } from "react-icons/fi";
import useSWR from "swr";

const UnebStats = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: unebStats,
    mutate,
    error,
    isLoading,
  } = useSWR(`/api/uneb`, fetcher);

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
      await axios.delete(`/api/uneb/${id}`);
      toast.success("Uneb Stats deleted successfully!");
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
        <h1 className="text-2xl">Uneb Statistics</h1>
        <Link href="/dashboard/uneb/create" className="btn !mt-0">
          + Add Statistics
        </Link>
      </div>
      <div class="p-4 border rounded-lg shadow bg-white mt-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-green-600 border-b pb-2">
          UNEB RESULTS 2023
        </h1>
        {unebStats.length ? (
          unebStats.map((stats) => (
            <div key={stats._id} className="border rounded-lg p-4 mb-4">
              <div className="flex-align-center justify-end gap-3">
                <button
                  className="btn !bg-red-600 flex-center-center gap-x-2 hover:!bg-red-500 !m-0"
                  onClick={() => handleDelete(stats._id)}
                >
                  <FiTrash /> <span>Delete</span>
                </button>
                <Link
                  href={`/dashboard/uneb/edit/${stats._id}`}
                  className="px-5 py-2 rounded-md ring-2 ring-primary shadow shadow-primary/40 flex-center-center gap-x-2 text-primary"
                >
                  <FiEdit /> <span>Edit</span>
                </Link>
              </div>
              <div className="flex-center-between">
                <h1 className="mt-8 text-3xl font-semibold uppercase">
                  {stats.level}
                </h1>
                <h1 className="mt-8 text-2xl font-semibold hidden sm:block">
                  Grade Scores
                </h1>
              </div>
              <div className="mt-4 flex-center-between flex-col sm:glex-row gap-4">
                <div className="border p-4 rounded-lg flex-center-center flex-col gap-y-2 w-full sm:w-fit">
                  <h1 className="text-lg text-muted">
                    Total Number of students
                  </h1>
                  <h1 className="text-4xl md:text-5xl font-bold">
                    {stats.totalStudents}
                  </h1>
                </div>
                <div>
                  <div>
                    <h1 className="mt-2 text-2xl font-semibold sm:hidden">
                      Grade Scores
                    </h1>

                    <div className="flex-align-center gap-4 mt-3">
                      {stats?.gradeStatistics?.map((gradeStats, i) => (
                        <div
                          key={i}
                          className="border p-4 rounded-lg flex-center-center flex-col gap-y-2"
                        >
                          <h1 className="text-lg text-muted">
                            {gradeStats.grade}
                          </h1>
                          <h1 className="text-4xl md:text-5xl font-bold">
                            {gradeStats.numberOfStudents}
                          </h1>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="mt-8 text-3xl font-semibold">
                BEST STUDENT'S IN O'LEVEL
              </h1>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
                {stats?.bestStudents?.map((student, i) => (
                  <div className="border rounded-lg overflow-hidden" key={i}>
                    <img
                      src={student.imageUrl}
                      alt=""
                      className="w-full object-cover h-[250px]"
                    />
                    <div className="p-4 text-center">
                      <h1 className="text-xl">{student.name}</h1>
                      <h1 className="text-3xl font-bold text-green-500">
                        {student.gradeScore}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full">
            <h1 className="text-center text-4xl font-semibold my-10 opacity-60">
              No Statistics captured yet
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default UnebStats;
