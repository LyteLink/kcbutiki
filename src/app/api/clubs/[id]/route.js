import connectDB from "@/config/db";
import Club from "@/models/Club";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const club = await Club.findById(params.id);
    return new NextResponse(JSON.stringify(club), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectDB();

    await Club.findByIdAndDelete(params.id);
    return new NextResponse("Club deleted successfully", { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
