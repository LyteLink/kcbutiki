import connectDB from "@/config/db";
import Club from "@/models/Club";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, description, content, imageUrl } = await request.json();
  await connectDB();
  const newClub = new Club({ name, description, content, imageUrl });
  try {
    await newClub.save();
    return new NextResponse("Club created successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
