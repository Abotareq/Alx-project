import React from "react";
import BlogCard from "../../../components/BlogCard";
import HomeHeadings from "../../../components/HomeHeadings";

export default function Blogs() {
  const blogs = Array.from({ length: 3 }, (_, i) => ({ id: i }));

  return (
    <>
      <HomeHeadings subtitle={"Our Blogs"} title={"Our Blogs & Articles"}/>
      <div className="container mx-auto px-4">
        <div
          className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          
          gap-6
        "
        >
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </>
  );
}
