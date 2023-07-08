/* eslint-disable @next/next/no-img-element */
"use client";
import Watermark from "@/components/common/Watermark";
import Link from "next/link";
import useSWR from "swr";
import Tooltip from "@/components/common/Tooltip";
import { FiEdit, FiTrash } from "react-icons/fi";
import { toast } from "react-hot-toast";
import axios from "axios";
import useDataTables from "@/components/common/useDataTables";

const Posts = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: posts,
    mutate,
    error,
    isLoading,
  } = useSWR(`/api/posts`, fetcher, { revalidateOnMount: true });
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
      await axios.delete(`/api/posts/delete/${id}`);
      toast.success("Post deleted successfully!");
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
        <h1 className="text-2xl">All Events</h1>
        <Link href="/dashboard/posts/create" className="btn !mt-0">
          + Create Post
        </Link>
      </div>
      <div className="p-4 border rounded-lg shadow bg-white mt-4">
        <div className="p-4 overflow-auto table-wrapper">
          <table id="my-table" className="w-full table-striped rounded-lg">
            <thead>
              <tr>
                <th>Title</th>
                <th>Image</th>
                <th>Slug</th>
                <th>Published</th>
                <th>Date Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts?.map((post) => (
                <tr key={post._id}>
                  <td>{post.title}</td>
                  <td>
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-20 h-14 rounded"
                    />
                  </td>
                  <td>{post.slug}</td>
                  <td>{post.published ? "True" : "False"}</td>
                  <td>{post.createdAt}</td>
                  <td>
                    <div className="flex-align-center gap-x-3">
                      <div>
                        <Tooltip text="Edit">
                          <Link
                            href={`/dashboard/posts/edit/${post.slug}`}
                            className="w-10 h-10 flex-center-center rounded-md border shadow hover:bg-slate-100"
                          >
                            <FiEdit className="text-green-600" />
                          </Link>
                        </Tooltip>
                      </div>
                      <Tooltip text="Delete">
                        <button
                          className="w-10 h-10 flex-center-center rounded-md border shadow hover:bg-slate-100"
                          onClick={() => handleDelete(post._id)}
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

export default Posts;
