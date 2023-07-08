import connectDB from "@/config/db";
import Subject from "@/models/Subject";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectDB();
    const subjects = await Subject.find();
    return new NextResponse(JSON.stringify(subjects), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
