import connectDB from "@/config/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
  const { title, slug, description, imageUrl, published, content } =
    await request.json();
  await connectDB();

  try {
    await Post.findByIdAndUpdate(
      params.id,
      { title, slug, description, imageUrl, published, content },
      { new: true }
    );
    return new NextResponse("Post created successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
