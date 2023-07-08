import connectDB from "@/config/db";
import Family from "@/models/Family";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const family = await Family.findById(params.id);
    return new NextResponse(JSON.stringify(family), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectDB();

    await Family.findByIdAndDelete(params.id);
    return new NextResponse("Family deleted successfully", { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
