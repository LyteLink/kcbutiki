/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import Watermark from "@/components/common/Watermark";
import Link from "next/link";
import Tooltip from "@/components/common/Tooltip";
import { FiEdit, FiTrash } from "react-icons/fi";
import useSWR from "swr";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";
import useDataTables from "@/components/common/useDataTables";

const Subjects = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: subjects,
    mutate,
    error,
    isLoading,
  } = useSWR(`/api/subjects`, fetcher);

  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
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
      await axios.delete(`/api/subjects/${id}`);
      toast.success("Subject deleted successfully!");
      mutate();
    } catch (error) {
      console.log("Something went wrong!");
      toast.error("Something went wrong!");
    }
  };

  const handleRowSelection = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      const allIds = subjects.map((subject) => subject._id);
      setSelectedRows(allIds);
    }
    setSelectAll(!selectAll);
  };

  const handleDeleteSelected = async () => {
    try {
      await axios.delete(`/api/subjects/deleteSelected?ids=${selectedRows}`, {
        data: { selectedRows },
      });
      mutate();
      toast.success("Selected subjects deleted successfully!");
      setSelectedRows([]);
    } catch (error) {
      console.log("Something went wrong!");
      toast.error("Something went wrong!");
    }
  };

  return (
    <div>
      <Watermark />
      <div className="flex-center-between">
        <h1 className="text-2xl">Subjects</h1>
        <Link href="/dashboard/subjects/create" className="btn !mt-0">
          + Add Subject
        </Link>
      </div>
      <div className="p-4 border rounded-lg shadow bg-white mt-4">
        <div className="p-4 overflow-auto table-wrapper">
          <div className="mb-4">
            {selectedRows.length > 0 && (
              <button
                className="btn !bg-red-600 hover:!bg-red-600/80"
                onClick={handleDeleteSelected}
              >
                Delete Selected
              </button>
            )}
          </div>
          <table id="my-table" className="w-full table-striped rounded-lg">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </th>
                <th>Name</th>
                <th>Description</th>
                <th>Date Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {subjects?.map((subject) => (
                <tr key={subject._id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(subject._id)}
                      onChange={() => handleRowSelection(subject._id)}
                    />
                  </td>
                  <td>{subject.name}</td>
                  <td>{subject.description}</td>
                  <td>{subject.createdAt}</td>
                  <td>
                    <div className="flex-align-center gap-x-3">
                      <div>
                        <Tooltip text="Edit">
                          <Link
                            href={`/dashboard/subjects/edit/${subject._id}`}
                            className="w-10 h-10 flex-center-center rounded-md border shadow hover:bg-slate-100"
                          >
                            <FiEdit className="text-green-600" />
                          </Link>
                        </Tooltip>
                      </div>
                      <Tooltip text="Delete">
                        <button
                          className="w-10 h-10 flex-center-center rounded-md border shadow hover:bg-slate-100"
                          onClick={() => handleDelete(subject._id)}
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

export default Subjects;
