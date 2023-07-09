/* eslint-disable @next/next/no-img-element */
"use client";
import Watermark from "@/components/common/Watermark";
import Link from "next/link";
import useSWR from "swr";
import { FiEdit, FiTrash } from "react-icons/fi";
import Tooltip from "@/components/common/Tooltip";
import { toast } from "react-hot-toast";
import axios from "axios";
import useDataTables from "@/components/common/useDataTables";
import { useState } from "react";

const Events = () => {
  // DATA FETCHING-------------------------------------------------------------------------------
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: events, mutate, error } = useSWR("/api/events", fetcher);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  useDataTables();

  if (!events) {
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
      await axios.delete(`/api/events/${id}`);
      toast.success("Event deleted successfully!");
      mutate();
    } catch (error) {
      console.log("Some thing went wrong!");
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
      const allIds = events.map((event) => event._id);
      setSelectedRows(allIds);
    }
    setSelectAll(!selectAll);
  };

  const handleDeleteSelected = async () => {
    try {
      await axios.delete(`/api/events/deleteSelected?ids=${selectedRows}`, {
        data: { selectedRows },
      });
      mutate();
      toast.success("Selected events deleted successfully!");
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
        <h1 className="text-2xl">All Events</h1>
        <Link href="/dashboard/events/create" className="btn !mt-0">
          + Add Event
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
                <th>Venue</th>
                <th>Date</th>
                <th>Time</th>
                <th>Is Completed</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events?.map((event) => (
                <tr key={event._id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(event._id)}
                      onChange={() => handleRowSelection(event._id)}
                    />
                  </td>
                  <td>{event.name}</td>
                  <td>{event.venue}</td>
                  <td>{event.date}</td>
                  <td>{event.time}</td>
                  <td>{event.isCompleted ? "True" : "False"}</td>
                  <td>
                    <div className="flex-align-center gap-x-3">
                      <div>
                        <Tooltip text="Edit">
                          <Link
                            href={`/dashboard/events/edit/${event._id}`}
                            className="w-10 h-10 flex-center-center rounded-md border shadow hover:bg-slate-100"
                          >
                            <FiEdit className="text-green-600" />
                          </Link>
                        </Tooltip>
                      </div>
                      <Tooltip text="Delete">
                        <button
                          className="w-10 h-10 flex-center-center rounded-md border shadow hover:bg-slate-100"
                          onClick={() => handleDelete(event._id)}
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

export default Events;
