import connectDB from "@/config/db";
import Club from "@/models/Club";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectDB();
    const clubs = await Club.find();
    return new NextResponse(JSON.stringify(clubs), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
