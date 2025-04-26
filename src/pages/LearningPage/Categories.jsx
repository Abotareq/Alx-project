import React from "react";
import CategorySideCard from "../../components/CategorySideCard";
import { catagories } from "../../constants";
import { catagoriesImages } from "../../constants";

export default function Categories() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-4">Categories</h1>
        <div className="grid grid-flow-row gap-y-5 w-full max-w-screen-lg">
          {catagories.map((category, index) => (
            <CategorySideCard
              key={index}
              title={category}
              imageUrl={catagoriesImages[index]}
            />
          ))}
        </div>
      </div>
    </>
  );
} 