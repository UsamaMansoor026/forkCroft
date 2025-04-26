import React from "react";

const Blog = ({ blog }) => {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    const formatted = date.toLocaleDateString("en-us", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    // Add a dot after the month abbreviation
    return formatted.replace(/^(\w{3})/, "$1.");
  };
  return (
    <article key={blog.id}>
      {/* Blog Image */}
      <div className="overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="object-cover w-full h-[300px]"
        />
      </div>

      {/* Remaining Content */}
      <div className="p-5">
        {/* Blog Date */}
        <p className="text-sm text-captions mb-2">{formatDate(blog.date)}</p>
        <h4 className="font-medium text-xl lg:min-h-[80px] min-h-auto">
          {blog.title}
        </h4>

        {/* read more */}
        <p className="duration-200 hover:underline w-fit cursor-pointer mt-4">
          Read more
        </p>
      </div>
    </article>
  );
};

export default Blog;
