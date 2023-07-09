import connectDB from "@/config/db";
import Family from "@/models/Family";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectDB();
    const family = await Family.find().sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(family), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

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
