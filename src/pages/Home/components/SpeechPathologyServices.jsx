import React from "react";
import HomeHeadings from "../../../components/HomeHeadings";
HomeHeadings
export default function SpeechPathologyServices() {
  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto p-4 md:p-6 bg-white">
        {/* Main layout - header and grid in same row */}
        <div className="flex flex-col md:flex-row md:gap-8">
          {/* Left side - Header Section */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <HomeHeadings
              title={"Expert Pathologists for Communication Success"}
              subtitle={"WHAT WE DO"}
            />
            <p className="text-gray-600 mb-6">
              Speech-language pathology is the study of speech and language such
              as developmental articulation disorder Dysphasia.
            </p>

            <div className="flex flex-col space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white">1</span>
                </div>
                <p className="text-indigo-900 font-medium">
                  Successful conversations with children.
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white">2</span>
                </div>
                <p className="text-indigo-900 font-medium">
                  Eye contact is always important in language.
                </p>
              </div>
            </div>

            <button className="bg-blue-400 text-white px-6 py-3 rounded-md hover:bg-blue-500 transition-colors">
              About Us
            </button>
          </div>

          {/* Right side - Services Grid */}
          <div className="md:w-2/3">
            {/* Services Grid - Top Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="flex flex-col items-center text-center p-4">
                <div className="mb-3">
                  <img
                    src="https://themecrafter.com/parezy/demo1/wp-content/uploads/sites/2/2020/06/service-icon1.png"
                    alt="Building blocks"
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-indigo-900 font-bold text-lg">
                  First Steps
                  <br />
                  Therapy
                </h3>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="mb-3">
                  <img
                    src="https://themecrafter.com/parezy/demo1/wp-content/uploads/sites/2/2020/06/service-icon2.png"
                    alt="Stacking rings"
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-indigo-900 font-bold text-lg">
                  Pediatric Hand
                  <br />
                  Therapy
                </h3>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="mb-3">
                  <img
                    src="https://themecrafter.com/parezy/demo1/wp-content/uploads/sites/2/2020/06/service-icon3.png"
                    alt="Spinning top"
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-indigo-900 font-bold text-lg">
                  Occupational
                  <br />
                  Therapy
                </h3>
              </div>
            </div>

            {/* Services Grid - Bottom Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-4">
                <div className="mb-3">
                  <img
                    src="https://themecrafter.com/parezy/demo1/wp-content/uploads/sites/2/2020/06/service-icon4.png"
                    alt="Rocket"
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-indigo-900 font-bold text-lg">
                  Evaluations
                  <br />
                  Speech
                </h3>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="mb-3">
                  <img
                    src="https://themecrafter.com/parezy/demo1/wp-content/uploads/sites/2/2020/06/service-icon5.png"
                    alt="Building blocks"
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-indigo-900 font-bold text-lg">
                  Therapeutic
                  <br />
                  Listening
                </h3>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="mb-3">
                  <img
                    src="https://themecrafter.com/parezy/demo1/wp-content/uploads/sites/2/2020/06/service-icon6.png"
                    alt="Pinwheel"
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-indigo-900 font-bold text-lg">
                  Expressive
                  <br />
                  Language
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <div className="fixed bottom-4 right-4">
          <button className="bg-pink-500 text-white rounded-full p-3 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
