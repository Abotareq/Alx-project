import React from "react";

export default function BlogCard() {
  return (
    <div
      className="
        mx-auto bg-white rounded-lg shadow-md overflow-hidden
        w-[187px] h-[233px]        /* mobile ~140×175 → ~187×233 */
        md:w-[240px] md:h-[287px]  /* desktop ~180×215 → ~240×287 */
      "
    >
      <div className="relative">
        <img
          src="https://themecrafter.com/parezy/demo1/wp-content/uploads/sites/2/2020/06/blog-02-800x600.jpg"
          alt="Adult and child practicing speech skills"
          className="
            block mx-auto object-cover
            w-[173px] h-[133px]       /* mobile ~130×100 → ~173×133 */
            md:w-[225px] md:h-[169px] /* desktop ~169×127 → ~225×169 */
          "
        />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="bg-yellow-300 text-gray-700 text-xs p-1 px-2 flex items-center">
            {/* calendar icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Jun 28, 2020
            <span className="mx-1">•</span>
            {/* comment icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            Comments (0)
          </div>
        </div>
      </div>

      <div className="p-3 text-center">
        <h3 className="text-sm md:text-base font-bold text-navy-800 mb-2">
          Building Confidence in Kids' Speech Skills
        </h3>
        <div className="text-pink-400 flex items-center justify-center text-xs">
          <span>Read More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
