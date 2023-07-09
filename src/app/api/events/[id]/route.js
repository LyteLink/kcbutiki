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

export const PUT = async (request, { params }) => {
  const { name, date, time, venue, isCompleted } = await request.json();
  await connectDB();

  try {
    const event = await Event.findByIdAndUpdate(
      params.id,
      { name, date, time, venue, isCompleted },
      { new: true }
    );
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    return new NextResponse("Event updated successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
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
