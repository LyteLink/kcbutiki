import connectDB from "@/config/db";
import Slide from "@/models/Slide";
import { NextResponse } from "next/server";

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
