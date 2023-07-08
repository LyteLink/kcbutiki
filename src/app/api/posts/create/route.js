import connectDB from "@/config/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { title, slug, description, imageUrl, published, content } =
    await request.json();
  await connectDB();

  const newPost = new Post({
    title,
    slug,
    description,
    imageUrl,
    published,
    content,
  });

  try {
    await newPost.save();
    return new NextResponse("Post created successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
