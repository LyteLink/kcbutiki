/* eslint-disable @next/next/no-img-element */
"use client";

import EditPostForm from "@/components/posts/EditPostForm";
import useSWR from "swr";

const EditPost = ({ params }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const {
    data: post,
    error,
    isLoading,
  } = useSWR(`/api/posts/${params.id}`, fetcher);

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
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-3">Update Post/News</h1>
      <EditPostForm post={post} />
    </div>
  );
};

export default EditPost;
