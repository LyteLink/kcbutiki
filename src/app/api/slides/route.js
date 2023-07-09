import connectDB from "@/config/db";
import Slide from "@/models/Slide";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectDB();
    const slides = await Slide.find().sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(slides), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

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
