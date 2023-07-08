/* eslint-disable @next/next/no-img-element */
import React from "react";

const BlogPosts = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/images/staff.jpg",
      title: "Blog Post 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod ligula ac cursus faucibus.",
      date: "2023-07-10",
    },
    {
      id: 2,
      image: "/images/students.jpg",
      title: "Blog Post 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod ligula ac cursus faucibus.",
      date: "2023-07-15",
    },
    // Add more blog post objects as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <p className="text-gray-500">
                {new Date(post.date).toDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
