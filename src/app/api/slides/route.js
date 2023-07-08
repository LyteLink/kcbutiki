import connectDB from "@/config/db";
import Slide from "@/models/Slide";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectDB();
    const slides = await Slide.find();
    return new NextResponse(JSON.stringify(slides), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
