import connectDB from "@/config/db";
import Slide from "@/models/Slide";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { title, description, imageUrl } = await request.json();
  await connectDB();

  const newSlide = new Slide({ title, description, imageUrl });

  try {
    await newSlide.save();
    return new NextResponse("Slide created successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
