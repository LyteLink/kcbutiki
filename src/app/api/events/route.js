import connectDB from "@/config/db";
import Event from "@/models/Event";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectDB();
    const events = await Event.find();
    return new NextResponse(JSON.stringify(events), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
