import connectDB from "@/config/db";
import Family from "@/models/Family";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, position, category, imageUrl } = await request.json();
  await connectDB();
  const newFamily = new Family({ name, position, category, imageUrl });
  try {
    await newFamily.save();
    return new NextResponse("Family created successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
