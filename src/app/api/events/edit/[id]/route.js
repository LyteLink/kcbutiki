import connectDB from "@/config/db";
import Event from "@/models/Event";
import { NextResponse } from "next/server";

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
