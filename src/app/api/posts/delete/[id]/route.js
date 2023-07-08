import connectDB from "@/config/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  try {
    await connectDB();

    await Post.findByIdAndDelete(params.id);
    return new NextResponse("Post deleted successfully", { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
