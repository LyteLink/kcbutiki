import connectDB from "@/config/db";
import Event from "@/models/Event";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectDB();
    const events = await Event.find().sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(events), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const { name, date, time, venue, isCompleted } = await request.json();
  await connectDB();

  const newEvent = new Event({ name, date, time, venue, isCompleted });

  try {
    await newEvent.save();
    return new NextResponse("Event created successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
