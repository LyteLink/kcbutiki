import connectDB from "@/config/db";
import UnebStats from "@/models/UnebStats";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { level, totalStudents, gradeStatistics, bestStudents } =
    await request.json();
  await connectDB();
  const newUnebStats = new UnebStats({
    level,
    totalStudents,
    gradeStatistics,
    bestStudents,
  });
  try {
    await newUnebStats.save();
    return new NextResponse("UnebStats created successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
