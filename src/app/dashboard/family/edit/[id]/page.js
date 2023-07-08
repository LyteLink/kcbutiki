"use client";

/* eslint-disable @next/next/no-img-element */
import EditFamilyForm from "@/components/family/EditFamilyForm";
import useSWR from "swr";

const EditFamily = ({ params }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const {
    data: family,
    error,
    isLoading,
  } = useSWR(`/api/family/${params.id}`, fetcher);

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
      <h1 className="text-2xl font-semibold mb-3">Update Family Member</h1>
      <EditFamilyForm family={family} />
    </div>
  );
};

export default EditFamily;
