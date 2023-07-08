import connectDB from "@/config/db";
import Event from "@/models/Event";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const event = await Event.findById(params.id);
    return new NextResponse(JSON.stringify(event), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectDB();

    const event = await Event.findByIdAndDelete(params.id);
    return new NextResponse("Event deleted successfully", { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
