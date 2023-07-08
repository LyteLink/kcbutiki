/* eslint-disable @next/next/no-img-element */
"use client";
import Watermark from "@/components/common/Watermark";
import Link from "next/link";
import { toast } from "react-hot-toast";
import axios from "axios";
import useSWR from "swr";
import Tooltip from "@/components/common/Tooltip";
import { FiEdit, FiTrash } from "react-icons/fi";
import useDataTables from "@/components/common/useDataTables";

const Clubs = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: clubs,
    mutate,
    error,
    isLoading,
  } = useSWR(`/api/clubs`, fetcher, { revalidateOnMount: true });
  useDataTables();

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
      await axios.delete(`/api/clubs/${id}`);
      toast.success("Club deleted successfully!");
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
        <h1 className="text-2xl">All Clubs</h1>
        <Link href="/dashboard/clubs/create" className="btn !mt-0">
          + Add Club
        </Link>
      </div>
      <div class="p-4 border rounded-lg shadow bg-white mt-4">
        <div class="p-4 overflow-auto table-wrapper">
          <table id="my-table" class="w-full table-striped rounded-lg">
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Description</th>
                <th>Date Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {clubs?.map((club) => (
                <tr key={club._id}>
                  <td>{club.name}</td>
                  <td>
                    <img
                      src={club.imageUrl ? club.imageUrl : "/images/su.png"}
                      alt={club.name}
                      className="w-20 h-14 rounded"
                    />
                  </td>
                  <td>
                    {club?.description?.length > 50
                      ? `${club.description.slice(0, 50)}...`
                      : club.description}
                  </td>
                  <td>{club.createdAt}</td>
                  <td>
                    <div className="flex-align-center gap-x-3">
                      <div>
                        <Tooltip text="Edit">
                          <Link
                            href={`/dashboard/clubs/edit/${club._id}`}
                            className="w-10 h-10 flex-center-center rounded-md border shadow hover:bg-slate-100"
                          >
                            <FiEdit className="text-green-600" />
                          </Link>
                        </Tooltip>
                      </div>
                      <Tooltip text="Delete">
                        <button
                          className="w-10 h-10 flex-center-center rounded-md border shadow hover:bg-slate-100"
                          onClick={() => handleDelete(club._id)}
                        >
                          <FiTrash className="text-red-600" />
                        </button>
                      </Tooltip>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Clubs;
