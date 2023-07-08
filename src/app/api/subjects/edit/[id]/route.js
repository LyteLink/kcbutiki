import connectDB from "@/config/db";
import Subject from "@/models/Subject";
import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
  const { name, description } = await request.json();
  await connectDB();
  try {
    await Subject.findByIdAndUpdate(
      params.id,
      { name, description },
      { new: true }
    );
    return new NextResponse("Subject updated successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
