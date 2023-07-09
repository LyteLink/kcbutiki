import connectDB from "@/config/db";
import Club from "@/models/Club";
import { NextResponse } from "next/server";

export const DELETE = async (request) => {
  const url = new URL(request.url);
  const ids = url.searchParams.get("ids");
  const selectedRows = ids.split(",");
  await connectDB();
  try {
    await Club.deleteMany({ _id: { $in: selectedRows } });
    return new NextResponse("Selected rows deleted successfully", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
