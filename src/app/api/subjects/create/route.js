import connectDB from "@/config/db";
import Subject from "@/models/Subject";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, description } = await request.json();
  await connectDB();
  const newSubject = new Subject({
    name,
    description,
  });
  try {
    await newSubject.save();
    return new NextResponse("Subject created successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
