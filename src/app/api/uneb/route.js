import connectDB from "@/config/db";
import UnebStats from "@/models/UnebStats";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectDB();
    const unebStats = await UnebStats.find().sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(unebStats), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

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
