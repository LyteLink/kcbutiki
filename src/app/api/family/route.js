import connectDB from "@/config/db";
import Family from "@/models/Family";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectDB();
    const family = await Family.find();
    return new NextResponse(JSON.stringify(family), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
