import connectDB from "@/config/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectDB();
    const posts = await Post.find().sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

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
