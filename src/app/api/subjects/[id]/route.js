import connectDB from "@/config/db";
import Subject from "@/models/Subject";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const subject = await Subject.findById(params.id);
    return new NextResponse(JSON.stringify(subject), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

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

export const DELETE = async (request, { params }) => {
  try {
    await connectDB();

    await Subject.findByIdAndDelete(params.id);
    return new NextResponse("Subject deleted successfully", { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
