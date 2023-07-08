import connectDB from "@/config/db";
import UnebStats from "@/models/UnebStats";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectDB();
    const unebStats = await UnebStats.find();
    return new NextResponse(JSON.stringify(unebStats), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
