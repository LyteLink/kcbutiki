import connectDB from "@/config/db";
import Club from "@/models/Club";
import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
  const { name, description, content, imageUrl } = await request.json();
  await connectDB();
  try {
    await Club.findByIdAndUpdate(
      params.id,
      { name, description, content, imageUrl },
      { new: true }
    );
    return new NextResponse("Club updated successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
