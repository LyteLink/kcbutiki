import connectDB from "@/config/db";
import UnebStats from "@/models/UnebStats";
import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
  const { level, totalStudents, gradeStatistics, bestStudents } =
    await request.json();
  await connectDB();
  try {
    await UnebStats.findByIdAndUpdate(
      params.id,
      { level, totalStudents, gradeStatistics, bestStudents },
      { new: true }
    );
    return new NextResponse("UnebStats updated successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
