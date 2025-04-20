import React from "react";

export default function TrainerCard() {
  return (
    <div className="mx-auto mb-6 md:w-[320px] w-[260px] rounded-lg overflow-hidden shadow-lg bg-white relative">
      {/* Main image container */}
      <div className="relative w-full md:h-[304px] h-[244px]">
        <img
          src="https://themecrafter.com/parezy/demo1/wp-content/uploads/sites/2/2020/06/team-05-600x600.jpg"
          alt="Speech pathologist working with child"
          className="md:w-[304px] md:h-[304px] w-[244px] h-[244px] object-cover mx-auto"
        />

        {/* LINK ICON + SOCIAL ICONS WRAPPER */}
        <div className="absolute right-3 top-2">
          <div className="relative inline-block group">
            {/* Link icon */}
            <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white cursor-pointer group-hover:bg-blue-500 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>

            <div className="absolute right-0 top-10 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {[
                { bg: "bg-blue-400", hover: "hover:bg-blue-500", svgPath: /* your SVG path */ "" },
                { bg: "bg-blue-500", hover: "hover:bg-blue-600", svgPath: /* ... */ "" },
                { bg: "bg-blue-300", hover: "hover:bg-blue-400", svgPath: /* ... */ "" },
                { bg: "bg-red-400", hover: "hover:bg-red-500", svgPath: /* ... */ "" },
              ].map((style, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full ${style.bg} flex items-center justify-center text-white cursor-pointer ${style.hover}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    {/* Replace with your original SVG paths */}
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave SVG overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 500 50"
            preserveAspectRatio="none"
            className="w-full h-12"
          >
            <path
              d="M0,0 C150,40 350,0 500,20 L500,50 L0,50 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Card content */}
      <div className="p-3">
        <h2 className="text-xl font-bold text-indigo-900">Michael Jackson</h2>
        <p className="text-gray-600 text-sm">Speech Pathologist</p>
      </div>
    </div>
  );
}
