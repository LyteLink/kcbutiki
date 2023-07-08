import connectDB from "@/config/db";
import Slide from "@/models/Slide";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const slide = await Slide.findById(params.id);
    return new NextResponse(JSON.stringify(slide), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectDB();

    await Slide.findByIdAndDelete(params.id);
    return new NextResponse("Slide deleted successfully", { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
