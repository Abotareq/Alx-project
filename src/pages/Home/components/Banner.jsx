import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[color:#4559b3]">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-start items-center p-4 md:p-8">
        <div className="border-4 border-white rounded-full w-64 h-64 md:w-72 md:h-72 overflow-hidden">
          <img
            src="https://images.squarespace-cdn.com/content/v1/583c57d0440243877afcef24/1494338095242-BE2VMJ3S2ZD20U8G5W8H/image-asset.jpeg"
            alt="Child and adult in a playroom"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center relative">
        {/* Header */}
        <h1 className="text-2xl md:text-4xl font-bold text-white shadow-lg leading-tight">
          Speak Easy: Kids’ Speech Therapy Education and Support
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-sm md:text-base mt-4 md:mt-6">
          Empowering children with expert speech therapy, education, and family
          support to unlock confident communication.
        </p>

        {/* Progress Bars */}
        <div className="mt-4 md:mt-6 space-y-2">
          <div>
            <div className="flex justify-between items-center text-white text-sm">
              <span>Voice Disorder</span>
              <span className="text-pink-500 font-semibold text-sm">80%</span>
            </div>
            <div className="bg-gray-700 h-2 md:h-3 mt-1 rounded-full overflow-hidden">
              <div className="bg-yellow-500 h-full rounded-full w-[80%]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center text-white text-sm">
              <span>Speech Therapy</span>
              <span className="text-pink-500 font-semibold text-sm">70%</span>
            </div>
            <div className="bg-gray-700 h-2 md:h-3 mt-1 rounded-full overflow-hidden">
              <div className="bg-yellow-500 h-full rounded-full w-[70%]"></div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-end mt-4 md:mt-6">
          {/*   <button className="bg-cyan-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-cyan-600 hover:shadow-lg transition-all duration-300">
            About Us
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
