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

export const PUT = async (request, { params }) => {
  const { name, position, category, imageUrl } = await request.json();
  await connectDB();
  try {
    await Family.findByIdAndUpdate(
      params.id,
      { name, position, category, imageUrl },
      { new: true }
    );
    return new NextResponse("Family updated successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
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
