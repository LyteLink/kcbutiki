/* eslint-disable @next/next/no-img-element */
"use client";
import EditClubForm from "@/components/clubs/EditClubForm";
import useSWR from "swr";

const EditClub = ({ params }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const {
    data: club,
    error,
    isLoading,
  } = useSWR(`/api/clubs/${params.id}`, fetcher);

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
      <h1 className="text-2xl font-semibold mb-3">Update Subject</h1>
      <EditClubForm club={club} />
    </div>
  );
};

export default EditClub;
