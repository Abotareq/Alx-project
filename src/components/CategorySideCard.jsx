import React from "react";
import { Link } from "react-router-dom";

export default function CategorySideCard({ title, imageUrl }) {
  return (
    <Link to={`/learningPage/${title}`}
     className="w-full">
      <div className="flex justify-center items-center  bg-gray-100 ">
        <div className="flex w-full max-w-md overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
          {/* Image on the left side */}
          <div className="w-1/3">
            <img
              src={imageUrl}
              alt="Category thumbnail"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content on the right side */}
          <div className="w-2/3 p-4">
            <h3 className="text-lg font-medium text-gray-800">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">Try the {title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
