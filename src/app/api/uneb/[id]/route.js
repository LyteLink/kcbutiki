import connectDB from "@/config/db";
import UnebStats from "@/models/UnebStats";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const unebStats = await UnebStats.findById(params.id);
    return new NextResponse(JSON.stringify(unebStats), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectDB();

    await UnebStats.findByIdAndDelete(params.id);
    return new NextResponse("UnebStats deleted successfully", { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
