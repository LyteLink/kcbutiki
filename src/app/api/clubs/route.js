import connectDB from "@/config/db";
import Club from "@/models/Club";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectDB();
    const clubs = await Club.find().sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(clubs), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

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
