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

export const PUT = async (request, { params }) => {
  const { title, description, imageUrl } = await request.json();
  await connectDB();

  try {
    await Slide.findByIdAndUpdate(
      params.id,
      { title, description, imageUrl },
      { new: true }
    );
    return new NextResponse("Slide updated successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
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
